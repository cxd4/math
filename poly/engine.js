/******************************************************************************\
* Project:  Standard Polynomial Roots Solver                                   *
* Release:  2012.09.30                                                         *
* Creator:  R. J. Swedlow                                                      *
* License:  public domain                                                      *
\******************************************************************************/

function solve_degree_0(a) { //constant
    "use strict";
    return (undefined);
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
    return ("not yet implemented:  cubic polynomial functions");
}
function solve_degree_4(a, b, c, d, e) { //quartic
    "use strict";
    return ("not yet implemented:  quartic polynomial functions");
}
function solve_degree_5(a, b, c, d, e, f) { //quentic
    "use strict";
    return ("not yet implemented:  quentic polynomial functions");
}
function derive_polynomial_roots() {
    "use strict";
    var a = document.getElementById("a").value,
        b = document.getElementById("b").value,
        c = document.getElementById("c").value,
        d = document.getElementById("d").value,
        e = document.getElementById("e").value,
        f = document.getElementById("f").value;
    if (a !== 0) {
        document.getElementById("x").value = solve_degree_5(a, b, c, d, e, f);
    } else if (b !== 0) {
        document.getElementById("x").value = solve_degree_4(a, b, c, d, e);
    } else if (c !== 0) {
        document.getElementById("x").value = solve_degree_3(a, b, c, d);
    } else if (d !== 0) {
        document.getElementById("x").value = solve_degree_2(a, b, c);
    } else if (e !== 0) {
        document.getElementById("x").value = solve_degree_1(a, b);
    } else {
        document.getElementById("x").value = solve_degree_0(a);
    }
}
