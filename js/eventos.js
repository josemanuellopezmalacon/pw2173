// jquery = $
var inicia=function(){
	// alert("Lista la página");
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //console.log(data);
    alert(data.results[0].name.first+" "+data.results[0].name.last);
  }
});
    
}
//iniciamos JQuery
//cuando la pagina esta lista ejecuta la funcion inicia
$(document).ready(inicia);