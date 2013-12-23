function factorial(n) {
    "use strict";
    var result = 1;

    if (n < 0) {
        return undefined; /* unimplemented */
    }
    while (n > 0) {
        result *= n;
        n -= 1;
    }
    return result;
}

function derive_e_by_limit(iteration) {
    "use strict";
    return Math.pow(1 + 1 / iteration, iteration);
}
function derive_e_by_series(limit) {
    "use strict";
    var i, approximation = 0.0;

    for (i = 0; i < limit; i += 1) {
        approximation += 1 / factorial(i);
    }
    return approximation;
}
