let estudiantes = []
let formulario
let nombreEstudiante
let inputNota1
let inputNota2
let inputNota3
let promedio
let tabla

class Estudiantes {
    constructor(nombre, nota1, nota2, nota3, promedio, resultado){
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.promedio = promedio
        this.resultado = resultado
    }
}
function inicializarElementos(){
    formulario = document.getElementById("formulario")   
    nombreEstudiante = document.getElementById("nombreEstudiante")
    inputNota1= document.getElementById("inputNota1")
    inputNota2 = document.getElementById("inputNota2")
    inputNota3 = document.getElementById("inputNota3")
    tabla = document.getElementById("tablaProductos")
}
function inicializarEventos(){
    formulario.onsubmit = (event) => validarFormulario(event)
}
function validarFormulario(event){
    event.preventDefault() 
    let nombre = nombreEstudiante.value
    let nota1
    let nota2
    let nota3 
    let promedio
    let resultado
    let estudiante
    
    nombre ==="" ?  alert("Error al cargar el nombre") : nota1 = parseInt(inputNota1.value)
    nota1 < 0 || nota1 > 10 ? alert("Error en la carga de la primera nota") : nota2 = parseInt(inputNota2.value)
    nota2 < 0 || nota2 > 10 ? alert("Error en la carga de la segunda nota") : nota3 = parseInt(inputNota3.value)
    nota3 < 0 || nota3 > 10 ? alert("Error en la carga de la tercera nota") : promedio = (nota1 + nota2 + nota3)/3 
    resultado = promedio >=6 ? "APROBÓ" :"NO APROBÓ"
    

    if(nombre ==="" || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10  || nota3 < 0 || nota3 > 10){
        alert("Corrija el dato mal cargado")
    }    
    else{
        estudiante = new Estudiantes (nombre, nota1, nota2, nota3, promedio, resultado) 
        estudiantes.push(estudiante)        
        formulario.reset() 
        limpiarTabla()
        agregarEstudiantesTabla()
        almacenarEstudiantesLocalStorage()
    }   
 }
 

function agregarEstudiantesTabla(){
    estudiantes.forEach((estudiante) => {let filaTabla = document.createElement("tr")
    filaTabla.innerHTML = `
    <td>${estudiante.nombre}</td>
    <td>${estudiante.nota1}</td>
    <td>${estudiante.nota2}</td>
    <td>${estudiante.nota3}</td>
    <td>${estudiante.promedio}</td>
    <td>${estudiante.resultado}</td>
    ` 
    tabla.tBodies[0].append(filaTabla)
})
}
function limpiarTabla(){
    while(tabla.rows.length >1){
        tabla.deleteRow(1)
    }
}
function almacenarEstudiantesLocalStorage(){
localStorage.setItem("listaEstudiantes", JSON.stringify(estudiantes))
}
function obtenerProductosLocalStorage(){
    let estudiantesRegistrados = localStorage.getItem("listaEstudiantes")
    estudiantesRegistrados !== null ? estudiantes = JSON.parse(estudiantesRegistrados) : console.log("No hay información registrada")
   
} 
function main (){    
    inicializarElementos()
    inicializarEventos()
    obtenerProductosLocalStorage()
    agregarEstudiantesTabla()
}
main()















