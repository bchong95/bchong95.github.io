// Turns basic sections into code blocks

(function () {
  var sectionHTML = function(root, level) {
    var header = "h" + level
    if ($(root).find(header).length == 0) {
      // No headers left so just indent the text
      var body = root.children().slice(1,root.children().length)
      body.wrapAll("<div style ='padding-left:2%'/>")
      return
    }
    var elements = $(root).children()
    var sections = []

    // Iterate through all the children (but the first, since it is a header)

    var last_index = level == 2 ? 0 : 1 // super hack
    for (var i = 1; i < elements.length; i++) {
      var elem = $(elements[i])
      if (elem.is(header)) {
        // If you find an h2 tag then push that section on the array
        sections.push($(elements.slice(last_index,i)))
        // And reset the window
        last_index = i
      }
    }

    sections.push($(elements.slice(last_index,elements.length)))

    // Format the sections
    var formatSection = function (section){
      // Wrap the whole thing in a section tag
      $(section)
        .wrapAll("<section/>")
    }
    sections.map(formatSection)

    var sectionDoms = $(root).find("section")
    for (var i = 0; i < sectionDoms.length; i++){
      var sectionDom = $(sectionDoms[i])
      sectionHTML(sectionDom, level + 1)
      var headerDom = $(sectionDom.children()[0])
      headerDom.text(headerDom.text() + " () {")
      sectionDom.append($("<"+header+">"+"}"+"</"+header+">"))
    }
  }

  sectionHTML($("main"), 2)

})()
