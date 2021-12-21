
//console.log(typeof parseInt('10') === typeof 10);
//console.log(typeof parseFloat('9.8') === typeof 10);

//trues
//console.log('10' == 10);
//console.log('10' > 0);
//console.log('10' < 100);

/*
4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4' true
4 === '4' false
*/

//console.log(4 === '4');

//console.log('python'.length != 'jargon'.length);

/*
    4 > 3 && 10 < 12 true
    4 > 3 && 10 > 12 false
    4 > 3 || 10 < 12 true
    4 > 3 || 10 > 12 true
    !(4 > 3) false
    !(4 < 3) true
    !(false) true
    !(4 > 3 && 10 < 12) false
    !(4 > 3 && 10 > 12) true
    !(4 === '4') true
    There is no 'on' in both dragon and python
*/

//console.log(!(4 === '4'));

//date

let date1 = new Date();
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1);

console.log(date1.getDate());
console.log(date1.getHours());
console.log(date1.getTime());