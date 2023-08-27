"use strict";
function array(num) {
    let value1 = 0;
    let sum = 0;
    while (value1 < num.length) {
        sum += num[value1];
        value1++;
    }
    return sum;
}
console.log(array([1, 2, 4, 3, 6]));
