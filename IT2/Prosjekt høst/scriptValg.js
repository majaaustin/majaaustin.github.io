var pTekst = document.getElementById("pTekst");
var btnSvar2 = document.getElementById("btnSvar2");
var inpTekst = document.getElementById("inpTekst");
var btnTilInp = document.getElementById("btnTilInp");
var tekstliste = ["Hi!", "My name is Peter", "You must be new around here?", "What is your name?", "Nice to meet you" ];
let n = 0;
let m = 0;
btnSvar2.onclick = function () {
    pTekst.innerHTML = tekstliste[n];
    n++;
    if (n>5){
        n=0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n===4){
        inpTekst.type = "text";
        btnTilInp.style.visibility = "visible";
    }


    console.log(n);
}
//btnTilInp.onclick = function () {
    //inpTekst.value = ;
}



