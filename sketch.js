var canvas,backgroundImg,gameState = 0;
var playerCount,allPlayers,distance=0;
var database,form,player,game;
var car1,car2,car3,car4;
var cars;

function setup(){

    canvas = createCanvas(displayWidth-300,displayHeight-300);
    console.log(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

    
 
}
function draw(){

    
    if(playerCount===4){
        game.update(1);
     }
     if(gameState === 1){
         clear();
         game.play();
     }

}