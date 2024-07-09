//print 1 to N
function print1ToN(i, n) {
    if (i > n) return;
    console.log(i);
    i++;
    print1ToN(i, n);
}

print1ToN(1, 5);