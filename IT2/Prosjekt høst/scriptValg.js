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
var tekstliste = ["Hi!", "My name is Peter", "You must be new around here?", "What is your name?", "Ohh, lovely", "Nice to meet you","Before you can begin your adventure, you must choose a companion...", "You have to choose from the following three...", "1", "2", "3", "Time to choose! Do so by pressing key 1, 2 or 3."  , "Nice choice, but...", "Let us have a bet, are you in?", "Okey, lets play a little game", "Choose a number between 4 and 7. If you guess my number you will get your chosen companion, but if not you will end up with a random chosen companion.", "Time to begin!", "Which number am I thinking of? ", "Ready for the results?", "jklh"];
var companion = 0;
var inpTekst1 = document.getElementById("inpTekst1");
var btnTilInp1 = document.getElementById("btnTilInp1");
var pTall = document.getElementById("pTall");
let n = 0;
let name;
var inpTall = document.getElementById("inpTall");
var btnTilInpTall = document.getElementById("btnTilInpTall");



btnSvar2.onclick = function () {
    article.style.visibility = "visible";
    pGuide.style.display = "none";
    btnSvar2.style.fontSize = "110%";
    btnSvar2.style.marginLeft = "90%";
    divRamme.style.backgroundColor = "transparent";
    pTekst.innerHTML = tekstliste[n];
    n++;
    if (n > 25) {
        n = 0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n === 4) {
        inpTekst.type = "text";
        btnTilInp.style.display = "block";
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
        imgMan1.src = "man1.jpg";
        imgMan.src = "Man2.png";
        imgMan2.src = "man3.png";
    }
    if (n === 13) {
        imgMan.style.display = "none";
        imgMan1.style.display = "none";
        imgMan2.style.display = "none";

    }
    if (n ===14) {
        tekstliste[14] = "Let us have a bet, are you in " + inpTekst.value + "?" + " yes or no";
        pTekst.innerHTML = tekstliste[14];
        inpTekst1.type = "text";
        btnTilInp1.style.display = "block";
        btnSvar2.style.display = "none";
    }
    if (n === 18) {
        pTall.style.display = "block";
        var m = 4;
        while(m<=7){
            var t = m + " ";
            pTall.innerHTML += t;

            m++;

        }
        inpTall.type = "text";
        btnTilInpTall.style.display = "block";
        btnSvar2.style.display = "none";

    }
    if (n === 19) {
        if (inpTall.value === "5"){

            tekstliste[19] = "You got it right! This is your companion:";

        }
        else {

            tekstliste[19] = "Sorry, you did not get it right. This is your companion:";

        }
    }
    if (n === 20) {
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
}
btnTilInpTall.onclick = function () {
    btnSvar2.style.display = "block";
    btnTilInpTall.style.display = "none";
    inpTall.type = "hidden";
    pTall.style.display = "none";
    tekstliste[18] = "Lets see....";
    pTekst.innerHTML = tekstliste[18];
}

btnSvar2.onchange = function () {
    article.style.visibility = "visible";
    pGuide.style.display = "none";
    btnSvar2.style.fontSize = "110%";
    btnSvar2.style.marginLeft = "90%";
    divRamme.style.backgroundColor = "transparent";
    pTekst.innerHTML = tekstliste[n];
    n++;
    if (n > 25) {
        n = 0;

        pTekst.innerHTML = tekstliste[n];
    }
    if (n === 1) {
        pGuide.style.visibility = "hidden";
    }
    if (n === 4) {
        inpTekst.type = "text";
        btnTilInp.style.display = "block";
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
    }
    if (n === 12) {
        imgMan.style.display = "block";
        imgMan1.style.display = "block";
        imgMan2.style.display = "block";
        imgMan1.src = "man1.jpg";
        imgMan.src = "Man2.png";
        imgMan2.src = "man3.png";
    }
    if (n === 13) {
        imgMan.style.display = "none";
        imgMan1.style.display = "none";
        imgMan2.style.display = "none";

    }
    if (n ===14) {
        tekstliste[14] = "Let us have a bet, are you in " + inpTekst.value + "?" + "yes or no";
        pTekst.innerHTML = tekstliste[14];
        inpTekst1.type = "text";
        btnTilInp1.style.display = "block";
        btnSvar2.style.display = "none";
    }
    if (n === 18){
        pTall.style.display = "block";

    }
    if (n === 19) {
        if (inpTall.value === "5"){

            tekstliste[19] = "You got it right! This is your companion:";

        }
        else {

            tekstliste[19] = "Sorry, you did not get it right. This is your companion:";

        }
    }
    if (n === 20) {
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

}



btnTilInp.onclick = function () {
    tekstliste[5] = "Nice to meet you " + inpTekst.value;
    tekstliste[7] = inpTekst.value + ", you have to choose from the following three...";
    btnTilInp.style.display = "none";
    inpTekst.type = "hidden";
    btnSvar2.style.visibility = "visible";
    tekstliste[3] = "Press next...";
    pTekst.innerHTML = tekstliste[3];

    //pTekst = tekstliste[3];

}
btnTilInp1.onclick = function () {
    if(inpTekst1.value === "yes"){
        tekstliste[14] = "Good, press next then";
        pTekst.innerHTML = tekstliste[14];
        inpTekst1.type = "hidden";
        btnTilInp1.style.display = "none";
        btnSvar2.style.display = "block";
    }
    else {
        tekstliste[14] = "Are you sure? please say yes";
        pTekst.innerHTML = tekstliste[14];
    }

}
window.onkeydown = function(event){
    if(companion === 0){
        if(event.code==="Digit1"){companion = "man1.jpg"}
        else if(event.code==="Digi2"){companion = "Man2.png"}
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

//dette er gææææææææææææææææææææææææææææææææy


//}


