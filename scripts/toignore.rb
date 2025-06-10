def ignore_for_file_warning(title, venue)
    return true if venue.include?("BIOSTEC") || venue.include?("MEDINFO") || venue.include?("MeMeA")
    return true if title.include?("Postural control assessment")

    return false
end
