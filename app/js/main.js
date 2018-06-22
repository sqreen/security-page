// Security page
//========================================

$(function() {
  // Variables declarations
  //========================================
  var lastId,
      block           = $('.sc-block'),
      menu            = $('.table-of-contents'),
      topMenu         = $('.table-of-contents ul'),
      menuFixedTop    = parseInt(menu.css('top')),
      menuOffsetToTop = menu.offset().top,
      topMenuHeight   = menu.outerHeight();

  // Capitalize string
  //========================================
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  // Create table of contents
  //========================================
  block.each(function() {
    var id = $(this)[0].id;
    var name = id.replace(/_/g, " ").capitalize();
    topMenu.append("<li><a href='#"+id+"'>"+name+"</a></li>");
  });

  // Map links in nav
  //========================================
  var menuItems   = topMenu.find("a"),
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

  // Detect scroll onload and fixe nav
  //========================================
  if ($('body').scrollTop() >= menuOffsetToTop - menuFixedTop) {
    menu.addClass('fixed');
  } else {
    menu.removeClass('fixed');
  }

  // Bind to scroll
  //========================================
  $(window).scroll(function() {

    // Fixed nav
    //============================
    var toTop = $('body').scrollTop();

    if (toTop >= menuOffsetToTop - menuFixedTop) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }

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
