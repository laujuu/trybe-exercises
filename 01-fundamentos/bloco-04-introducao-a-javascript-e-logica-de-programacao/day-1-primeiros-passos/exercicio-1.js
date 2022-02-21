// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

//imprimir todos os valores
console.log(numbers);

//--------------------------

Soma os elementos do array
for (let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}
console.log(soma);


//---------------------------

//media dos elementos

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

let average = soma / numbers.length;

console.log(average);

//--------------------------


//Imprimir se o valor é maior ou menor que 20

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
  }
  
  let average = soma / numbers.length;

  if (average > 20) {
    console.log('Valor Maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

//------------------------------
  


  