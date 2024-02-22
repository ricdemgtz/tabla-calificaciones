var ltCalificaciones;


function mostrarLista() {
	ltCalificaciones = document.querySelectorAll(".califs")
    let lista = document.getElementById("listaCalifs");

    for (let nota of ltCalificaciones) {
        let item = document.createElement("li")
        item.innerText = nota.value;
        lista.appendChild(item);
    }
}

function calcularProm() {
    let prom = 0;
    for (let x = 0; x < 5; x++) {
        prom += parseInt(ltCalificaciones[x].value);        
    }
    let resultado = (prom / 5);
    document.getElementById("promedio").textContent = resultado;
}

function notaAlta() {
    let notaAlta = 0;
    let i = 0;
    while (i < 5) {
        if (ltCalificaciones[i].value > notaAlta) {
            notaAlta = ltCalificaciones[i].value;
        } 
        i++;
    }
    document.getElementById("nota").textContent = notaAlta;
}

function reprobado() {
    let reprobado = "No";
    let i = 0;
    do {
        if (ltCalificaciones[i].value <= 5) {
            reprobado = "Si";
            break;
        }
        i++;
    } while (i < 5);
    document.getElementById("reprobado").textContent = reprobado;
}