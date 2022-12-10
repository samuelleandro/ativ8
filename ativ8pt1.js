let antigo_valor = parseInt(prompt("Digite aqui seu saldo atual"))
let valor_a_ser_pago = parseInt(prompt("Digite aqui o valor a ser pago"))
let valor_recente = antigo_valor - valor_a_ser_pago;

if(valor_recente < 0) {
    alert ('Saldo insufisciente')
} else if (valor_recente >= 0)
alert (`Seu saldo atual é de ${valor_recente}`)