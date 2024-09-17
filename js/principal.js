var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paulo = document.querySelector("#paciente1");
var peso = document.querySelector(".info-peso").textContent;
var altura = document.querySelector(".info-altura").textContent;
var imc = peso / (altura * altura);
paulo.querySelector(".info-imc").textContent = imc;