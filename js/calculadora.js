//variable global
var operador=""
function numeros(num){
	if(operador==""){//operando 1
		var valorInicial=document.calculadora.operando1.value;
		if(valorInicial=="0"){
			document.calculadora.operando1.value="";
		}
		//concatena los valores con los del operando 1
		document.calculadora.operando1.value=document.calculadora.operando1.value+num;
	}else{ //operando2
		var valorInicial=document.calculadora.operando2.value;
		if(valorInicial=="0"){
			document.calculadora.operando2.value="";
		}
		//concatena los valores con los del operando 2
		document.calculadora.operando2.value=document.calculadora.operando2.value+num;
	} 

}
function operadores(op){
	operador=op

}
