var ball,database;
var position,ballPosition
function setup(){
database=firebase.database();
createCanvas(400,400);
ball=createSprite(0,0,20,20);
ball.shapeColor="blue";
ballPosition=database.ref("ball/position");
ballPosition.on("value",readPosition,showError);
}
function draw(){
   // background("yellow")
    if(keyDown(LEFT_ARROW)){
     writePosition(-1,0);
    }else
    if(keyDown(RIGHT_ARROW)){
        writePosition(+1,0);
     }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
     } else if(keyDown(UP_ARROW)){
        writePosition(0,-1);   
     }
drawSprites();
}
function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function writePosition(x,y){
    database.ref("ball/position").set({'x':position.x+x,'y':position.y+y});
}

function showError(){
    console.log("Error in fechting in value");
}