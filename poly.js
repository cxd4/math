/******************************************************************************\
* Project:  Standard Polynomial Roots Solver                                   *
* Release:  2012.09.22                                                         *
* Creator:  R. J. Swedlow                                                      *
* License:  public domain                                                      *
\******************************************************************************/

function solve_degree_0() { //constant
    var a = document.getElementById("a").value;
        // thank you Mister Hotitski xD
    document.getElementById("x").value = 0;
    return;
}
function solve_degree_1() { //linear
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    document.getElementById("x").value = -(b/a);
    return;
}

// function solve_degree_2() { //quadratic
// function solve_degree_3() { //cubic
// function solve_degree_4() { //quartic
// function solve_degree_32() { //test using the Rational Root Theorem
