let experienciaLaboral = function (event) {
    let labor = document.getElementById("experiencia");
    if (this.checked) {
        labor.style.display = 'block';
        labor.required = true;
    } else {
        labor.style.display = 'none';
        labor.required = false;
    }
}
let check = document.getElementById("exp1");
check.addEventListener("change", experienciaLaboral);

let imprimirFormulario = function (event) {
    event.preventDefault();
    if (!validarHobbie(document.getElementsByName("Hobbie"))) {
        alert("Seleccione al menos un hobbie");
    } else {
        imprimirDatos();
    }

}

let form = document.getElementById("formT");
form.addEventListener("submit", imprimirFormulario, true);

function imprimirDatos() {
    document.getElementById("formT").style.display = 'none';
    document.getElementById("imprimirSect").style.display = 'block';
    anadirNodo(document.getElementById("tipoDoc"));
    anadirNodo(document.getElementById("numDoc"));
    anadirNodo(document.getElementById("nombre"));
    anadirNodo(document.getElementById("apellido"));
    anadirNodo(document.getElementById("correo"));
    anadirNodoCheck(obtenerValores(document.getElementsByName("Genero")),"Genero");
    anadirNodo(document.getElementById("profesion"));
    anadirNodo(document.getElementById("perfil"));
    anadirNodoCheck(obtenerValores(document.getElementsByName("Hobbie")),"Hobbies");
    anadirNodo(document.getElementById("experiencia"));
    return true;
}

function anadirNodo(x) {
    if (!x.value == "") {
        let newH = document.createElement("h6");
        let newP = document.createElement("p");
        let newHead = document.createTextNode(x.name);
        let newText = document.createTextNode(x.value);
        newH.appendChild(newHead);
        newP.appendChild(newText);
        document.getElementById("imprimirSect").appendChild(newH);
        document.getElementById("imprimirSect").appendChild(newP);
    }
}

function anadirNodoCheck(x,tag){
    let newH = document.createElement("h6");
    let newP = document.createElement("p");
    let newHead = document.createTextNode(tag);
    let newText = document.createTextNode(x);
    newH.appendChild(newHead);
    newP.appendChild(newText);
    document.getElementById("imprimirSect").appendChild(newH);
    document.getElementById("imprimirSect").appendChild(newP);
}

function validarHobbie(hobbies) {
    let x = 0;
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked == true) {
            x += 1;
        }
    }
    return x > 0;
}

function obtenerValores(arr) {
    let valor = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked == true) {
            valor += arr[i].id + " ";
        }
    }
    return valor;
}

