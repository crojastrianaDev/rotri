(function($){
    $(function(){
      
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.sidenav').open();
      $('.tabs').tabs(); 
      $('.materialboxed').materialbox();
      
    });
       
  })(jQuery); 
  $(document).ready(function(){
    $('select').formSelect();
  });
  // MODAL AL CARGAR
  document.addEventListener('DOMContentLoaded', function () {
    var Modalelem = document.querySelector('.modal');
    var instance = M.Modal.init(Modalelem);
    instance.open();
});
                 

 
 
  
 

  
  
  