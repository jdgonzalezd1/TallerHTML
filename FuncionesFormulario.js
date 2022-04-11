let imprimirFormulario = function (event) {
    event.preventDefault();
    datos();
}
let form = document.getElementById("formT");
form.addEventListener("submit", imprimirFormulario, true);

function datos() {
    document.getElementById("formT").style.display = 'none';
    document.getElementById("imprimirSect").style.display = 'block';
    anadirNodo(document.getElementById("tipoDoc").value);
    anadirNodo(document.getElementById("numDoc").value);
    anadirNodo(document.getElementById("nombre").value);
    anadirNodo(document.getElementById("apellido").value);
    anadirNodo(document.getElementById("correo").value);
    anadirNodo(obtenerGenero(document.getElementsByClassName("genero")));
    anadirNodo(document.getElementById("profesion").value);
    anadirNodo(document.getElementById("perfil").value);
    anadirNodo(obtenerHobbies(document.getElementsByClassName("checkboxH")));
    anadirNodo(document.getElementById("experiencia").value);
    return true;
}

function limpiar(genero, hobbies, expL) {
    document.getElementById("tipoDoc").value = "none";
    document.getElementById("numDoc").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("profesion").value = "";
    document.getElementById("perfil").value = "";
    document.getElementById("experiencia").value = "";
    document.getElementById("experiencia").style.display = 'none';
    limpiarChecks(document.getElementsByClassName("genero"));
    limpiarChecks(document.getElementsByClassName("checkboxH"));
    limpiarChecks(document.getElementsByClassName("checkboxE"));
}

function limpiarChecks(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].checked = false;
    }
}

function anadirNodo(x) {
    let newP = document.createElement("p");
    let newText = document.createTextNode(x);
    newP.appendChild(newText);
    document.getElementById("imprimirSect").appendChild(newP);
}

function habilitarTextArea() {
    let labor = document.getElementById("experiencia");
    if (labor.style.display == '' || labor.style.display == 'none') {
        labor.style.display = 'block';
        labor.required = true;
    } else {
        labor.style.display = 'none';
        labor.required = false;
    }
}

function obtenerGenero(gen) {
    let valor = "";
    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked == true) {
            valor += gen[i].name;
        }
    }
    return valor;
}

function obtenerHobbies(hob) {
    let valor = "";
    for (let i = 0; i < hob.length; i++) {
        if (hob[i].checked == true) {
            valor += hob[i].name + " ";
        }
    }
    return valor;
}