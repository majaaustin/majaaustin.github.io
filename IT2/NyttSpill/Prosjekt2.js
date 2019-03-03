const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const hdnPoeng = document.getElementById("hdnPoeng");
const hdnRekord = document.getElementById("hdnRekord");
const btnSpiller2 = document.getElementById("btnSpiller2");

let poeng = 0;
let okes = 0;
let okef = 0;
if(localStorage.rekord === undefined){
    localStorage.rekord = 0;
}
hdnRekord.innerHTML = "Rekord: " + localStorage.rekord;
let bakgrunnsfarge = "green";
//let slangekroppene = [slangekropp, ];


let slange1 = {
    bredde:40,
    hoyde:20,
    xpos:60,
    ypos:70,
    farge:"orange",
    xfart:5,
    xretning:1,
    yfart:0,
    yretning:0
};
let slangekropp = {
    bredde:20,
    hoyde:20,
    xpos:60,
    ypos:70,
    farge:"orange",
    xfart:5,
    xretning:1,
    yfart:0,
    yretning:0
};

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
    sjekkKolisjon(slange1);
    kolisjon(slange1,eple1);
    flyttSlange(slange1);
    tegnSlange(slange1);
    tegnEple(eple1);



    requestAnimationFrame(gameLoop);
}




function tegnSlange(slange){
    ctx.fillStyle = slange.farge;
    ctx.fillRect(slange.xpos, slange.ypos, slange.bredde, slange.hoyde);
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
            slange.bredde = 20;
            slange.hoyde = 40;

        }
        else if (e.keyCode == 39 && !(slange.xretning === -1) ){
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 + okef;
            slange.xretning = 1;
            slange.bredde = 40;
            slange.hoyde = 20;
        }
        else if (e.keyCode == 37 && !(slange.xretning === 1)){
            slange.yfart = 0;
            slange.yretning = 0;
            slange.xfart = 5 + okef;
            slange.xretning = -1;
            slange.bredde = 40;
            slange.hoyde = 20;
        }
        else if (e.keyCode == 40 && !(slange.yretning === -1)) {
            console.log('down');
            slange.yfart = 5 + okef;
            slange.xretning = 0;
            slange.yretning = 1;
            slange.xfart = 0;
            slange.bredde = 20;
            slange.hoyde = 40;
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
    slange.bredde = 40;
    slange.hoyde = 20;
    hdnPoeng.innerHTML = "Poeng: " + poeng;
    if(poeng > localStorage.rekord){
        localStorage.rekord = poeng;
        hdnRekord.innerHTML ="Ny rekord: " + poeng;
        hdnRekord.style.color = "DarkGreen";
        poeng = 0;
    }if(poeng < localStorage.rekord){
        poeng = 0;
    }

}
function sjekkKolisjon(slange) {
    if (slange.xpos >= canvas.width-slange.bredde || slange.xpos <= 0 ){
        sjekkSvar(slange1);

    }else if (slange.ypos >= canvas.height-slange.hoyde || slange.ypos <= 0 ){
        sjekkSvar(slange1);

    }

}
function nyttEple(eple){
    poeng++;
    hdnPoeng.innerHTML = "Poeng: " + poeng;
    eple.xpos = Math.random()*1200;
    eple.ypos = Math.random()*600;
    okef+=0.25;
    //slangekroppene.push(slangekropp);
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