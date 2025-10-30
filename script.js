// Configura la fecha del evento
const fechaEvento = new Date("2026-02-07T21:00:00"); // Ejemplo: 25 de diciembre de 2024 a las 7:00 PM

function actualizarCuentaRegresiva() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("cuenta-regresiva").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (diferencia < 0) {
    clearInterval(intervalo);
    document.getElementById("cuenta-regresiva").innerHTML = "¡El evento ha comenzado!";
  }
}

actualizarCuentaRegresiva(); // Llama a la función inmediatamente
const intervalo = setInterval(actualizarCuentaRegresiva, 1000); // Actualiza cada segundo



// ... (reproducción de musica) ...

const musicaFondo = document.getElementById("musica-fondo");
const botonMusica = document.getElementById("boton-musica");
const iconoMusica = document.getElementById("icono-musica");
let reproduciendo = false;

botonMusica.addEventListener("click", () => {
    if (reproduciendo) {
        musicaFondo.pause();
        reproduciendo = false;
        iconoMusica.src = "nota-musical.png"; // Cambia el icono a la nota musical
    } else {
        musicaFondo.play();
        reproduciendo = true;
        iconoMusica.src = "altavoz.png"; // Cambia el icono a un altavoz
    }

});
