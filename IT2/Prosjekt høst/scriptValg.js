var pTekst = document.getElementById("pTekst");
var divRamme = document.getElementById("divRamme");
var btnSvar2 = document.getElementById("btnSvar2");
var inpTekst = document.getElementById("inpTekst");
var btnTilInp = document.getElementById("btnTilInp");
var pGuide = document.getElementById("pGuide");
var article = document.getElementById("article");
var imgMan = document.getElementById("imgMan");
var imgMan1 = document.getElementById("imgMan1");
var imgMan2 = document.getElementById("imgMan2");
var tekstliste = ["Hi!", "My name is Peter", "You must be new around here?", "What is your name?", "Ohh, lovely", "Nice to meet you","Before you can begin your adventure, you must choose a companion...", "You have to choose from the following three...", "1", "2", "3", "Time to choose! + Press the key 1, 2 or 3."  , "You may consider another one..."];
let n = 0;
let m = 0;
let name;



btnSvar2.onclick = function () {
    article.style.visibility = "visible";
    pGuide.style.display = "none";
    btnSvar2.style.fontSize = "110%";
    btnSvar2.style.marginLeft = "90%";
    divRamme.style.backgroundColor = "transparent";
    pTekst.innerHTML = tekstliste[n];
    n++;
    if (n > 15) {
        n = 0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n === 4) {
        inpTekst.type = "text";
        btnTilInp.style.visibility = "visible";
        btnSvar2.style.visibility =  "hidden";
    }
    if (n === 9) {
        //article.style.marginTop =
        imgMan.style.display = "block";
        imgMan.src = "man1.jpg"

    }
    if (n === 10) {
        imgMan.style.display = "block";
        imgMan.src = "Man2.png";
    }
    if (n === 11) {
        imgMan.style.display = "block";
        imgMan.src = "man3.png";
    }
    if (n === 12) {
        imgMan.style.display = "block";
        imgMan1.style.display = "block";
        imgMan2.style.display = "block";
        imgMan.src = "man1.jpg";
        imgMan1.src = "Man2.png";
        imgMan2.src = "man3.png";
    }
}
btnSvar2.onchange = function () {
    article.style.visibility = "visible";
    pGuide.style.display = "none";
    btnSvar2.style.fontSize = "110%";
    btnSvar2.style.marginLeft = "90%";
    divRamme.style.backgroundColor = "transparent";
    pTekst.innerHTML = tekstliste[n];
    n++;
    if (n > 15) {
        n = 0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n === 1) {
        pGuide.style.visibility = "hidden";
    }
    if (n === 4) {
        inpTekst.type = "text";
        btnTilInp.style.visibility = "visible";
        btnSvar2.style.visibility =  "hidden";
    }
    if (n === 9) {
        imgMan.style.display = "block";
        imgMan.src = "man1.jpg";

    }
    if (n === 10) {
        imgMan.style.display = "block";
        imgMan.src = "Man2.png";
    }
    if (n === 11) {
        imgMan.style.display = "block";
        imgMan.src = "man3.png";
    }h
    if (n === 12) {
        imgMan.style.display = "block";
        imgMan1.style.display = "block";
        imgMan2.style.display = "block";
        imgMan.src = "man1.jpg";
        imgMan1.src = "Man2.png";
        imgMan2.src = "man3.png";
    }
}

btnTilInp.onclick = function () {
    tekstliste[5] = "Nice to meet you " + inpTekst.value;
    tekstliste[7] = inpTekst.value + ", you have to choose from the following three...";
    btnTilInp.style.visibility = "hidden";
    inpTekst.type = "hidden";
    btnSvar2.style.visibility = "visible";
    tekstliste[3] = "next..." + inpTekst.value;

}
window.onkeydown = function(event){

    const boks = document.querySelector(`div[data-code=${event.code}]`);
    const lyd = document.querySelector(`audio[data-code=${event.code}]`);

    if(!boks){
        return;
    }

    lyd.currentTime = 0;
    lyd.play();

    boks.classList.add("spiller");

}
window.onkeyup = function(event){
    const boks = document.querySelector(`div[data-code=${event.code}]`);

    if(!boks){
        return;
    }

    boks.classList.remove("spiller");

}


//}


