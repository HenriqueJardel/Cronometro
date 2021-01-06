var temporizador = null;
var totalMilisegundos = 0;

function formataNumero(numero, casas) {
  return ('' + numero).padStart(casas, '0');
}

function updateVisualization() {
  var hora = document.getElementsByClassName('hora')[0];
  var minuto = document.getElementsByClassName('minuto')[0];
  var segundo = document.getElementsByClassName('segundo')[0];
  var milissegundo = document.getElementsByClassName('milissegundo')[0];

  milissegundo.innerHTML = formataNumero(totalMilisegundos % 1000, 3);
  
  segundo.innerHTML = formataNumero((Math.trunc(totalMilisegundos / 1000) % 60), 2);

  minuto.innerHTML = formataNumero((Math.trunc(totalMilisegundos / (60 * 1000)) % 60), 2);

  hora.innerHTML = formataNumero((Math.trunc(totalMilisegundos / (60 * 60 * 1000)) % 60), 2);
}

function start() {
  if (temporizador == null) {
  temporizador = setInterval(function(){
    totalMilisegundos += 10;
    updateVisualization()
  },10);
  }
}

function stop() {
clearInterval(temporizador);
temporizador = null;
}

function reiniciar() {
  if (temporizador == null) {
    totalMilisegundos = 0;
    updateVisualization();
  }
  else {
    totalMilisegundos = 0;
    updateVisualization();
  }
}
