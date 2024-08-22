// 1. Faça um Programa que mostre a mensagem "Olá mundo" na tela
alert('Olá mundo')

// 2. Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let num = prompt('Digite um número')
alert('O número informado foi ' + num)

// 3. Faça um Programa que peça dois números e imprima a soma.
let number1 = prompt('Digite um número')
let number2 = prompt('Digite outro número')
let soma1 = parseInt(number1) + parseInt(number2)
alert('O resultado da soma é ' + soma1)

//4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let nota1 = prompt('Digite a nota do primeiro bimestre')
let nota2 = prompt('Digite a nota do segundo bimestre')
let nota3 = prompt('Digite a nota do terceiro bimestre')
let nota4 = prompt('Digite a nota do quarto bimestre')
let media = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4)/4)
alert('O Resultado da média é: ' + media)

//5. Faça um Programa que converta metros para centímetros.
let metros = prompt('Digite o valor em metros')
let centímetros = metros*100
alert('O valor em centímetros é ' + centímetros)

//6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
let raio = prompt('Digite o valor do raio')
let area = 3.14*raio*raio  
alert('O valor da área é ' + area)

//7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let lado = prompt('Digite o valor do lado do quadrado')
let área = lado*lado 
alert('O valor da área é ' + área)
let dobro = área*2
alert('O valor do dobro da área é '+ dobro)

//8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let ganho = prompt('Digite o valor ganho por hora')
let horas = prompt('Digite o número de horas trabalhadas no mês')
let salário = ganho*horas
alert('O valor do salário é ' + salário)

//9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
let Fahrenheit1 = prompt('Digite o valor em Fahrenheit')
let Celsius1 = 5*((Fahrenheit1-32)/9)
alert('O valor em Celsius é ' + Celsius1)

//10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
let Celsius = prompt('Digite o valor em Celsius')
let Fahrenheit = Celsius*1.8+32
alert('O valor em Celsius é ' + Fahrenheit)

//11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//o produto do dobro do primeiro com metade //do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.
let num1 = prompt('Digite um número inteiro')
let num2 = prompt('Digite outro número inteiro')
let num3 = prompt('Agora, Digite um número real')
let produto = (2*num1)*(num2/2)
let soma2 = (3*num1)+num3 
let cubo = num3*num3*num3 
alert('O produto do dobro do primeiro com metade do segundo é ' + produto)
alert('A soma do triplo do primeiro com o terceiro é ' + soma2)
alert('O terceiro elevado ao cubo é ' + cubo)

//12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = prompt('Digite a sua altura')
let peso1 = (72.7*altura) - 58
alert('O seu peso ideal é '+ peso1)

//13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7
let altura2 = parseFloat(prompt('Digite a altura da pessoa'));
let sexo = prompt('Digite o sexo da pessoa')

const formulas = {
    masculino: (altura) => (72.7 * altura) - 58,
    feminino: (altura) => (62.1 * altura) - 44.7
};

let pesoIdealA = formulas[sexo] ? formulas[sexo](altura2) : 'Sexo não reconhecido';

alert('O peso ideal da pessoa é ' + pesoIdealA);


//14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
let peso = prompt('Digite o peso do peixe')
let excesso = peso - 50 
let multa = excesso*4
alert('O excesso é: ' + excesso)
alert('A multa é: '+ multa)

//15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//salário bruto.
//quanto pagou ao INSS.
//quando pagou para o sindicato.
//o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
//Salário Bruto : R$
//INSS (8%) : R$
//Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.
let ganhoHora=parseInt(prompt('Digite o valor por hora'))
let horasTrb=parseInt(prompt('Digite as horas que você trabalha por mês'))
let salarioBruto=ganhoHora*horasTrb
let inss=salarioBruto*8/100
let sindicato=salarioBruto*5/100
let salárioLíquido=salarioBruto-inss-sindicato
alert('O salário bruto é:' + salarioBruto)
alert('O valor pago pelo o INSS é: ' + inss)
alert('O valor pago pelo o sindicato é: '+ sindicato)
alert('O salário líquido é: ' + salárioLíquido )
