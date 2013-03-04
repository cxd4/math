/******************************************************************************\
* Project:  Triangle Solver                                                    *
* Release:  2013.03.04                                                         *
* Authors:  R. J. Swedlow                                                      *
* License:  public domain                                                      *
\******************************************************************************/

function isGiven(data) {
    "use strict";
    if (data < 0) {
        return false; /* Polygonal measures cannot be negative. */
    }
    switch (data) {
        case 0: /* They also cannot be zero.... */
        case null:
        case undefined:
        case NaN:
            return false;
        default:
            return true;
    }
}
function processCorruptData(data) {
    if (!(data > 0)) {
        return undefined;
    }
    return (data);
}
function sqrt(radix) {
    "use strict";
    var squareRoot = Math.sqrt(radix); // internal JS class method
    return (squareRoot); // Feel free to engineer your own square root loop!
}
function solveArcByTriangleSum(A, B) { /* using the Triangle Sum Theorem */
    "use strict";
    return (180 - A - B);
}
function solveSideByPerimeter(P, a, b) { /* using direct segment addition */
    "use strict";
    return (P - a - b);
}
function solveLegByArea(A, l) { /* area of right triangle with one known leg */
    "use strict";
    return ((2 * A) / l);
}
function solvePerimeterBySide(s) { /* perimeter of an equilateral triangle */
    "use strict";
    return (3 * s); // P = s1 + s2 + s3, where s1 = s2 = s3.
}
function solvePerimeterBySides(a, b, c) { /* perimeter of a scalene triangle */
    "use strict";
    return (a + b + c);
}
function solveAreaBySide(s) { /* using the side length of a regular triangle */
    "use strict";
    return (sqrt(3/16) * s * s);
}
function solveAreaByLegs(a, b) { /* using the legs of a right triangle */
    "use strict";
    return ((a * b) / 2); // Think of leg b as the base & leg a as the altitude.
}
function solveAreaBySides(a, b, c) { /* using Archimedes/Hero formula */
    "use strict";
    var s = (a + b + c) / 2; // semiperimeter
    return (sqrt(s * (s - a) * (s - b) * (s - c)));
}
function solveLegByResultant(H, l) { /* using vector resultant and a leg */
    "use strict";
    return (sqrt(H * H - l * l));
}
function solveVectorByLegs(a, b) { /* using both legs to find the hypotenuse */
    "use strict";
    return (sqrt(a * a + b * b));
}
function DOM_callback() { /* Actually solve any triangle.  (Enough info??) */
    var mA = externBrowserFetch("mA");
    var mB = externBrowserFetch("mB");
    var mC = externBrowserFetch("mC");
    var AB = externBrowserFetch("AB");
    var AC = externBrowserFetch("AC");
    var BC = externBrowserFetch("BC");
    var P = externBrowserFetch("perimeter");
    var A = externBrowserFetch("area");

    mA = processCorruptData(mA);
    mB = processCorruptData(mB);
    mC = processCorruptData(mC);
    AB = processCorruptData(AB);
    AC = processCorruptData(AC);
    BC = processCorruptData(BC);
    P = processCorruptData(P);
    A = processCorruptData(A);
    if ((isGiven(mA) === false) && isGiven(mB) && isGiven(mC)) {
        mA = solveArcByTriangleSum(mB, mC);
    }
    if ((isGiven(mB) === false) && isGiven(mA) && isGiven(mC)) {
        mB = solveArcByTriangleSum(mA, mC);
    }
    if ((isGiven(mC) === false) && isGiven(mA) && isGiven(mB)) {
        mC = solveArcByTriangleSum(mA, mB);
    }
    if (isGiven(P) === true) { /* Unusual piece of information but helpful. */
        if ((isGiven(AB) === false) && isGiven(AC) && isGiven(BC)) {
            AB = solveSideByPerimeter(P, AC, BC);
        }
        if ((isGiven(AC) === false) && isGiven(AB) && isGiven(BC)) {
            AC = solveSideByPerimeter(P, AB, BC);
        }
        if ((isGiven(BC) === false) && isGiven(AB) && isGiven(AC)) {
            BC = solveSideByPerimeter(P, AB, AC);
        }
    } /* Why use the Pythagorean Theorem, when we can subtract rational #'s? */
    if ((mA === mB) && (mB === 60)) {
        if (isGiven(AB) === true) {
            BC = AC = AB;
        }
        if (isGiven(AC) === true) {
            AB = BC = AC;
        }
        if (isGiven(BC) === true) {
            AC = AB = BC;
        }
    } /* Equiangular triangles are equilateral. */
    if ((AB === AC) && (AC === BC)) {
        mC = mB = mA = 60;
        P = solvePerimeterBySide(AB);
        A = solveAreaBySide(AB);
    } /* Equilateral triangles are equiangular. */
    if (isGiven(A) === true) { /* Again, delay using the Pythagorean Theorem. */
        if (mA === 90) {
            AB = isGiven(AC) ? solveLegByArea(A, AC) : AB; // A = 1/2*b*h, so:
            AC = isGiven(AB) ? solveLegByArea(A, AB) : AC; // b = 2*A / h;
        } // MUCH safer decimal precision than the Pythagorean Theorem.
        if (mB === 90) {
            AB = isGiven(BC) ? solveLegByArea(A, BC) : AB;
            BC = isGiven(AB) ? solveLegByArea(A, AB) : BC;
        }
        if (mC === 90) {
            AC = isGiven(BC) ? solveLegByArea(A, BC) : AC;
            BC = isGiven(AC) ? solveLegByArea(A, AC) : BC;
        }
    }
    if (mC === 90) { /* If we still miss some lengths, it gets desperate. */
        if ((isGiven(AB) === false) && isGiven(AC) && isGiven(BC)) {
            AB = solveVectorByLegs(AC, BC); // c^2 = a^2 + b^2
        }
        if ((isGiven(AC) === false) && isGiven(AB) && isGiven(BC)) {
            AC = solveLegByResultant(AB, BC); // b^2 = c^2 - a^2
        }
        if ((isGiven(BC) === false) && isGiven(AB) && isGiven(AC)) {
            BC = solveLegByResultant(AB, AC); // a^2 = c^2 - b^2
        }
    }
    if (mB === 90) {
        if ((isGiven(AB) === false) && isGiven(AC) && isGiven(BC)) {
            AB = solveLegByResultant(AC, BC);
        }
        if ((isGiven(AC) === false) && isGiven(AB) && isGiven(BC)) {
            AC = solveVectorByLegs(AB, BC);
        }
        if ((isGiven(BC) === false) && isGiven(AB) && isGiven(AC)) {
            BC = solveLegByResultant(AC, AB);
        }
    }
    if (mA === 90) {
        if ((isGiven(AB) === false) && isGiven(AC) && isGiven(BC)) {
            AB = solveLegByResultant(BC, AC);
        }
        if ((isGiven(AC) === false) && isGiven(AB) && isGiven(BC)) {
            AC = solveLegByResultant(BC, AB);
        }
        if ((isGiven(BC) === false) && isGiven(AB) && isGiven(AC)) {
            BC = solveVectorByLegs(AB, AC);
        }
    }
/* to-do:  sines, secants, tangents, inverse trig., last resorts go here ... */
    P = isGiven(P) ? P : solvePerimeterBySides(AB, AC, BC);
    A = isGiven(A) ? A : solveAreaBySides(AB, AC, BC);
    externBrowserWriteBack("a", BC);
    externBrowserWriteBack("b", AC);
    externBrowserWriteBack("c", AB);
    externBrowserWriteBack("A", mA);
    externBrowserWriteBack("B", mB);
    externBrowserWriteBack("C", mC);
    externBrowserWriteBack("P", P);
    externBrowserWriteBack("T", A);
    return;
}
