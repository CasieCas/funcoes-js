// Olá mundo
// function olaMundo() {
//     console.log('Olá mundo');
// }
// olaMundo();

// Olá nome
// function olaNome(nome) {
//     console.log(`Olá, ${nome}`)
// }
// olaNome('Salomão');

// Dobro de um número
// function calcularDobro(numero) {
//     return numero * 2;
// }
// let resultado = calcularDobro(10);
// console.log(resultado);

// Média
// function mediaNumeros(x, y, z) {
//     return (x + y + z) / 3;
// }
// let media = mediaNumeros(8, 5, 4);
// console.log(media);

// Encontrar maior número
// function encontrarMaior(a, b) {
//     return a > b ? a : b;
// }
// let maiorNumero = encontrarMaior(15, 10);
// console.log(maiorNumero);

// Quadrado
// function quadrado(numero) {;
//     return numero * numero
// }
// let resultado = quadrado(3);
// console.log(resultado);

// IMC
// function imc(altura, peso) {
//     return peso / (altura * altura);
// }
// let resultado = imc(1.88, 80);
// console.log(resultado);

// fatorial
// function calcularFatorial() {
//     if (numero === 0 || numero === 1) {
//         return 1;
// }

//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//         fatorial *= i;
//     }

//     return fatorial;
// }
//  let numero = 4;
//  let resultado = calcularFatorial(numero);
//  console.log(`O fatorial de ${numero} é ${resultado}`);

// Dólar e Real
// function conversaoDolarParaReal(valorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = cotacaoDolar * valorEmDolar
//     return valorEmReais.toFixed(2);
// }
// let valorEmDolar = 25;
// let valorEmReais = conversaoDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} dólares equivalem a R$${valorEmReais}`);

// Área e perímetro retangular
// function calcularAreaPerimetroRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);

//  console.log(`A área da sala é igual a ${area} metros quadrados`);
//  console.log(`O perímetro da sala é igual a ${perimetro} metros`);
// }
//  let altura = 4;
//  let largura = 8;
//  calcularAreaPerimetroRetangular(altura, largura);

// Área e perímetro circular
// function calcularAreaPerimetroCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio

//      console.log(`A área da sala circular é ${area.toFixed(2)} metros quadrados`);
//      console.log(`O perímetro da sala circular é ${perimetro.toFixed(2)} metros quadrados`);
// }
//     let raio = 5;
//     calcularAreaPerimetroCircular(raio);

// Tabuada
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
 let numero = 9;
 mostrarTabuada(numero);