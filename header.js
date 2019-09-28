/**SE CREA LA FUNCION QUE PERMITE HACER PEQUEÑA LA CABECERA DE LA WEB Y FIJARLA DURANTE TODA LA PAGINA */
$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});
});