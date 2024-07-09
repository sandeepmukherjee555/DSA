//print n to 1
function printNTo1(i, n) {
    if (i < 1) return;
    console.log(i);
    i--;
    printNTo1(i, n);
}

printNTo1(5, 5);