document.addEventListener('DOMContentLoaded', () =>  {
    const display=document.getElementById('display');
    let operacionEnCurso = '';
    let operando1 = '';
    let operando2 = '';
    //función para agrear un número al operando actual
    function agregarNumero(num) {
        if(operacionEnCurso === '') {
            operando1 += num;
        }else{
            operando2 += num;
        }
        actualizarDisplay(num);
    }

    //Función para seleccionar una operación
    function seleccionarOperacion(operacion){
        if(operando1 !=''){
            operacionEnCurso = operacion;
            actualizarDisplay(operacion);
        }
    }

    //Función calcular el resultado 
    function calcularResultado(){
        if (operando1 !== '' && operando2 !== '' && operacionEnCurso !== ''){
            const resultado= eval(operando1 + operacionEnCurso + operando2);
            display.value=resultado;
            operando1 = resultado;
            operando2 = '';
            operacionEnCurso = '';
        }
    }

    //Funcíon limpiar el display y las variables
    function limpiar() {
        operando1 = '';
        operando2 = '';
        operacionEnCurso = '';
        display.value = '';
    }

    //función para actualizar el display
    function actualizarDisplay(valor) {
        display.value += valor;
    }
    //Eventlistener para botones numéricos ya implementados
        //Captura de clics en botones numéricos
    document.querySelectorAll('.numero').forEach(boton => {
        boton.addEventListener('click', ()=>{
            agregarNumero(boton.textContent); // Aquí se llama a la función agregarNumero
    });
    });
    //Event listeners para botones de operación
    document.querySelectorAll('.operacion').forEach(boton =>{
        boton.addEventListener('click', () => {
            seleccionarOperacion(boton.textContent);
        });
    });
    
    //Más lógica para manera operaciones y el resultado
    //Event listener para el botón de igual
    document.querySelector('.total').addEventListener('click', calcularResultado);
    //Event listener para el botón de limpiar
    document.querySelector('.limpiar').addEventListener('click', limpiar);

});