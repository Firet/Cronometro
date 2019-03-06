console.log("script.js anda");


function completarDosDigitos(numero) {
    if(numero < 10) { // Agrega un cero adelante de los números de un dígito
        numero = "0" + numero;
    }
    return numero;
}

// function actualizarHora() {

//     var tiempo = new Date();

//     var obtenerHora = completarDosDigitos(tiempo.getHours());
//     var obtenerMinutos = completarDosDigitos(tiempo.getMinutes());
//     var obtenerSegundos = completarDosDigitos(tiempo.getSeconds());

//     var formatoHora = obtenerHora + ":" + obtenerMinutos + ":" + obtenerSegundos;
//     document.getElementById("hora").innerHTML = formatoHora;

//     setTimeout(actualizarHora, 1000);
// }

var idIntervalo;
var comienzo;
var andando = false;

function empezarAContar()  {
    if (!andando) {
    console.log("empezarAContar");
	comienzo = new Date();
    idIntervalo = setInterval(mostrarHora, 1);
    andando = true;
    }
    else {
    // clear interval CAMBIAR
    dejarDeContar();
    comienzo = new Date();
    idIntervalo = setInterval(mostrarHora, 1);
    andando = true;          
    }
}
 
function mostrarHora() {
    console.log("mostrarHora");
	var tiempo = new Date();
	var diff = Math.abs(tiempo - comienzo);
	//console.log("diff: " + diff);
	var momento = new Date(diff);
	var obtenerMinutos = completarDosDigitos(momento.getMinutes());
	var obtenerSegundos = completarDosDigitos(momento.getUTCSeconds());
	var obtenerMilisegundos = completarDosDigitos(momento.getMilliseconds());

	var formatoCronómetro = obtenerMinutos + ":" + obtenerSegundos + ":" + obtenerMilisegundos;
	document.getElementById("cronómetro").innerHTML = formatoCronómetro;
}
 
function dejarDeContar(){
	console.log("dejarDeContar");
    clearInterval(idIntervalo);
    andando = false;
}

function reiniciarCuenta() {
    // No anda bien. reiniciar la cuenta mientras está andando
    if (!andando) {
    console.log("reiniciarCuenta cuando no está andando");
    var tiempo = new Date(0);
	var obtenerMinutos = completarDosDigitos(tiempo.getMinutes());
	var obtenerSegundos = completarDosDigitos(tiempo.getUTCSeconds());
	var obtenerMilisegundos = completarDosDigitos(tiempo.getMilliseconds());

	var formatoCronómetro = obtenerMinutos + ":" + obtenerSegundos + ":" + obtenerMilisegundos;
    document.getElementById("cronómetro").innerHTML = formatoCronómetro;
    }
    else {  
        console.log("reiniciarCuenta cuando está andando");
        var tiempo = new Date(0);
        var obtenerMinutos = completarDosDigitos(tiempo.getMinutes());
        var obtenerSegundos = completarDosDigitos(tiempo.getUTCSeconds());
        var obtenerMilisegundos = completarDosDigitos(tiempo.getMilliseconds());

        var formatoCronómetro = obtenerMinutos + ":" + obtenerSegundos + ":" + obtenerMilisegundos;
        document.getElementById("cronómetro").innerHTML = formatoCronómetro;
        empezarAContar(); 
    }    
}

function modoNoche() {
    // document.getElementById('mydiv').style.color="orangered";
    // document.getElementById('mydiv').style.backgroundColor="white";

    var color = document.getElementById('mydiv').style.color;
    var backgroundColor = document.getElementById('mydiv').style.backgroundColor;

    //console.log("color " + color + " " +  backgroundColor + " "  + "condicion> " + (color == "orangered" && backgroundColor == "white") );

    if ((color == "orangered" && backgroundColor == "white") || color =="" ) {
        console.log("desactivaste el modo noche");
        document.getElementById('mydiv').style.color="white";
        document.getElementById('mydiv').style.backgroundColor="orangered";
        document.getElementById('mydiv').style.fontFamily="Times New Roman";
    } else {
        console.log("activaste el modo noche");
        document.getElementById('mydiv').style.color="orangered";
        document.getElementById('mydiv').style.backgroundColor="white";
        document.getElementById('mydiv').style.fontFamily="Arial";
    }
}


function marcarVuelta() {
    console.log("funciona marcarVuelta. Esto es el elemento vuelta " + document.getElementById("cronómetro").innerHTML);
    document.getElementById("vuelta").innerHTML = document.getElementById("cronómetro").innerHTML;
    document.getElementById("vuelta").style.display == "block";
}

function myFunction() {
    console.log("funciona myFunction");
    var x = document.getElementById("vuelta");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 