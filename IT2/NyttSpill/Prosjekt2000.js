//referanser til HTML-elementer
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const hdnPoeng = document.getElementById("hdnPoeng");
const hdnPoeng2 = document.getElementById("hdnPoeng2");
const hdnRekord = document.getElementById("hdnRekord");
const antallSpillere = document.getElementById("antallSpillere");
//global variabler
let poeng = 0;
let poeng2 = 0;
let okef1 = 0;
let okef2 = 0;
let bakgrunnsfarge = "green";
if(localStorage.rekord === undefined){
    localStorage.rekord = 0;
}
let img = document.createElement("img");
let tapbilde = document.createElement("tapbilde");
hdnRekord.innerHTML = "Rekord: " + localStorage.rekord;
//globale variabler
let slange1 = {
    bredde:20,
    hoyde:20,
    xpos:60,
    ypos:70,
    xfart:5,
    xretning:1,
    yfart:0,
    yretning:0
};
let slange2 = {
    bredde:0,
    hoyde:0,
    xpos:60,
    ypos:200,
    xfart:0,
    xretning:1,
    yfart:0,
    yretning:0
};
let slangeDeler = [slange1];
let slangeDeler2 = [slange2];
let eple1 = {
    bredde:15,
    hoyde:15,
    xpos:600,
    ypos:300
}
//Setup
gameLoop();

function gameLoop() {
    clearCanvas();
    sjekkKolisjon(slange1);
    sjekkKolisjon2(slange2);
    kolisjonMedEple(slange1,eple1);
    kolisjonMedEple2(slange2,eple1);
    kolisjonMedSlange(slange1,slange2);
    flyttSlange(slange1);
    flyttSlange2(slange2);
    tegnSlange(slangeDeler);
    tegnSlange2(slangeDeler2);
    tegnEple(eple1);
    antallSpill();

    requestAnimationFrame(gameLoop);
}
function antallSpill() {
    if(antallSpillere.value === "spiller2"){ //gir verdier til slange2, slik at den blir synlig når en velger To spillere
        slange2.bredde = 20;
        slange2.hoyde = 20;
        slange2.xfart = 5;
        hdnPoeng2.style.color = "blue";
    } else if (antallSpillere.value === "spiller1"){ //tar bort slange2 sine verdier, slik at man ikke lenger kan se den
        slange2.bredde = 0;
        slange2.hoyde = 0;
        slange2.xfart = 0;
        hdnPoeng2.style.color = "black";
    }
}
//funksjonsdefinisjoner
function tegnSlange(slangeDeler) {
    // looper gjennom slange delene og tegner hver del på canvas
    slangeDeler.forEach(tegnSlangeDel)
}
function tegnSlangeDel(slangeDel){ //tegner slange1
    ctx.fillStyle = "darkorange";
    ctx.fillRect(slangeDel.xpos, slangeDel.ypos, slangeDel.bredde, slangeDel.hoyde);
}
function tegnSlange2(slangeDeler2) {
    // looper gjennom slange delene og tegner hver del på canvas
    slangeDeler2.forEach(tegnSlangeDel2)
}
function tegnSlangeDel2(slangeDel2){ //tegner slange2
    ctx.fillStyle = "blue";
    ctx.fillRect(slangeDel2.xpos, slangeDel2.ypos, slangeDel2.bredde, slangeDel2.hoyde);
}
function tegnEple(eple){ // tegner bilde "eple.png"
    img.src="eple.png";
    ctx.drawImage(img,eple.xpos, eple.ypos,eple.bredde,eple.hoyde);
}
function flyttSlange(slange){ //flytter de nye slange delene bakover og gir slange1 mulighet til å flytte seg ved hjelp av EventListener
	for (i = 1; i < slangeDeler.length; i++) {
  		slangeDeler[slangeDeler.length - i].xpos = slangeDeler[slangeDeler.length - i - 1].xpos;
  		slangeDeler[slangeDeler.length - i].ypos = slangeDeler[slangeDeler.length - i - 1].ypos;
	}
    slange.xpos = slange.xpos + (slange.xretning*slange.xfart);
    slange.ypos = slange.ypos + (slange.yretning*slange.yfart);
    document.addEventListener("keydown",function(e){

        if (e.keyCode == 38 && !(slange.yretning === 1)){ //gjør at slangen ikke skal kunne gå motsatt av den rettningen den allerede går
            console.log('up');
            slange.yfart = 5 + okef1; // okef1 og okef 2 øker farten til slange1 og slange2
            slange.yretning = -1;
            slange.xfart = 0;
            slange.xretning = 0;
        }
        if (e.keyCode == 39 && !(slange.xretning === -1) ){
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 + okef1 ;
            slange.xretning = 1;
        }
        if (e.keyCode == 37 && !(slange.xretning === 1)){
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 +okef1;
            slange.xretning = -1;
        }
        if (e.keyCode == 40 && !(slange.yretning === -1)) {
            console.log('down');
            slange.yfart = 5 + okef1;
            slange.xretning = 0;
            slange.yretning = 1;
            slange.xfart = 0;
        }
    });
}
function flyttSlange2(slange) { //flytter de nye slange delene bakover og gir slange1 mulighet til å flytte seg ved hjelp av EventListener
    for (i = 1; i < slangeDeler2.length; i++) {
        slangeDeler2[slangeDeler2.length - i].xpos = slangeDeler2[slangeDeler2.length - i - 1].xpos;
        slangeDeler2[slangeDeler2.length - i].ypos = slangeDeler2[slangeDeler2.length - i - 1].ypos;
    }
    slange.xpos = slange.xpos + (slange.xretning * slange.xfart);
    slange.ypos = slange.ypos + (slange.yretning * slange.yfart);
    document.addEventListener("keydown", function (e) {

        if (e.keyCode == 87 && !(slange.yretning === 1)) {
            console.log('up');
            slange.yfart = 5 +okef2;
            slange.yretning = -1;
            slange.xfart = 0;
            slange.xretning = 0;
        }
        if (e.keyCode == 68 && !(slange.xretning === -1)) {
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 + okef2;
            slange.xretning = 1;
        }
        if (e.keyCode == 65 && !(slange.xretning === 1)) {
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 + okef2;
            slange.xretning = -1;
        }
        if (e.keyCode == 83 && !(slange.yretning === -1)) {
            console.log('down');
            slange.yfart = 5 + okef2;
            slange.xretning = 0;
            slange.yretning = 1;
            slange.xfart = 0;
        }
    });
}
function sjekkSvar(slange){ // når slangen treffer kanten av canvas skal den starte på nytt og sjekke om det ble en ny rekord
    slange.xpos = 60;
    slange.ypos = 70;
    slange.xfart = 5;
    slange.yfart = 0;
    slange.xretning = 1;
    slange.bredde = 20;
    slange.hoyde = 20;
    okef1 = 0;
    slangeDeler = [slange];
    hdnPoeng.innerHTML = "Poeng: " + poeng;
    if(poeng > localStorage.rekord){
        localStorage.rekord = poeng;
        hdnRekord.innerHTML ="Ny rekord: " + poeng;
        hdnRekord.style.color = "DarkGreen";
        poeng = 0;
        hdnPoeng.innerHTML = "Poeng: " + poeng;
    }if(poeng < localStorage.rekord){
        poeng = 0;
        hdnPoeng.innerHTML = "Poeng: " + poeng;
    }
}
function sjekkSvar2(slange){
    slange.xpos = 60;
    slange.ypos = 200;
    slange.xfart = 5;
    slange.yfart = 0;
    slange.xretning = 1;
    slange.bredde = 20;
    slange.hoyde = 20;
    okef2 = 0;
    slangeDeler2 = [slange];
    hdnPoeng2.innerHTML = "Poeng: " + poeng2;
    if(poeng2 > localStorage.rekord){
        localStorage.rekord = poeng2;
        hdnRekord.innerHTML ="Ny rekord: " + poeng2;
        hdnRekord.style.color = "DarkGreen";
        poeng2 = 0;
        hdnPoeng2.innerHTML = "Poeng: " + poeng2;
    }if(poeng2 < localStorage.rekord){
        poeng2 = 0;
        hdnPoeng2.innerHTML = "Poeng: " + poeng2;
    }
}
function tapt (slange, slange1){ //når slangene kolliderer skal det komme opp en alert, for så at slangene starter på nytt igjen med de gamle verdiene
    alert("Dere har tapt");
    slange.xpos = 60;
    slange.ypos = 70;
    slange.xfart = 5;
    slange.yfart = 0;
    slange.xretning = 1;
    slange.bredde = 20;
    slange.hoyde = 20;
    slange1.xpos = 60;
    slange1.ypos = 200;
    slange1.xfart = 5;
    slange1.yfart = 0;
    slange1.xretning = 1;
    slange1.bredde = 20;
    slange1.hoyde = 20;
    okef1 = 0;
    slangeDeler = [slange];
    hdnPoeng.innerHTML = "Poeng: " + poeng;
    slangeDeler2 = [slange1];
    hdnPoeng2.innerHTML = "Poeng: " + poeng2;
    if(poeng2 > localStorage.rekord){ //sjekker om ny rekord
        localStorage.rekord = poeng2;
        hdnRekord.innerHTML ="Ny rekord: " + poeng2;
        hdnRekord.style.color = "DarkGreen";
        poeng2 = 0;
        hdnPoeng2.innerHTML = "Poeng: " + poeng2;
    }if(poeng2 < localStorage.rekord){
        poeng2 = 0;
        hdnPoeng2.innerHTML = "Poeng: " + poeng2;
    }
    if(poeng > localStorage.rekord){
        localStorage.rekord = poeng;
        hdnRekord.innerHTML ="Ny rekord: " + poeng;
        hdnRekord.style.color = "DarkGreen";
        poeng = 0;
        hdnPoeng.innerHTML = "Poeng: " + poeng;
    }if(poeng < localStorage.rekord){
        poeng = 0;
        hdnPoeng.innerHTML = "Poeng: " + poeng;
    }
}
function sjekkKolisjon(slange) {
    if (slange.xpos >= canvas.width-slange.bredde || slange.xpos <= 0 ){
        sjekkSvar(slange1);

    }else if (slange.ypos >= canvas.height-slange.hoyde || slange.ypos <= 0 ){
        sjekkSvar(slange1);
    }
}
function sjekkKolisjon2(slange) {
    if (slange.xpos >= canvas.width-slange.bredde || slange.xpos <= 0 ){

        sjekkSvar2(slange2);

    }else if (slange.ypos >= canvas.height-slange.hoyde || slange.ypos <= 0 ){

        sjekkSvar2(slange2);
    }
}
function nyttEple(eple){
    poeng++;
    slangeDeler.push({xpos:slangeDeler[slangeDeler.length -1].xpos, ypos:slangeDeler[slangeDeler.length -1].ypos, bredde:20, hoyde:20});
    hdnPoeng.innerHTML = "Poeng: " + poeng;
    eple.xpos = Math.random()*1000;
    eple.ypos = Math.random()*400;
    okef1+=0.20;
}
function nyttEple2(eple){
    poeng2++;
    slangeDeler2.push({xpos:slangeDeler2[slangeDeler2.length -1].xpos, ypos:slangeDeler2[slangeDeler2.length -1].ypos, bredde:20, hoyde:20});
    hdnPoeng2.innerHTML = "Poeng: " + poeng2;
    eple.xpos = Math.random()*1000;
    eple.ypos = Math.random()*400;
    okef2+=0.20;
}
function kolisjonMedEple(slange, eple){
    if(eple.xpos > slange.xpos && eple.xpos < slange.xpos + slange.bredde && eple.ypos > slange.ypos && eple.ypos < slange.ypos + slange.hoyde){
        nyttEple(eple1);
    }
    if(eple.xpos + eple.bredde > slange.xpos && eple.xpos + eple.bredde < slange.xpos + slange.bredde && eple.ypos > slange.ypos && eple.ypos < slange.ypos + slange.hoyde){
        nyttEple(eple1);
    }
    if(eple.xpos > slange.xpos && eple.xpos < slange.xpos + slange.bredde && eple.ypos + eple.hoyde > slange.ypos && eple.ypos + eple.hoyde < slange.ypos + slange.hoyde){
        nyttEple(eple1);
    }
    if(eple.xpos + eple.bredde > slange.xpos && eple.xpos + eple.bredde < slange.xpos + slange.bredde && eple.ypos + eple.hoyde > slange.ypos && eple.ypos  + eple.hoyde < slange.ypos + slange.hoyde){
        nyttEple(eple1);
    }
}
function kolisjonMedEple2(slange, eple){
    if(eple.xpos > slange.xpos && eple.xpos < slange.xpos + slange.bredde && eple.ypos > slange.ypos && eple.ypos < slange.ypos + slange.hoyde){
        nyttEple2(eple1);
    }
    if(eple.xpos + eple.bredde > slange.xpos && eple.xpos + eple.bredde < slange.xpos + slange.bredde && eple.ypos > slange.ypos && eple.ypos < slange.ypos + slange.hoyde){
        nyttEple2(eple1);
    }
    if(eple.xpos > slange.xpos && eple.xpos < slange.xpos + slange.bredde && eple.ypos + eple.hoyde > slange.ypos && eple.ypos + eple.hoyde < slange.ypos + slange.hoyde){
        nyttEple2(eple1);
    }
    if(eple.xpos + eple.bredde > slange.xpos && eple.xpos + eple.bredde < slange.xpos + slange.bredde && eple.ypos + eple.hoyde > slange.ypos && eple.ypos  + eple.hoyde < slange.ypos + slange.hoyde){
        nyttEple2(eple1);
    }
}
function kolisjonMedSlange (slange, slanger){
    if(slanger.xpos > slange.xpos && slanger.xpos < slange.xpos + slange.bredde && slanger.ypos > slange.ypos && slanger.ypos < slange.ypos + slange.hoyde){
        tapt(slange1,slange2);
    }
    if(slanger.xpos + slanger.bredde > slange.xpos && slanger.xpos + slanger.bredde < slange.xpos + slange.bredde && slanger.ypos > slange.ypos && slanger.ypos < slange.ypos + slange.hoyde){
        tapt(slange1,slange2);
    }
    if(slanger.xpos > slange.xpos && slanger.xpos < slange.xpos + slange.bredde && slanger.ypos + slanger.hoyde > slange.ypos && slanger.ypos + slanger.hoyde < slange.ypos + slange.hoyde){
        tapt(slange1,slange2);
    }
    if(slanger.xpos + slanger.bredde > slange.xpos && slanger.xpos + slanger.bredde < slange.xpos + slange.bredde && slanger.ypos + slanger.hoyde > slange.ypos && slanger.ypos  + slanger.hoyde < slange.ypos + slange.hoyde){
        tapt(slange1,slange2);
    }
}
function clearCanvas(){
    ctx.fillStyle = bakgrunnsfarge;
    ctx.fillRect(0,0, canvas.width, canvas.height);
}