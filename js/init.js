(function($){
    $(function(){
      
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.carousel').carousel();
  
    }); // end of document ready
    
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });

    $('.slider').slider();
    $('.tabs').tabs();
    

  })(jQuery); // end of jQuery name space
  $(document).ready(function(){
    $('select').formSelect();
  });
  
  