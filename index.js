/* Exercícios de interpretação de código

1.
a) O resultado da multiprição 
b) Fica em branco, não aparece nada

2.
a) Ela identifica se a sua frase tem a palavra "cenoura", se não tiver, vai aparecer "false" 
b)i.true; ii.true; iii. true. Todas tem cenoura.

Exercícios de escrita de código 

1.

function lista (){
   console.log(`Eu sou o(a) ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

const nome =  prompt("Digite o seu nome:")
const idade = Number(prompt("Digite a sua idade:"))
const cidade = prompt("Digite o nome da sua cidade:")
const profissao = prompt("Digite a sua profissão:")

2.

function somar(numero1,numero2){
    return numero1 + numero2 
}

function verificar(numero1,numero2){
    return numero1 >= numero2
}
console.log(somar[80,20])
console.log(verificar[80,20])

function calculadora(n1,n2){
    const soma = n1 + n2 
    const dif =  n1 - n2
    const multi = n1 * n2
    const divisao = n1 / n2
    return [soma,dif,multi,divisao]
}

const numero1 = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite outro numero"))
console.log(calculadora(numero1,numero2))*/

