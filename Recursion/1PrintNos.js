let num = 0;
function PrintNos() {
    if (num === 3) return;
    console.log(num);
    num++;
    PrintNos();
}
PrintNos();