// " ou ' não faz diferença, mesma coisa
/*alert("Olá, mundo!");
prompt("Digite seu nome");
confirm("Você está certo disso?");*/


// var nome = "Julia"
// var numero = 2
/*
var nome = prompt("Qual é o seu nome")

console.log('Olá ' + nome + ' Seja bem vindo');
//precisa ser crase, aspas não vai funcionar
console.log(`Olá ${nome}, seja bem vindo!`)
console.log(typeof nome)
// console.error("Teste Console");

var nome = prompt("digite seu nome")
var idade = prompt("Qual a sua idade?")
var trabalho = prompt("Qual a sua profissão")

alert (`Olá ${nome}, você tem ${idade} anos e trabalha como ${trabalho}!`)
*/


function somar(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    var resultado = n1 + n2

    console.log(`O resultado da soma é: ${resultado}`)
}
function subtrair(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    var resultado = n1 - n2

    console.log(`O resultado da subtração é: ${resultado}`)
}
function multiplicar(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    var resultado = n1 * n2

    console.log(`O resultado da multiplicação é: ${resultado}`)
}
function dividir(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    var resultado = n1 / n2

    console.log(`O resultado da divisão é: ${resultado}`)
}