require 'bibtex'
require 'json'

BIBROOT      = "/home/simone/Documents/Curriculum/Current/bib/"

Dir.chdir(File.dirname(File.expand_path(__FILE__)) + "/../home")

PUBLICATION_TEMPATE = <<TEMPLATE
<div class="publication clearfix">
    <div class="type" title="{TYPE}">[{COUNTER}]</div>

    <div class="details">
        <div class="title">{TITLE}</div>
        <div class="authors">{AUTHOR}</div>
    </div>

    <div class="description">
        <div class="venue">{VENUE}</div>
        <div class="venue">{YEAR}</div>
    </div>

    <div class="download">
        {DOWNLOAD}
        {CITE}
    </div>
</div>
TEMPLATE

DOWNLOAD_ROW = "<a href=\"{PATH}\"><i class=\"fa fa-book\" aria-hidden=\"true\" title=\"Download\"></i></a>"
CITE_ROW     = "<a href=\"javascript:cite('{KEY}');\"><i class=\"fa fa-quote-right\" aria-hidden=\"true\" title=\"Cite\"></i></a>"

class String
    def fixspecials
        self.gsub("\\'{a}", "&aacute;").gsub(/[{}]/, "")
    end
end

def inject_html(website, bibdata)
    lines = website.lines
    
    since = lines.index(lines.select { |l| l.strip.chomp == "<!-- START PUBLICATIONS -->" }.first) + 1
    to    = lines.index(lines.select { |l| l.strip.chomp == "<!-- END PUBLICATIONS -->" }.first)
    
    result = lines[0...since] + bibdata.lines + lines[to...lines.size]
    
    return result.join()
end

def inject_js(javascript, bibdata)
    lines = javascript.lines
    
    since = lines.index(lines.select { |l| l.strip.chomp == "// Citations start" }.first) + 1
    to    = lines.index(lines.select { |l| l.strip.chomp == "// Citations end" }.first)
    
    result = lines[0...since] + bibdata.lines + lines[to...lines.size]
    
    return result.join()
end

def load_bib
    all = ""
    Dir.glob(BIBROOT + "/*.bib").each do |bib|
        all += File.read(bib) + "\n"
    end
    
    return BibTeX.parse(all)
end

def instantiate_template(entry, type, counter)
    venue = entry.journal ? entry.journal.value : entry.booktitle.value
    venue = venue.scan(/\(([^)]+)\)/).flatten.first.gsub(/[{}]/, "")
    
    if entry.doi != nil && entry.doi.value.strip.chomp != ""
        key = entry.doi.gsub(/[^0-9A-Za-z.\-]/, "_")
#         bibpath  = save_bibfile(entry, key)
        bib_element = make_entry_hash(entry, key)
        cite_row = CITE_ROW.gsub('{KEY}', key)
    else
        key = nil
        bib_element = {}
        cite_row = ""
    end
    
    download_path = "files/#{entry.year.value}/#{venue}#{entry.year.value}#{entry.title.value.split(/[^A-Za-z0-9]/).select { |e| e.length > 0}[0...3].map { |w| w.capitalize }.join("") }.pdf"    
    if FileTest.exist?(download_path)
        download_row = DOWNLOAD_ROW.gsub('{PATH}', download_path)
    else
        download_row = ""
        warn "File #{download_path} not found for pub \"#{entry.title.value.fixspecials}\""
    end
    
    author_string = entry.author.to_a.map { |a| a.first.fixspecials + " " + a.last.fixspecials }.map { |e| e == "Simone Scalabrino" ? "<b>Simone Scalabrino</b>" : e }.join(", ")
    
    element = PUBLICATION_TEMPATE.clone
    element.gsub!('{TYPE}', type)
    element.gsub!('{COUNTER}', entry.keywords.value  + counter.to_s)
    element.gsub!('{TITLE}', entry.title.value.fixspecials)
    element.gsub!('{AUTHOR}', author_string)
    element.gsub!('{VENUE}', venue)
    element.gsub!('{YEAR}', entry.year.value)
    element.gsub!('{DOWNLOAD}', download_row)
    element.gsub!('{CITE}', cite_row)
    
    return element + "\n", bib_element
end

def print_and_instantiate_for(bib, category, label)
    text = ""
    all = bib[category].sort_by { |e| -e.year.to_i }
    
    bib_elements = {}
    counter = all.size
    all.each do |entry|
        part, bib_element = instantiate_template(entry, label, counter)
        text += part
        bib_elements = bib_elements.merge(bib_element)
        
        counter -= 1
    end
    
    return text, bib_elements
end

def save_bibfile(entry, key)
    path = "files/citations/#{key}.bib"
    singlebib = BibTeX::Bibliography.new
    entry = entry.clone
    entry.keywords = nil
    singlebib << entry
    singlebib.save_to(path)
    
    return path
end

def make_entry_hash(entry, key)
    entry = entry.clone
    entry.keywords = nil
    
    row = entry.to_s
    
    return { key => row }
end

def make_bibtext(bibliography)
    
    journals, journals_bibs = print_and_instantiate_for(bibliography, '@article', "Journal paper")
    confs, confs_bibs       = print_and_instantiate_for(bibliography, '@inproceedings', "Conference paper")
        
    return journals + confs, journals_bibs.merge(confs_bibs) 
end

website         = File.read("index.html")
citations_file  = File.read("js/citations.js")
bibliography = load_bib
website_refs, citations = make_bibtext(bibliography)

File.open("index.html", 'w') do |f|
    f.puts inject_html(website, website_refs)
end

File.open("js/citations.js", 'w') do |f|
     f.puts inject_js(citations_file, "citations = " + JSON.generate(citations) + "\n")
end
