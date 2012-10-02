/******************************************************************************\
* Project:  Standard Polynomial Roots Solver                                   *
* Release:  2012.10.01                                                         *
* Creator:  R. J. Swedlow                                                      *
* License:  public domain                                                      *
\******************************************************************************/

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
    a = null;
    b = null;
    c = null;
    d = null;
    return (null); /* not yet implemented */
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
