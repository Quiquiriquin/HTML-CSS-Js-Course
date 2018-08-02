function suma (){
	var numero1 = parseFloat(document.getElementById('primero').value),
		numero2 = parseFloat(document.getElementById('segundo').value),
		resultado = numero1 + numero2;

	document.getElementById('resultado').value = resultado;
}