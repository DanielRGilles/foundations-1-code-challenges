// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let myArr = [];
    arr.forEach(element => {
        myArr.push(element.name);

    });
    return myArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let myArr = [];
    arr.forEach(element => { 
        myArr.push(element.type);
        myArr.reverse();
    });
    
    
    return myArr;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let myArr = [];
    arr.forEach(element => {
        element.nombre = element.name;
        delete element.name;
        element.tipo = element.type;
        delete element.type;
        myArr.push(element);

    });
    return myArr;
}

