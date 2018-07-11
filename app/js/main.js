// Security page
//========================================
$(function() {
  $.get('./markdown-content.md', function(data) {
    $('.right').append(marked(data));
    $(document.getElementsByTagName('h2')).each(function() {
      $('.table-of-contents ul').append("<li><a class='link' href='#"+$(this)[0].id+"'>"+$(this)[0].innerText+"</a></li>");
    });
    createPage();
  })

  function createPage () {
    // Variables declarations
    //========================================
    var lastId,
        topMenu         = $('.table-of-contents ul'),
        menuFixedTop    = 100,
        topMenuHeight   = 423;

    // Map links in nav
    //========================================
    var menuItems = topMenu.find("a");
    var scrollItems = menuItems.map(function() {
      var item = $( $(this).attr("href") );
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
        // e.preventDefault();
    });

    // Bind to scroll
    //========================================
    $(window).scroll(function() {
      var toTop = $('body').scrollTop();

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
  }
});
