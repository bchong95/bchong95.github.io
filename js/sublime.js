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
})();

// Creates an html list representing the sections
// (function () {
//   var buildTree = function(root) {
//     if($(root).find("h2, h3").length == 0) {
//       // If there are no headers then don't do anything
//       return undefined
//     }
//     var sections = $(root).children("section")
// 		var li = $('<li>')
//     // Set the title text based on the header
//     var header = $($(root).children()[0])
//     // Chop of the extra "() {" stuff
//     var headerTitle = header.text().substring(0,header.text().length-5)
//     var headerAnchor = header.attr("id")
//     console.log(headerAnchor)
//     li.append(
//       $("<a>")
//         .attr("href", "#"+headerAnchor)
//         .text(headerTitle)
//     )
//     // Recursivly build sublists
//     var sublist = $('<ul>')
//     var somethingAdded = false
//     for (var i = 0; i < sections.length; i++) {
//       var section = sections[i]
//       var sectionTree = buildTree(section)
//       if (sectionTree != undefined) {
//         sublist.append(sectionTree)
//         somethingAdded = true
//       }
//     }
//     if(somethingAdded){
//       li.append(sublist)
//     }
// 		return li
// 	}
//
//   var htmlTree = $("<ul style='padding-left: 1%;' id='treemenu1' class='treeview'>")
//   var sections = $("main").children("section")
//   for (var i = 0; i < sections.length; i++) {
//     var subtree = buildTree(sections[i])
//     htmlTree.append(subtree)
//   }
//   var container = $("<div style='position:fixed'><h1>Brandon Chong</h1></div>")
//   container.append(htmlTree)
//   $("#treeMenu").append(container)
//   ddtreemenu.createTree("treemenu1", false)
//   ddtreemenu.flatten('treemenu1', 'expand')
//   // Hack to make foundation grid responsive
//   $("#treeMenu").width(htmlTree.width() * 1.2)
// })();

// Sets up the tree nav
(function () {
  ddtreemenu.createTree("collections", false)
  ddtreemenu.flatten('collections', 'expand')
  $("#collections").css("padding-left", "5%")
  $("#treeMenu").width($("#collections").width() * 1.2)
})();

// Sets up the mini map
(function () {
  $('main').minimap()
})();
