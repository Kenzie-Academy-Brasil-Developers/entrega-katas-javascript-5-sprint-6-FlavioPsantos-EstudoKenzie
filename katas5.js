//1
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseString2() {
    let result = reverseString("Brasil");
    let expected = "lisarB";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(testeReverseString1())
console.log(testeReverseString2())


//2
function testReverseSentence1() {
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2() {
    let result = reverseSentence("Howard Ricardo");
    let expected = "Ricardo Howard";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseSentence(str) {
    return str.split(' ').reverse().join(' ');
}
console.log(testReverseSentence1())
console.log(testReverseSentence2())

//3
function testMinimumValue1() {
    let result = minimumValue([5, 4, 3, 2, 1]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2() {
    let result = minimumValue([1, 2, 3, 4, -5]);
    let expected = -5;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function minimumValue(arr) {
    let order = arr.sort((a, b) => a - b)
    return order[0]
}
console.log(testMinimumValue1())
console.log(testMinimumValue2())
    //4
function testMaximumValue1() {
    let result = maximumValue([5, 4, 3, 2, 1]);
    let expected = 5;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2() {
    let result = maximumValue([1, 2, 3, 4, -5]);
    let expected = 4;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function maximumValue(arr) {
    let order = arr.sort((a, b) => b - a)
    return order[0]
}
console.log(testMaximumValue1())
console.log(testMaximumValue2())
    //5
function testCalculateRemainder1() {
    let result = calculateRemainder(3, 2);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(5, 3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function calculateRemainder(a, b) {
    let resto = a % b
    return resto;
}
console.log(testCalculateRemainder1())
console.log(testCalculateRemainder2())
    //6
function testDistinctValues1() {
    let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = "1, 3, 5, 7";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
    let result = distinctValues([1, 1, 2, 2, 3, 3, 4, 4]);
    let expected = "1, 2, 3, 4";
    console.assert(result === expected, `esperado: ${expected} , obtido: ${result}`)
}

function distinctValues(arr) {
    const distinct = [...new Set(arr)];
    return distinct.sort((a, b) => a - b).join(', ')

}
console.log(testDistinctValues1())
console.log(testDistinctValues2())

function testCountValues1() {
    let result = countValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = '1(3) 3(3) 5(2) 7(1)';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCountValues2() {
    let result = countValues([1, 1, 2, 2, 3, 3, 4, 4]);
    let expected = '1(2) 2(2) 3(2) 4(2)';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// function countValues(arr) {
//     let cont = 0;
//     let str = ''
//     const distinct = [...new Set(arr)];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; distinct.length; j++) {
//             if (distinct[j] === arr[i]) {
//                 cont++;
//                 str += `arr[i]` + `${cont}`
//             }
//         }
//     }
// }
// console.log(testCountValues1())
//     //8
// function testEvaluateExpression1() {
//     let result = distinctValues("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 });
//     let expected = -3;
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }

// function testEvaluateExpression2() {
//     let result = distinctValues("a + b + c - d", { a: 1, b: 2, c: 3, d: 4 });
//     let expected = 2;
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }

// function evaluateExpression(str, obj) {
//     let letter = str.match(/[a-z]/gi);
//     letter.forEach(element => {
//         console.log(obj.element)
//     });
//     console.log(letter)
// }