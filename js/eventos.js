// jquery = $
var inicia=function(){
	var nuevo= function(){
			// alert("Lista la página");
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //console.log(data);
   // alert(data.results[0].name.first+" "+data.results[0].name.last);
   $("#nombre").html("Nombre: "+data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last);
   $("#lugar").html("Lugar: "+data.results[0].location.street+"<br>Ciudad: "+data.results[0].location.city+"<br>Estado: "+data.results[0].location.state+"<br>Codigo postal: "+data.results[0].location.postcode);
   $("#email").html("Email "+data.results[0].email+"<br>Usuario: "+data.results[0].login.username+"<br>Contraseña: "+data.results[0].login.password);
   $("#foto").attr("src",data.results[0].picture.large);
  }
});
	}

  $("#btnNuevo").on("click",nuevo) 
  // $("#btnNuevo").off("click",nuevo)  
}
//iniciamos JQuery
//cuando la pagina esta lista ejecuta la funcion inicia
$(document).ready(inicia);