<?php
	include 'conexion.php';//incrusta el codigo de conexion.php, include es mejor para hacer consultas rapido y require para que carge mas rapido la pagina
	function validaEntrada(){
		$conexion=conectaBD();
		$respuesta= false;
		$usuario = $_POST["usuario"];
		$clave = md5($_POST["clave"]);
		$consulta="select ncontrol,nombre,clave from alumnos where ncontrol='".$usuario."' and clave='".$clave."' limit 1";
		//RecordSet = conjunto de registros
		$resConsulta=mysqli_query($conexion,$consulta);
		//Cuantos registros trae el RecordSet
		$nombre="";
		if(mysqli_num_rows($resConsulta)>0){
			$respuesta=true;
			//va un if porque solo esperamos un registro, sino fuera un while
			if($registro=mysqli_fetch_array($resConsulta)){
				$nombre = $registro["nombre"];
			}
		}
		$salida = array('respuesta' => $respuesta,
						'nombre' => $nombre );
		print json_encode($salida);
	}
	$opc=$_POST["opc"];
	switch ($opc) {
		case 'valida':
			validaEntrada();
			break;
		
		default:
			# code...
			break;
	}
?>