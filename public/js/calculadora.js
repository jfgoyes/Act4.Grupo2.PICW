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

// Definimos una función la cual va a identificar si el operador ingresado es válido, +,-,*,/,%,.
function operadorCalculadora(val) {
    return ['+','-','*','/','%','.'].includes(val);
}

// Establecemos la funcion para borrar todo el contenido de la pantalla.
function limpiarPantalla() {
    pantalla.value = "";
    ultimaAccionCalculada = false;
}

// Establecemos la funcion que se va a encargar de borrar un caracter ingresado en la calculadora.
function eliminarCaracter() {
    if (!ultimaAccionCalculada) { // Definimos que esto se realice unicamente si no hubo una accion previamente calculada.
        pantalla.value = pantalla.value.slice(0, -1);
    }
}

// Definimos las operaciones de la calculadora.
function calcularOperacion () {
    try {
        // Definimos que si no existe nada en pantalla entonces no se haga nada.
        if (pantalla.value === "") return;
        // Asi mismo, si ya se realizó el cálculo de una operacion, que no se repita el calculo otra vez.
        if (ultimaAccionCalculada && !/[+\-*/%]/.test(pantalla.value)) {
        return;
        }
        // Establecemos una variable para definir las operaciones ingresadas.
        const expresionNumerica = pantalla.value;

        // Verificamos si es una division para cero.
        if (/\b\/\s*0+(\.0*)?\b/.test(expresionNumerica)) {
            alert("No es posible una división para cero.") // Si es una división para cero, que se muestre la alerta.
            return;
        }

        // Validamos la expresión matemática.
        const resultadoCalculo = eval(expresionNumerica); 
        pantalla.value = resultadoCalculo;
        ultimaAccionCalculada = true;
        // Definimos que en caso de error, se muestre un mensaje.
    } catch (error) {
        alert("La expresión usada no es válida.")
    }
}