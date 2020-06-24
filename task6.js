function sum(a, b) {
    return a + b
}

function subt(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function deg(a, b) {
    return a / b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2)
        case "-":
            return subt(arg1, arg2)
        case "*":
            return mult(arg1, arg2)
        case "/":
            return deg(arg1, arg2)
    }
}

console.log(mathOperation(20, 2, "/"))
