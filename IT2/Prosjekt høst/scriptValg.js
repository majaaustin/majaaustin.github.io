var pTekst = document.getElementById("pTekst")
var btnSvar2 = document.getElementById("btnSvar2");
var tekstliste = ["Hi!", "My name is Peter", "You must be new around here?", "What is your name?"];
let n = 0;
btnSvar2.onclick = function () {
    n++;
    if (n>3){
        n = 0;
    }
    pTekst.innerHTML = tekstliste[n];


}



