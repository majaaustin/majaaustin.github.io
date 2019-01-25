var display = document.getElementById('board');
var ctx = display.getContext("2d");
var WIDTH = 1080;
var HEIGHT = 540;
var snakesize = 50;
var offsetX = 0, offsetY = 0;

function init() {
    document.addEventListener("keydown",function(e){
        if (e.keyCode == 38){
            editOffsetY(-11);
            console.log('up');
        }
        else if (e.keyCode == 37){
            editOffsetX(-11);
        }
        else if (e.keyCode == 39){
            editOffsetX(11);
        }
        else if (e.keyCode == 40) {
            editOffsetY(11);
            console.log('down');
        };
    });
    loadImages();
    run();
}

function editOffsetY(dist){
    if ((offsetY+dist+snakesize/2)>HEIGHT/2){
        offsetY -= HEIGHT-snakesize;
    }
    else if (((offsetY+dist-snakesize/2)<-HEIGHT/2)){
        offsetY += HEIGHT-snakesize;
    }
    offsetY += dist;
}

function editOffsetX(dist){
    if ((offsetX+dist+snakesize/2)>WIDTH/2){
        offsetX -= WIDTH-snakesize;
    }
    else if (((offsetX+dist-snakesize/2)<-WIDTH/2)){
        offsetX += WIDTH-snakesize;
    }
    offsetX += dist;
}

function loadImages(){
    return;
}

function draw() {
    ctx.fillStyle = 'rgba(0,0,29,0.2)';
    ctx.fillRect(0,0,WIDTH,HEIGHT);

    drawSnake();
}

function drawSnake() {
    var centerX = (WIDTH - snakesize) / 2;
    var centerY = Math.floor((HEIGHT - snakesize) / 2);

    var posX = centerX + offsetX;
    var posY = centerY + offsetY;
    ctx.fillStyle = "yellow";
    ctx.fillRect(posX, posY, 15, 15);
}

function drawing() {

    ctx.fillStyle = 'rgba(0,0,29,0.2)';
    ctx.fillRect(0,0,WIDTH,HEIGHT);

    drawEple();
}

function drawEple() {

    var posXX = Math.floor(Math.random()*HEIGHT+1);
    var posYY = Math.floor(Math.random()*WIDTH);
    ctx.fillStyle = "red";
    ctx.fillRect(posYY, posXX, 8, 8);
}


        loadImages();





function update(){
    return;
}

function run(){
    update();
    draw();
    drawing();
    window.requestAnimationFrame(run);
}

init();
