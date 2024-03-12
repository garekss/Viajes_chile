var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
  
  // Enviar alert al presionar el botón enviar
$("#buttonEnviar").click(function () {
  alert("Mensaje Enviado");
});


// Desaparecer el texto
$('.card').click(function() {
  $(this).closest('.card').find('.card-text').toggle();
});

// Desaparecer el texto quienes somos
$(document).ready(function(){
  $("#miParrafo1").click(function(){
      $(this).toggle(); // Alternar entre mostrar y esconder al hacer clic en el párrafo
  });

  $("#miParrafo2").click(function(){
    $(this).toggle(); // Alternar entre mostrar y esconder al hacer clic en el párrafo
});

$("#miParrafo3").click(function(){
  $(this).toggle(); // Alternar entre mostrar y esconder al hacer clic en el párrafo
});

});

$(document).ready(function(){
  $(document).dblclick(function(){
     
    $("#miParrafo1").toggle(); // Alternar la visibilidad del párrafo con un doble clic
    $("#miParrafo2").toggle(); // Alternar la visibilidad del párrafo con un doble clic
    $("#miParrafo3").toggle(); // Alternar la visibilidad del párrafo con un doble clic
  });
});

$(document).ready(function(){
  // Cuando el mouse entra en el texto
  $('#inicio, #Quienesomos, #Destacados, #Contacto').hover(function(){
      // Anima el cambio de tamaño a 30px
      $(this).animate({ fontSize: '30px' }, 'fast');
  }, function(){
      // Cuando el mouse sale del texto, regresa al tamaño original
      $(this).animate({ fontSize: '24px' }, 'fast');
  });
});



$(window).scroll(function(){

  if ($(this).scrollTop() > 400) {
      $("#menuNav").removeClass("navbar");
     $('#menuNav').addClass("bg-interno");
    } else {
  
     $("#menuNav").removeClass("bg-interno");
     $('#menuNav').addClass("navbar");
    }

 });