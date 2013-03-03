/******************************************************************************\
* Project:  Composition of Whole Numbers                                       *
* Release:  2013.03.03                                                         *
* Authors:  R. J. Swedlow                                                      *
* License:  public domain                                                      *
\******************************************************************************/

function isDivisible(m, n) {
    "use strict";
    return (m % n === 0);
}
function isComposite(n) {
    "use strict";
    if (n % 2 === 0) {
        return !(n === 2); /* 2 is prime; all other evens are composite. */
    }
    var limit = 3; // var limit = parseInt(Math.sqrt(n)); // faster search
 // limit -= !(limit & 1); /* Initialize divisor for odd bases only. */
    while (limit < n) {
        if (isDivisible(n, limit)) {
            return true; /* The number is composite, so it can't be prime. */
        }
        limit += 2;
    } /* limit or n < 0, = 1, or divBy = 0 miss this loop and return false. */
    return false;
}
function isPrime(n) {
    "use strict";
    if (n < 2) {
        return false; /* Neither prime nor composite (null/undef. if lt. 0). */
    }
    return !(isComposite(n)); /* R >= 2 ? then R is prime iff. not composite. */
}
function CountPrimes(base, terminal) {
    "use strict";
    var count = 0;
    while (base <= terminal) {
        count += isPrime(base);
        ++base;
    }
    return (count);
}
function GCD(m, n) {
    "use strict";
    var i = (m > n) ? m % n : n % m;
    if (i === 0) { /* examples:  GCD(25, 50) = 25; GCD(4, 8) = 4 */
        return ((m < n) ? m : n); // Maximal divisor is lesser of two multiples.
    }
    do { /* Then, remainder after division is the maximum GCD. */
        if (isDivisible(m, i) && isDivisible(n, i)) {
            return (i);
        }
        --i;
    } while (true); /* Not a permanent loop since 1 is a factor of any int. */
}
function LCM(m, n) {
    "use strict";
    var i = m * n;
    i /= GCD(m, n);
    return (i);
}
