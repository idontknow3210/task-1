"use strict";

function solveEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let result;
    if (d<0) {
        result = ` `;
    } else if (d===0) {
        result = (-b / (2 * a)) ;
    } else {
        result = ((-b + Math.sqrt(d) )/(2*a)) + ", " + ((-b - Math.sqrt(d) )/(2*a));

    }
    return `[${result}]`;
    

}