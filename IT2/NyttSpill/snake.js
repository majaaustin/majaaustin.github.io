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
    var centerX = (WIDTH-snakesize)/2;
    var centerY = Math.floor((HEIGHT-snakesize)/2);

    var posX = centerX + offsetX;
    var posY = centerY + offsetY;
    ctx.fillStyle = "yellow";
    document.addEventListener("keydown",function(e){
    if (e.keyCode == 38 || e.keyCode == 40) {
        ctx.fillRect(posX, posY, -15, 30);

    }else if( e.keyCode == 37 || e.keyCode == 39) {
        ctx.fillRect(posX, posY, -30, 15);
    }

        loadImages();
    });


}

function update(){
    return;
}

function run(){
    update();
    draw();
    window.requestAnimationFrame(run);
}

init();
