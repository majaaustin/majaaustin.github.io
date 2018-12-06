var tekstliste = ["Hi!",
    "My name is Peter",
    "You must be new around here?",
    "What is your name?",
    "Nice to meet you",
    "Before you can begin your adventure, you must choose a companion...",
    "You have to choose from the following three...",
    "1",
    "2",
    "3",
    "Time to choose! Do so by pressing key 1, 2 or 3.",
    "Nice choice, but...",
    "Let us have a bet, are you in?",
    "Choose a number between 4 and 7. If you guess my number you will get your chosen companion, but if not you will end up with a random chosen companion.",
    "Time to begin!",
    "Which number am I thinking of? ",
    "Ready for the results?",
    "jklh",
    "Time to give your companion a name!",
    "What a nice-looking lad",
    "Now it is time to start your adventure, don’t you agree?",
    "Now it is time to start your adventure, don’t you agree?",
    "s",
    "b"]; //Array med all tekst innhold til spillet


var pTekst = document.getElementById("pTekst"); //variabel til hovedtekst
var divRamme = document.getElementById("divRamme"); //ytter ramme
var btnSvar2 = document.getElementById("btnSvar2"); //hoved knapp (next)
var inpTekst = document.getElementById("inpTekst"); //innskrivningsfelt til navn
var btnTilInp = document.getElementById("btnTilInp"); //knapp til navn
var pGuide = document.getElementById("pGuide"); //
var article = document.getElementById("article");
var imgMan = document.getElementById("imgMan");
var imgMan1 = document.getElementById("imgMan1");
var imgMan2 = document.getElementById("imgMan2");
var companion = 0;
var inpTekst1 = document.getElementById("inpTekst1");
var btnTilInp1 = document.getElementById("btnTilInp1");
var pTall = document.getElementById("pTall");
let n = 0;
let name;
var inpTall = document.getElementById("inpTall");
var btnTilInpTall = document.getElementById("btnTilInpTall");
var imgKing = document.getElementById("imgKing");
var inpCompName = document.getElementById("inpCompName");
var btnCompName = document.getElementById("btnCompName");
var inpStart = document.getElementById("inpStart");
var btnStart = document.getElementById("btnStart");


btnTilInp.onchange = function () {
    tekstliste[4] = "Nice to meet you " + inpTekst.value;
    tekstliste[6] = inpTekst.value + ", you have to choose from the following three...";
    btnTilInp.style.display = "none";
    inpTekst.style.display = "none";
    btnSvar2.style.visibility = "visible";
    tekstliste[3] = "ooh, lovely...";
    pTekst.innerHTML = tekstliste[3];

    //pTekst = tekstliste[3];

}

btnTilInp1.onchange = function () {
    if(inpTekst1.value === "yes"){
        tekstliste[11] = "okey...";
        pTekst.innerHTML = tekstliste[11];
        inpTekst1.type = "hidden";
        btnTilInp1.style.display = "none";
        btnSvar2.style.display = "block";
    }
    else {
        tekstliste[12] = "Are you sure? please say yes to continue";
        pTekst.innerHTML = tekstliste[12];
    }

}
btnTilInpTall.onchange = function () {
    btnSvar2.style.display = "block";
    btnTilInpTall.style.display = "none";
    inpTall.style.display = "none";
    pTall.style.display = "none";
    tekstliste[16] = "Lets see....";
    pTekst.innerHTML = tekstliste[16];
}
btnCompName.onchange = function () {
    btnSvar2.style.display = "block";
    btnCompName.style.display = "none";
    inpCompName.style.display = "none";
    tekstliste[18] = "Press next";
    pTekst.innerHTML = tekstliste[18];

}
btnStart.onchange = function () {
    if(inpStart.value === "yes"){
        tekstliste[26] = "Too bad, I dont know where to go next yet though...";
        pTekst.innerHTML = tekstliste[26];
        btnSvar2.style.display = "none";
        btnStart.style.display = "none";
        inpStart.style.display = "none";
    }
    else {
        tekstliste[24] = "What do you mean? Come on… let’s get going";
        pTekst.innerHTML = tekstliste[24];

    }
}
btnSvar2.onkeydown = function () {
    article.style.visibility = "visible";
    pGuide.style.display = "none";
    btnSvar2.style.fontSize = "110%";
    btnSvar2.style.marginLeft = "90%";
    divRamme.style.backgroundColor = "transparent";
    pTekst.innerHTML = tekstliste[n];
    n++;
    if (n > 28) {
        n = 0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n === 1){
        imgKing.style.display = "block";

    }
    if (n === 4) {
        inpTekst.style.display = "block";
        btnTilInp.style.display = "block";
        btnSvar2.style.visibility =  "hidden";
    }
    if (n === 8) {
        imgMan.style.display = "block";
        imgMan.src = "man1.jpg"

    }
    if (n === 9) {
        imgMan.style.display = "block";
        imgMan.src = "Man2.png";
    }
    if (n === 10) {
        imgMan.style.display = "block";
        imgMan.src = "man3.png";
    }
    if (n === 11) {
        imgMan.style.display = "block";
        imgMan1.style.display = "block";
        imgMan2.style.display = "block";
        imgMan1.src = "man1.jpg";
        imgMan.src = "Man2.png";
        imgMan2.src = "man3.png";
    }
    if (n === 12) {
        imgMan.style.display = "none";
        imgMan1.style.display = "none";
        imgMan2.style.display = "none";

    }
    if (n ===13) {
        tekstliste[11] = "Let us have a bet, are you in " + inpTekst.value + "?" + " yes or no";
        pTekst.innerHTML = tekstliste[11];
        inpTekst1.style.display = "block";
        btnTilInp1.style.display = "block";
        btnSvar2.style.display = "none";
    }
    if (n === 16) {
        pTall.style.display = "block";
        var m = 4;
        while(m<=7){
            var t = m + " ";
            pTall.innerHTML += t;

            m++;

        }
        inpTall.style.display = "block";
        btnTilInpTall.style.display = "block";
        btnSvar2.style.display = "none";

    }
    if (n === 17) {
        if (inpTall.value === "5"){

            tekstliste[17] = "You got it right! This is your companion:";

        }
        else {

            tekstliste[17] = "Sorry, you did not get it right. This is your companion:";

        }
    }
    if (n === 18) {
        if (inpTall.value === "5"){

            imgMan.style.display = "block";
            imgMan.src = companion;

        }
        else {
            imgMan.style.display = "block";
            var tilfeldig = Math.floor(Math.random()*3+1);
            if (tilfeldig === 1){

                imgMan.src = "man1.jpg";
            }
            else if (tilfeldig === 2){

                imgMan.src = "Man2.png";
            }
            else if (tilfeldig === 3) {

                imgMan.src = "man3.png";
            }
        }

    }
    if (n === 19) {
        inpCompName.style.display = "block";
        btnCompName.style.display = "block";
        btnSvar2.style.display = "none";
    }
    if (n === 20) {
        tekstliste[20] = "I agree… he really looks like a " + inpCompName.value;
    }
    if (n === 22) {
        btnSvar2.style.display = "none";
        btnStart.style.display = "block";
        inpStart.style.display = "block";
    }
    if (n === 23) {
        btnSvar2.style.display = "block";
        btnStart.style.display = "none";
        inpStart.style.display = "none";
    }
}
btnSvar2.onclick = function () {
    article.style.visibility = "visible";
    pGuide.style.display = "none";
    btnSvar2.style.fontSize = "110%";
    btnSvar2.style.marginLeft = "90%";
    divRamme.style.backgroundColor = "transparent";
    pTekst.innerHTML = tekstliste[n];
    n++;
    if (n > 28) {
        n = 0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n === 1){
        imgKing.style.display = "block";

    }
    if (n === 4) {
        inpTekst.style.display = "block";
        btnTilInp.style.display = "block";
        btnSvar2.style.visibility =  "hidden";
    }
    if (n === 8) {
        imgMan.style.display = "block";
        imgMan.src = "man1.jpg"

    }
    if (n === 9) {
        imgMan.style.display = "block";
        imgMan.src = "Man2.png";
    }
    if (n === 10) {
        imgMan.style.display = "block";
        imgMan.src = "man3.png";
    }
    if (n === 11) {
        imgMan.style.display = "block";
        imgMan1.style.display = "block";
        imgMan2.style.display = "block";
        imgMan1.src = "man1.jpg";
        imgMan.src = "Man2.png";
        imgMan2.src = "man3.png";
    }
    if (n === 12) {
        imgMan.style.display = "none";
        imgMan1.style.display = "none";
        imgMan2.style.display = "none";

    }
    if (n ===13) {
        tekstliste[11] = "Let us have a bet, are you in " + inpTekst.value + "?" + " yes or no";
        pTekst.innerHTML = tekstliste[11];
        inpTekst1.style.display = "block";
        btnTilInp1.style.display = "block";
        btnSvar2.style.display = "none";
    }
    if (n === 16) {
        pTall.style.display = "block";
        var m = 4;
        while(m<=7){
            var t = m + " ";
            pTall.innerHTML += t;

            m++;

        }
        inpTall.style.display = "block";
        btnTilInpTall.style.display = "block";
        btnSvar2.style.display = "none";

    }
    if (n === 17) {
        if (inpTall.value === "5"){

            tekstliste[17] = "You got it right! This is your companion:";

        }
        else {

            tekstliste[17] = "Sorry, you did not get it right. This is your companion:";

        }
    }
    if (n === 18) {
        if (inpTall.value === "5"){

            imgMan.style.display = "block";
            imgMan.src = companion;

        }
        else {
            imgMan.style.display = "block";
            var tilfeldig = Math.floor(Math.random()*3+1);
            if (tilfeldig === 1){

                imgMan.src = "man1.jpg";
            }
            else if (tilfeldig === 2){

                imgMan.src = "Man2.png";
            }
            else if (tilfeldig === 3) {

                imgMan.src = "man3.png";
            }
        }

    }
    if (n === 19) {
        inpCompName.style.display = "block";
        btnCompName.style.display = "block";
        btnSvar2.style.display = "none";
    }
    if (n === 20) {
        tekstliste[20] = "I agree… he really looks like a " + inpCompName.value;
    }
    if (n === 22) {
        btnSvar2.style.display = "none";
        btnStart.style.display = "block";
        inpStart.style.display = "block";
    }
    if (n === 23) {
        btnSvar2.style.display = "block";
        btnStart.style.display = "none";
        inpStart.style.display = "none";
    }
}

window.onkeydown = function(event){
    if(companion === 0){
        if(event.code==="Digit1"){companion = "man1.jpg"}
        else if(event.code==="Digit2"){companion = "Man2.png"}
        else if(event.code==="Digit3"){companion = "man3.png"}

    }
    const boks = document.querySelector(`div[data-code=${event.code}]`);
    const lyd = document.querySelector(`audio[data-code=${event.code}]`);

    if(!lyd){
        return;
    }

    lyd.currentTime = 0;
    lyd.play();

    if(!boks){
        return;
    }


    boks.classList.add("spiller");

}
window.onkeyup = function(event){
    const boks = document.querySelector(`div[data-code=${event.code}]`);

    if(!boks){
        return;
    }

    boks.classList.remove("spiller");

}
//document.getElementById("auto").loop = true;
//var x = document.getElementById("auto").autoplay;
//var x = document.getElementById("auto");
//x.autoplay = true;
//x.load();


