
function iniciar() {
	let tiempoRestante = document.getElementById('cuentaAtras').value
	if(tiempoRestante === '' ||tiempoRestante < 1 || tiempoRestante > 999 ){
		let alert = document.getElementById('alert');
			alert.style.visibility = "visible";
			document.getElementById('texto-alert').innerHTML = 'Ingrese número entre 0 y 999'
	} else{
		let counter = document.getElementById('counter')
			counter.innerHTML = tiempoRestante;
			document.getElementById('cuentaAtras').value = ''
			document.getElementById('btn').disabled = true
			
			let intervalo = setInterval(function(){
	       	tiempoRestante--;
	       	document.getElementById("counter").textContent = tiempoRestante;
			
			let resetear = document.getElementById('reset')
			resetear.onclick = reset;

			function reset() {
				clearInterval(intervalo);
				document.getElementById("counter").textContent = 0
				document.getElementById('btn').disabled = false	
			}
	       	if(tiempoRestante === 0){
	       		document.getElementById('btn').disabled = false
	       		let alert = document.getElementById('alert');
				alert.style.visibility = "visible";
				document.getElementById('texto-alert').innerHTML = 'FINISHED'
				document.getElementById("alarma").play(); 	

	       	}
	       	console.log(tiempoRestante)
	       	if(tiempoRestante <= 0)
	           clearInterval(intervalo);
	       	},1000);
			}
}

function cerrar() {
	document.getElementById('alert').style.visibility = "hidden";
	document.getElementById("alarma").pause(); 	
}

window.onkeyup = capturaESC;
function capturaESC(){
    var e = window.event;
    var tecla = (document.all) ? e.keyCode : e.which;
    if(tecla == 27){
        document.getElementById("alert").style.visibility = "hidden";
    }
}

let input = document.getElementById('cuentaAtras')
input.onkeyup = entrar;
function entrar() {
	var e = window.event;
    var tecla = (document.all) ? e.keyCode : e.which;
    if(tecla === 13){
        document.getElementById("btn").click();
    }
}