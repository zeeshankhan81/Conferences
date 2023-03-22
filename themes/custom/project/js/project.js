(function (jQuery, Drupal) {
    Drupal.behaviors.myConferences = {
      attach: function attach(context, settings) {
        var container = jQuery('.view-conferences .view-content .view-grouping');
        var heading = container.find('.view-grouping-header');
        container.find('.view-grouping-header:contains("Featured")').parent().addClass('featured');
        container.first().find('.slick--view').addClass('active');
        container.first().find('.view-grouping-header').addClass('active');
        container.find('.slick--view').addClass('tab-toggle');
        container.find('.slick__slide .views-field-nothing .like:empty').removeClass('like');
        container.find('.slick__slide .views-field-nothing .download:empty').removeClass('download');
        container.find('.slick__slide .views-field-nothing .share:empty').removeClass('share');
          
         // container.find('.tab-toggle').hide();
          //container.first().find('.tab-toggle').show();
  
        heading.on('click keypress', function (e) {
          e.preventDefault();
          jQuery('.slick--view').removeClass('active').addClass('tab-toggle');
          heading.removeClass('active');
          jQuery(this).addClass('active');
          jQuery(this).next('.slick--view').removeClass('tab-toggle').addClass('active');
          console.log('clicked!');
        });
      }
    };
  })(jQuery, Drupal);