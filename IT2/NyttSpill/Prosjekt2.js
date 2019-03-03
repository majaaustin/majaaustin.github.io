const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const hdnPoeng = document.getElementById("hdnPoeng");
const hdnRekord = document.getElementById("hdnRekord");
const btnSpiller2 = document.getElementById("btnSpiller2");

let poeng = 0;
let okef = 0;
if(localStorage.rekord === undefined){
    localStorage.rekord = 0;
}
hdnRekord.innerHTML = "Rekord: " + localStorage.rekord;
let bakgrunnsfarge = "green";
dx = 0;
dy = -20;


let slange = [{
    bredde:20,
    hoyde:20,
    xpos:60,
    ypos:70,
    xfart:5,
    xretning:1,
    yfart:0,
    yretning:0
},{
    bredde: 20,
    hoyde: 20,
    xpos: 40,
    ypos: 70,
    xfart:5,
    xretning:1,
    yfart:0,
    yretning:0
}];

let eple1 = {
    bredde:10,
    hoyde:10,
    xpos:600,
    ypos:300,
    farge:"red",

}


gameLoop();
function gameLoop() {
    clearCanvas();
    sjekkKolisjon(slange[0]);
    kolisjon(slange[0],eple1);
    flyttSlange(slange[0]);
    tegnSlange(slange[0]);
    tegnEple(eple1);



    requestAnimationFrame(gameLoop);
}
function advanceSlange() {
    const hode = {x: slange[0].xpos + dx, y: slange[0].ypos + dy};
    slange.unshift(hode);
    slange.pop();
}

function tegnSlange() {
    // loop through the snake parts drawing each part on the canvas
    slange.forEach(tegnSlangeDel)
}

function tegnSlangeDel(slangeDel){
    ctx.fillStyle = "darkorange";
    ctx.fillRect(slangeDel.xpos, slangeDel.ypos, slangeDel.bredde, slangeDel.hoyde);
}

function tegnEple(eple){
    ctx.fillStyle = eple.farge;
    ctx.fillRect(eple.xpos, eple.ypos, eple.bredde, eple.hoyde);
}
function flyttSlange(slange){
    slange.xpos = slange.xpos + (slange.xretning*slange.xfart);
    slange.ypos = slange.ypos + (slange.yretning*slange.yfart);
    document.addEventListener("keydown",function(e){

        if (e.keyCode == 38 && !(slange.yretning === 1)){
            console.log('up');
            slange.yfart = 5 + okef;
            slange.yretning = -1;
            slange.xfart = 0;
            slange.xretning = 0;

        }
        if (e.keyCode == 39 && !(slange.xretning === -1) ){
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 + okef;
            slange.xretning = 1;

        }
        if (e.keyCode == 37 && !(slange.xretning === 1)){
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 + okef;
            slange.xretning = -1;

        }
        if (e.keyCode == 40 && !(slange.yretning === -1)) {
            console.log('down');
            slange.yfart = 5 + okef;
            slange.xretning = 0;
            slange.yretning = 1;
            slange.xfart = 0;

        }
    });

}


function sjekkSvar(slange){
    alert("Du har tapt");
    slange.xpos = 60;
    slange.ypos = 70;
    slange.xfart = 5;
    slange.yfart = 0;
    slange.xretning = 1;
    slange.bredde = 20;
    slange.hoyde = 20;
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
function sjekkKolisjon(slange) {
    if (slange.xpos >= canvas.width-slange.bredde || slange.xpos <= 0 ){
        sjekkSvar(hode);

    }else if (slange.ypos >= canvas.height-slange.hoyde || slange.ypos <= 0 ){
        sjekkSvar(hode);

    }

}
function nyttEple(eple){
    poeng++;
    hdnPoeng.innerHTML = "Poeng: " + poeng;
    eple.xpos = Math.random()*1200;
    eple.ypos = Math.random()*600;
    okef+=0.25;





}

function kolisjon(slange, eple){
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


function clearCanvas(){
    ctx.fillStyle = bakgrunnsfarge;
    ctx.fillRect(0,0, canvas.width, canvas.height);
}