const a = 5, b = -2;

if (a>0 && b>0) {
    c = a - b
    console.log("Числа положительные, их разность = " + c)
}
else if (a<0 && b<0){
    c = a * b
    console.log("Числа отрицательные, их произведение = " + c)
}
else if (a<0 || a>0 && b<0 || b<0) {
    c = a + b
    console.log("Одно из чисел отрицательное, их сумма = " + c) 
}
 
