//  Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let name in names) {
  console.log("Olá, " + names[name]);
}

//Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let key in car) {
  console.log(key + ": " + car[key]);
}

//  Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
//Bem-vinda, Margarida

console.log("Bem-vinda, " + info["personagem"]);

//  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
/*
  {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
  */

info["recorrente"] = "Sim";

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
/* 
personagem
origem
nota
recorrente
*/

for (let properties in info) {
  console.log(properties);
}

//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
/*
  Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
  */

for (let properties in info) {
  console.log(info[properties]);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
/*
  Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
  */

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let properties in info) {
  if (
    properties === "recorrente" &&
    info[properties] === "Sim" &&
    info2[properties] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[properties] + " e " + info2[properties]);
  }
}

//Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log(
  "O livro favorito de " +
    leitor["nome"] +
    " " +
    leitor["sobrenome"] +
    ' se chama "' +
    leitor["livrosFavoritos"][0]["titulo"] +
    '"'
);

// Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
/*
  {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}
  */

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editor: "Rocco",
});

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(
  leitor["nome"] +
    " tem " +
    leitor["livrosFavoritos"].length +
    " livros favoritos."
);

//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome(word) {
  for (index in word) {
    if (word[index] != word[word.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome("arara")); //true
console.log(verificaPalindrome("desenvolvimento")); //false

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

/*
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
/*
  Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
  */

function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

/*
  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
  */

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(
  maiorPalavra(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
); //Fernanda

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

/*
  rray de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
  */

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

/*
  Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
  */

function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(5)); //15

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

/*
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
*/

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split("").reverse().join("");
  let inversoFimPalavra = fimPalavra.split("").reverse().join("");
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }

  return result;
}

console.log(verificaFimPalavra("trybe", "be")); //true
console.log(verificaFimPalavra("joaofernando", "fernan")); //false
