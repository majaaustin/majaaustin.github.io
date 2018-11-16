var pTekst = document.getElementById("pTekst")
var btnSvar2 = document.getElementById("btnSvar2");
var inpTekst = document.getElementById("inpTekst");
var btnTilInp = document.getElementById("btnTilInp");
var tekstliste = ["Hi!", "My name is Peter", "You must be new around here?", "What is your name?", "Nice to meet you"];
let n = 0;
let m = 0;
btnSvar2.onclick = function () {

    n++;
    if (n>3){
        n=0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n=3){
        inpTekst.type = "text";
        btnTilInp.style.visibility = "visible";
    }

    console.log(n);
}



