module.exports = function solveEquation(equation) {
    let a, b, c, k = 0;
    let ar = [];
    while(equation.charAt(k) != ' ') {
        k += 1;
    }
    a = parseInt(equation.slice(0, k));

    for(let i = k; i < equation.length; i++) {
        if (equation.charAt(i) == '+' || equation.charAt(i) == '-') {
            k = i + 2;
            while(equation.charAt(k) != ' ' && k != equation.length) {
                k += 1;
            }
            ar.push(equation.charAt(i).concat(equation.slice(i + 2, k)));
        }
    }

    b = parseInt(ar[0]);
    c = parseInt(ar[1]);

    let d = b*b - 4*a*c;
    let res = [];

    res[0] = Math.round((-b - Math.sqrt(d)) / (2 * a));
    res[1] = Math.round((-b + Math.sqrt(d)) / (2 * a));
    if (res[0] > res[1]) {
        [res[0], res[1]] = [res[1], res[0]];
    }
    return res;
};




