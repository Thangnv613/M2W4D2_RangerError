function calculator(number1: number, number2: number, operator: any):  boolean {
    let result: any;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        throw new Error('The operator must be an +,-,*,/');

    }
    return result;
}
// try {
//     // throw new Error('The operator must be an +,-,*,/');

// }

// catch (e) {
//     console.log(e.message)
// }
console.log(calculator(3, 9, '7'));
