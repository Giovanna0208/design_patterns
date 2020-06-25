//recebe uma função como parâmetro e estende seu
//comportamento sem modificá-la explicitamente

let loggedin = true;

function callifalthenticated(fn) {
    if (loggedin) {
        return fn();
    }
}

function sum(a, b) {
    return a + b;
}

console.log(callifalthenticated(() => sum(2, 3)));
