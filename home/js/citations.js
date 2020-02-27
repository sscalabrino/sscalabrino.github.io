function get_citation(year, name) {
    citations = {
        '2020': {
        },
        
        '2019': {
            'tseUnderstandability': '@ARTICLE{8651396, \nauthor={S. {Scalabrino} and G. {Bavota} and C. {Vendome} and M. {Linares-V?squez} and D. {Poshyvanyk} and R. {Oliveto}}, \njournal={IEEE Transactions on Software Engineering}, \ntitle={Automatically Assessing Code Understandability}, \nyear={2019}, \nvolume={}, \nnumber={}, \npages={1-1}, \nkeywords={Complexity theory;Software;Computer bugs;Readability metrics;Software measurement;Indexes;Software metrics;Code understandability;Empirical study;Negative result}, \ndoi={10.1109/TSE.2019.2901468}, \nISSN={0098-5589}, \nmonth={},}',
            
            'memeaAtticus': '@inproceedings{balestrieri2019architecture,\ntitle={The architecture of an innovative smart T-shirt based on the Internet of Medical Things paradigm},\nauthor={Balestrieri, Eulalia and Boldi, Franco and Colavita, Angela Rita and De Vito, Luca and Laudato, Gennaro and Oliveto, Rocco and Picariello, Francesco and Rivaldi, Simone and Scalabrino, Simone and Torchitti, Paolo and others},\nbooktitle={2019 IEEE International Symposium on Medical Measurements and Applications (MeMeA)},\npages={1--6},\nyear={2019},\norganization={IEEE}}'
        },
        
        '2018': {
             'icpcTestReadability': '@inproceedings{Grano:2018:EIR:3196321.3196363,\n author = {Grano, Giovanni and Scalabrino, Simone and Gall, Harald C. and Oliveto, Rocco},\n title = {An Empirical Investigation on the Readability of Manual and Generated Test Cases},\n booktitle = {Proceedings of the 26th Conference on Program Comprehension},\n series = {ICPC 2018},\n year = {2018},\n isbn = {978-1-4503-5714-2},\n location = {Gothenburg, Sweden},\n pages = {348--351},\n numpages = {4},\n url = {http://doi.acm.org/10.1145/3196321.3196363},\n doi = {10.1145/3196321.3196363},\n acmid = {3196363},\n publisher = {ACM},\n address = {New York, NY, USA},\n keywords = {automated testing, empirical software engineering, readability},\n}', 
             
             'jsepReadability': '@article{doi:10.1002/smr.1958,\nauthor = {Scalabrino, Simone and Linares-Vásquez, Mario and Oliveto, Rocco and Poshyvanyk, Denys},\ntitle = {A comprehensive model for code readability},\njournal = {Journal of Software: Evolution and Process},\nvolume = {30},\nnumber = {6},\npages = {e1958},\nkeywords = {code readability, quality warning prediction, textual analysis},\ndoi = {10.1002/smr.1958},\nurl = {https://onlinelibrary.wiley.com/doi/abs/10.1002/smr.1958},\neprint = {https://onlinelibrary.wiley.com/doi/pdf/10.1002/smr.1958},\nnote = {e1958 smr.1958}\n}'
        },
        
        '2017': {
            'icsesrcOdysseys' : '@inproceedings{Scalabrino:2017:SOP:3098344.3098374,\nauthor = {Scalabrino, Simone},\ntitle = {On Software Odysseys and How to Prevent Them},\nbooktitle = {Proceedings of the 39th International Conference on Software Engineering Companion},\nseries = {ICSE-C 17},\nyear = {2017},\nisbn = {978-1-5386-1589-8},\nlocation = {Buenos Aires, Argentina},\npages = {91--93},\nnumpages = {3},\nurl = {https://doi.org/10.1109/ICSE-C.2017.157},\ndoi = {10.1109/ICSE-C.2017.157},\nacmid = {3098374},\npublisher = {IEEE Press},\naddress = {Piscataway, NJ, USA},\nkeywords = {program comprehension, recommender systems, software maintenance},\n}',
            
            'icseLibra': '@inproceedings{Ponzanelli:2017:SSD:3097368.3097381,\nauthor = {Ponzanelli, Luca and Scalabrino, Simone and Bavota, Gabriele and Mocci, Andrea and Oliveto, Rocco and Di Penta, Massimiliano and Lanza, Michele},\ntitle = {Supporting Software Developers with a Holistic Recommender System},\nbooktitle = {Proceedings of the 39th International Conference on Software Engineering},\nseries = {ICSE 17},\nyear = {2017},\nisbn = {978-1-5386-3868-2},\nlocation = {Buenos Aires, Argentina},\npages = {94--105},\nnumpages = {12},\nurl = {https://doi.org/10.1109/ICSE.2017.17},\ndoi = {10.1109/ICSE.2017.17},\nacmid = {3097381},\npublisher = {IEEE Press},\naddress = {Piscataway, NJ, USA},\nkeywords = {mining unstructured data, recommender systems},\n} ',
            
            'msrASCAT': '@inproceedings{Zampetti:2017:OSP:3104188.3104230, author = {Zampetti, Fiorella and Scalabrino, Simone and Oliveto, Rocco and Canfora, Gerardo and Di Penta, Massimiliano},\ntitle = {How Open Source Projects Use Static Code Analysis Tools in Continuous Integration Pipelines},\nbooktitle = {Proceedings of the 14th International Conference on Mining Software Repositories},\nseries = {MSR 17},\nyear = {2017},\nisbn = {978-1-5386-1544-7},\nlocation = {Buenos Aires, Argentina},\npages = {334--344},\nnumpages = {11},\nurl {https://doi.org/10.1109/MSR.2017.2},\ndoi = {10.1109/MSR.2017.2},\nacmid = {3104230},\npublisher = {IEEE Press},\naddress = {Piscataway, NJ, USA},\nkeywords = {continuous integration, empirical study, open source projects, static analysis tools},\n}',
            
//             'freelancing': 'To appear',
            'aseUnderstandability': '@inproceedings{Scalabrino:2017:AAC:3155562.3155617,\n author = {Scalabrino, Simone and Bavota, Gabriele and Vendome, Christopher and Linares-Vásquez, Mario and Poshyvanyk, Denys and Oliveto, Rocco},\n title = {Automatically Assessing Code Understandability: How Far Are We?},\n booktitle = {Proceedings of the 32Nd IEEE/ACM International Conference on Automated Software Engineering},\n series = {ASE 2017},\n year = {2017},\n isbn = {978-1-5386-2684-9},\n location = {Urbana-Champaign, IL, USA},\n pages = {417--427},\n numpages = {11},\n url = {http://dl.acm.org/citation.cfm?id=3155562.3155617},\n acmid = {3155617},\n publisher = {IEEE Press},\n address = {Piscataway, NJ, USA},\n keywords = {Code understandability, Empirical study, Negative result, Software metrics}\n}',
//             'tseClap': 'To appear'
        },
        
        '2016': {
            'ssbseSearch' : '@Inbook{Scalabrino2016,\nauthor="Scalabrino, Simone\nand Grano, Giovanni\nand Di Nucci, Dario\nand Oliveto, Rocco\nand De Lucia, Andrea",\neditor="Sarro, Federica\nand Deb,\nKalyanmoy",\ntitle="Search-Based Testing of Procedural Programs: Iterative Single-Target or Multi-target Approach?",\nbookTitle="Search Based Software Engineering: 8th International Symposium, SSBSE 2016, Raleigh, NC, USA, October 8-10, 2016, Proceedings",\nyear="2016",\npublisher="Springer International Publishing",\naddress="Cham",\npages="64--79",\nisbn="978-3-319-47106-8",\ndoi="10.1007/978-3-319-47106-8_5",\nurl="http://dx.doi.org/10.1007/978-3-319-47106-8_5"\n}',
            
            'icpcImproving': '@INPROCEEDINGS{7503707, \nauthor={S. Scalabrino and M. Linares-Vásquez and D. Poshyvanyk and R. Oliveto}, \nbooktitle={2016 IEEE 24th International Conference on Program Comprehension (ICPC)}, \ntitle={Improving code readability models with textual features}, \nyear={2016}, \npages={1-10}, \nkeywords={software maintenance;source code (software);text analysis;code readability models;code snippets;line length;program comprehension effort;software maintenance;software readability;source code;textual features;Computational modeling;Feature extraction;Semantics;Software quality;Syntactics;Visualization}, \ndoi={10.1109/ICPC.2016.7503707}, \nmonth={May},}',
        }
    }
    
    return citations[year][name]
}
