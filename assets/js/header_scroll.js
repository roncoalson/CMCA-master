
(function($) {
    $(document).ready(function () {
      var headerNav = $('#header');
        
      $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
            headerNav.removeClass('alt');
        } else {
            headerNav.addClass('alt');
        }
      });  
    });  
})(jQuery);
