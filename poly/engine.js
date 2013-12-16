/******************************************************************************\
* Project:  Standard Polynomial Roots Solver                                   *
* Release:  2013.12.16                                                         *
* Creator:  R. J. Swedlow                                                      *
* License:  none                                                               *
\******************************************************************************/

/*
function sqrt(S)
{
    var Ans = S / 2;

    do {
        Ans = (Ans + S / Ans) / 2;
    } while (Ans * Ans != S);
    return Ans;
}
*/
function sqrt(x) {
    "use strict";
    return Math.sqrt(x);
}
function cbrt(x) {
    "use strict";
    if (x < 0) { /* problem with JavaScript interpreter */
        return -Math.pow(-x, 1 / 3);
    }
    return Math.pow(x, 1 / 3);
}

function solve_degree_0(a) { //constant
    "use strict";
    a = (a === 0) ? null : NaN;
    return (a);
}
function solve_degree_1(a, b) { //linear
    "use strict";
    return (-(b / a));
}
function solve_degree_2(a, b, c) { //quadratic
    "use strict";
    var R = b / (-2 * a),
        z = b * b - 4 * a * c;
    if (z < 0) { /* two complex number solutions */
        z = Math.sqrt(-z) / (2 * a);
        return (R + " + " + z + "i, " + R + " - " + z + "i");
    }
    if (z > 0) {
        z = Math.sqrt(+z); /* two real number solutions */
        return (z / (2 * a) + R + ", " + z / (-2 * a) + R);
    }
    return (R); /* only one solution on the real number line */
}
function solve_degree_3(a, b, c, d) { //cubic
    "use strict";
    var A, B, p, q, r;

    p = b / a;
    q = c / a;
    r = d / a;
    a = (3 * q - p * p) / 3;
    b = (2 * p * p * p - 9 * p * q + 27 * r) / 27;

    d = (b * b / 4) + (a * a * a / 27);
    if (d < 0) {
        return undefined; /* currently unimplemented */
    }
    d = sqrt(d);
    A = cbrt(-b / 2 + d);
    B = cbrt(-b / 2 - d);

    return (
        A + B + ", " +
        -(A + B) / 2 + " + " + sqrt(3) * (A - B) / 2 + "i, " +
        -(A + B) / 2 + " - " + sqrt(3) * (A - B) / 2 + "i"
    );
}
function solve_degree_4(a, b, c, d, e) { //quartic
    "use strict";
    a = null;
    b = null;
    c = null;
    d = null;
    e = null;
    return (null); /* not yet implemented */
}
function solve_degree_5(a, b, c, d, e, f) { //quintic
    "use strict";
    a = null;
    b = null;
    c = null;
    d = null;
    e = null;
    f = null;
    return (null); /* not yet implemented */
}
function derive_polynomial_roots(a5, a4, a3, a2, a1, a0) {
    "use strict";
    if (a5 === 0) {
        if (a4 === 0) {
            if (a3 === 0) {
                if (a2 === 0) {
                    if (a1 === 0) {
                        return (solve_degree_0(a0));
                    }
                    return (solve_degree_1(a1, a0));
                }
                return (solve_degree_2(a2, a1, a0));
            }
            return (solve_degree_3(a3, a2, a1, a0));
        }
        return (solve_degree_4(a4, a3, a2, a1, a0));
    }
    return (solve_degree_5(a5, a4, a3, a2, a1, a0));
}
