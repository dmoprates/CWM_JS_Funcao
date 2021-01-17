// function declaration
console.log(soma(3, 4)) // somente nesse contexto oo console pode ser chamado antes da função

function soma(x, y) {
    return x + y
}
// Function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))
// Named function expression (pouco usada)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
