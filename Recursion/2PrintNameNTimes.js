// Print Name N times using Recursion
function printNameNtimes(i, n) {
    if (i > n) return;
    console.log("Sandeep Mukherjee");
    i++;
    printNameNtimes(i, n);
}

printNameNtimes(1, 5);