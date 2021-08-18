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
//5
function testCalculateRemainder1() {
    let result = calculateRemainder(3 / 2);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(5 / 3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function calculateRemainder(a, b) {
    return a % b
}
//6
function testDistinctValues1() {
    let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = [1, 3, 5, 7];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
    let result = distinctValues([1, 1, 2, 2, 3, 3, 4, 4]);
    let expected = [1, 2, 3, 4];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function distinctValues(arr) {

}
//7
function testDistinctValues1() {
    let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = [1, 3, 5, 7];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
    let result = distinctValues([1, 1, 2, 2, 3, 3, 4, 4]);
    let expected = [1, 2, 3, 4];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function distinctValues(arr) {

}
//8
function testDistinctValues1() {
    let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = [1, 3, 5, 7];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
    let result = distinctValues([1, 1, 2, 2, 3, 3, 4, 4]);
    let expected = [1, 2, 3, 4];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function distinctValues(arr) {

}