var allPlayers
var database;
var gameState=0,playerCount=0;
var form,player,game
var cars,car1,car2,car3,car4

function preload(){
track=loadImage("images/track.jpg")
car1_img=loadImage("images/car1.png")
car2_img=loadImage("images/car2.png")
car3_img=loadImage("images/car3.png")
car4_img=loadImage("images/car4.png")
ground=loadImage("images/ground.png")





}


function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-20);
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
    if(gameState===2){
        game.end()
    }
}
