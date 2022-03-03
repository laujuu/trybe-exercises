const a = 10;
const b = 20;
const c = 30

console.log("soma: " + (a + b))
console.log("subtração: " + (a - b))
console.log("multiplicação: " + (a * b))
console.log("Divisão: " + (a / b))
console.log("Modulo: " + (a % b))

if (a > b) {
    console.log('a é maior que b ')
} else {
    console.log('b é maior que a');
}

if (a > b && a > c) {
    console.log('a é o maior');
} else if (b > a && b > c) {
    console.log('b é o maior');
} else {
    console.log('c é o maior');
}

if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
}