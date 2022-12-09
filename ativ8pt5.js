var num1 = parseInt(prompt("Digite o primeiro valor: "))
var num2  = parseInt(prompt("Digite o segundo valor: "))
var somadosimpares = 0
while(num1 >= num2){
    num1 = parseInt(prompt("Digite o primeiro valor de forma que ele seja maior que o segundo: "))
    num2 = parseInt(prompt("Digite o segundo valor: "))
}
for(var i = num1; i<=num2; i++){
    if(i % 2 != 0){
        somadosimpares += i
    }
}
alert (`A soma dos números ímpares no intervalo de ${num1} + a ${num2} é igual a: ${somadosimpares}`)