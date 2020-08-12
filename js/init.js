(function($){
    $(function(){
      $('.parallax').parallax();
      $('.sidenav').open();
    }); // end of document ready
    $(function(){
      $('.sidenav').sidenav()
    })
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });
    
    $('.slider').slider();
    $('.tabs').tabs();    

  })(jQuery); // end of jQuery name space
  $(document).ready(function(){
    $('select').formSelect();
  });
 
 
  
 

  
  
  