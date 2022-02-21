"use strict";

const log = function(a, b, ...c){
    console.log(a,b,c);
};
// log(1,2,3,4,5,6);

function calcOrDouble (number, basis = 2){
    console.log(number * basis);
}
calcOrDouble(5);
