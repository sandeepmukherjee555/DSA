//print 1 to N using Backtracking means we cannot use n+1

function print1ToNBacktracking(i, n) {
    if (i < 1) return;
    print1ToNBacktracking(i - 1, n);
    console.log(i);
}

print1ToNBacktracking(5, 5);

//print N to 1 using backtracking