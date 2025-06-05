// Se declara la variable pantalla mediante el ID del index.html.
const pantalla = document.getElementById("pantalla");
// Creamos la variable encargada de identificar si la última accion fue un cálculo.
let ultimaAccionCalculada = false;

// Definimos una función la cual va a recibir todos los valores ingresados.
function ingresarValor(val) {
    // Definimos una sentencia if para establecer si el último valor fue un cálculo y el valor ingresado no es un operador, entonces que limpie la pantalla.
    if (ultimaAccionCalculada && !operadorCalculadora(val) && pantalla.value !== "") {
        limpiarPantalla();
    }
    pantalla.value += val; // Validamos cualquier valor ingresado en la pantalla.
    ultimaAccionCalculada = false; // Se haga un reinicio de la acción luego de ingresar un valor nuevo.
}