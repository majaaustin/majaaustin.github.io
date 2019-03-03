var display = document.getElementById('board');
var ctx = display.getContext("2d");
var WIDTH = 1080;
var HEIGHT = 540;
var snakesize = 50;
var offsetX = 0, offsetY = 0;
var apples = [];
var maxNumOfApples = 1;
var appleSize = 8;
var score = 0;

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
	if (apples.length < maxNumOfApples) {
	    var posXX = Math.floor(Math.random()*WIDTH);
	    var posYY = Math.floor(Math.random()*HEIGHT+1);
	    apples.push([posXX, posYY]);
	}
	
	ctx.fillStyle = "red";
	for (var i=0; i < apples.length; i++){
		ctx.fillRect(apples[i][0], apples[i][1], appleSize, appleSize);
	}
}

function checkEatingApple() {
	var centerX = (WIDTH - snakesize) / 2;
    var centerY = Math.floor((HEIGHT - snakesize) / 2);

    var posX = centerX + offsetX;
    var posY = centerY + offsetY;

    var snakeCorners = [[posX, posY], [posX, posY + 15], [posX + 15, posY], [posX + 15, posY + 15]];
    for (var i=0; i < apples.length; i++) {
    	for (var j=0; j < snakeCorners.length; j++) {
    		var apple = apples[i];
    		var corner = snakeCorners[j];
    		//console.log(apple[0] < corner[0] && corner[0] < apple[0] + appleSize);
    		//console.log(apple[1] < corner[1] && corner[1] < apple[1] + appleSize);	
    		if (apple[0] < corner[0] && corner[0] < apple[0] + appleSize && apple[1] < corner[1] && corner[1] < apple[1] + appleSize){
    			score++;
    			console.log(score);
    			apples.splice(i,1);
    			break;
    		}
    	}
    }
}
var n = 0;
function update(){
	if (n<10){
		checkEatingApple();
		//n++;
	}
	return;
}

function run(){
    update();
    draw();
    drawing();
    window.requestAnimationFrame(run);
}

init();
//