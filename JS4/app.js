// A: done ✅
let x = prompt('enter number');
 console.log(x**(1/2));


// A: done ✅
let y = prompt('enter value in celsius');
let result = y*1.8 + 32;
console.log(result);


// A: done ✅
let a = prompt('enter number');
if (a > 0) {
    console.log('positive value')
}
else if (a < 0) {
    console.log('negative value')
}
else {
    console.log('value is 0')
}; 


// A: done ✅
let b = prompt('enter number');
if  (b % 2 == 0) {
    console.log('even number')
}
else {
    console.log('odd number')
};  


// A: done ✅
let c = +prompt ('enter first number');
let d = +prompt ('enter second number');
let e = +prompt ('enter third number');
if  (c > d) {
    if (c > e) {
        console.log(c)
    }
}
if (d > c) {
    if (d > e){
    console.log(e)
    }
}
if (e > c) {
    if (e > d) {
    condole.log(e)
    }
}


// A: done ✅
let f = +prompt('enter value 1')
let g = +prompt('enter value 2')
let operator = prompt('enter operand')
switch (operator) {
    case '+':
        console.log(f + g)
        break;
    case '-':
        console.log(f - g)
        break;
    case '*':
        console.log(f * g)
        break;
    case '/':
        console.log(f / g)
        break;
    default:
        console.log('operator desteklenmir')                
}


// A: done ✅
let position = prompt('enter position please');
if (position === 'user') {
    console.log('xos geldin,istifadeci')
}
else if (position === 'admin') {
        console.log('xos geldin, cenab admin')
    }
else if (position === 'guest') {
        console.log('xos geldin,qonaq')
    }


// A: done ✅
let h = +prompt('enter number');
if (h % 3 === 0 && h % 5 === 0) {
    console.log('fizzbuzz')
}
else if (h % 3 === 0) {
    console.log('fizz')
}
else if (h % 5 === 0) {
    console.log('buzz')
}; 
 

// A: done ✅
let i = +prompt('enter number');
if (i < 100) {
    if (i > 9)
       console.log('eded ikireqemlidir')
}


// A: done ✅
let j = +prompt('enter number');
if (j % 2 == 0) {
    if (j % 5 == 0)
    console.log('bu istediyim ededdir')
}


// A: done ✅
let k = +prompt('birinci eded daxil et');
let l = +prompt('ikinci eded daxil et');
let m = +prompt('ucuncu eded daxil et');
let n = j + k + l;
if (n > 100) {
    console.log('cemleri 100-u kecdi')
}
else if (n < 100) {
    console.log('cemleri 100-den kicikdir')
}
else {
    console.log('yanlis')
}
