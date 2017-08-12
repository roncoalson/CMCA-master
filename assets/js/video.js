// Embedding video via JS accomplishes two things:
// 1) Faster initial page loading
// 2) More control over styling prior to inserting Youtube iframe

(function($) {

  var videoDivs = $('#youtube-player')

  if ( videoDivs.length ) {

    videoDivs.each(function() {
      var videoDiv = this
      var videoID = videoDiv.dataset.id
      var thumbnailImage = '<img src="https://i3.ytimg.com/vi/' + videoID + '/hqdefault.jpg">'
      var playButton = '<div class="play"></div>'
      
      $(thumbnailImage + playButton).appendTo(videoDiv) 

      $("#youtube-player").on('click', ".play", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoID + "?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1")
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");

        $(this).parent().html(iframe)
      })
    })
  }
})(jQuery);
