$('#learn-more').on('click',function() {
  const images = $('#home-video').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});
