// Security page
//========================================

$(function() {
  // Fetch markdown content
  //========================================
  fetch('./markdown-content.md')
  .then(response => response.text())
  .then((data) => {
    $('.sc-right').append(marked(data));
    createNavigation();
  });

  // Variables declarations
  //========================================
  var lastId,
      block           = document.getElementsByTagName('h2'),
      menu            = $('.table-of-contents'),
      topMenu         = $('.table-of-contents ul'),
      menuFixedTop    = parseInt(menu.css('top')),
      topMenuHeight   = menu.outerHeight();

  // Create table of contents
  //========================================
  function createNavigation () {
    console.log(block);
    $(block).each(function() {
      var id = $(this)[0].id;
      var name = $(this)[0].innerText;
      topMenu.append("<li><a href='#"+id+"'>"+name+"</a></li>");
    });
  }

  // Map links in nav
  //========================================
  var menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

  // Bind click handler to menu items
  //========================================
  menuItems.click(function(e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - menuFixedTop;
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 1000);
      e.preventDefault();
  });

  // Bind to scroll
  //========================================
  $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
      if ($(this).offset().top + topMenuHeight - (menuFixedTop + 45) < fromTop)
        return this;
      }
    );

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });
});
