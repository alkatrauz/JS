var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paulo = document.querySelector("#paciente1");
//var peso = document.querySelector(".info-peso").textContent;
//var altura = document.querySelector(".info-altura").textContent;
//var imc = peso / (altura * altura);
//paulo.querySelector (".info-imc").textContent = imc;

var pacientes =document.querySelectorAll(".paciente");

for(let contador = 0;contador < pacientes.length; contador++){
    var paciente = pacientes[contador]
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = peso/(altura * altura);
    paciente.querySelector(".info-imc").textContent = imc;
}