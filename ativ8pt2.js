var x = parseInt(prompt("Escolha um número"))
var y = parseInt(prompt("Escolha outro número"))
var caracter = parseInt(prompt("Escolha entre essas operações 1- Adição; 2- Subtração; 3- Multiplicação; 4- Divisão "))

if (caracter == 1){
    alert(x + y)
}

if (caracter == 2){
    alert(x - y)
}

if (caracter == 3){
    alert(x * y)
}
if (caracter == 4){
    alert(x / y)
}