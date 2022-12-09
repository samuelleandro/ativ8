var x
var contador = 4
var somatorio = 0
 for(var i =0; i<contador; i++){
    x = Number(prompt("Digite o " + (i+1) + "º valor: "))
    somatorio += x;
}
alert ("O valor final do somatorio é igual a " + somatorio)
alert ("O valor final da média é igual a " + (somatorio/contador))
contador = Number(prompt("Digite a nova quantidade de números que serão digitados"))

somatorio = 0;

for(var i = 0; i<contador; i++){
    x = Number(prompt("Digite o " + (i+1) + "º valor: "))
    somatorio += x;
}

document.write("O valor final do somatório é igual a " + somatorio)
document.write("O valor final da média é igual a " + (somatorio/contador)) 