let experienciaLaboral = function (event){
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
check.addEventListener("change",experienciaLaboral);

let imprimirFormulario = function (event) {
    event.preventDefault();
    if (!validarHobbie(document.getElementsByName("Hobbie"))){
        alert("Seleccione al menos un hobbie");
    }else{
        imprimirDatos();
    }
    
}

let form = document.getElementById("formT");
form.addEventListener("submit", imprimirFormulario, true);

function imprimirDatos() {
    document.getElementById("formT").style.display = 'none';
    document.getElementById("imprimirSect").style.display = 'block';
    anadirNodo(document.getElementById("tipoDoc").value);
    anadirNodo(document.getElementById("numDoc").value);
    anadirNodo(document.getElementById("nombre").value);
    anadirNodo(document.getElementById("apellido").value);
    anadirNodo(document.getElementById("correo").value);
    anadirNodo(obtenerGenero(document.getElementsByName("genero")));
    anadirNodo(document.getElementById("profesion").value);
    anadirNodo(document.getElementById("perfil").value);
    anadirNodo(obtenerHobbies(document.getElementsByName("checkboxH")));
    anadirNodo(document.getElementById("experiencia").value);
    return true;
}

function anadirNodo(x) {
    let newP = document.createElement("p");
    let newText = document.createTextNode(x);
    newP.appendChild(newText);
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
