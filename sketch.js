
const START=0;
const WAIT=1;
const PLAY=2;
const END=3;
var gameState=START;
 var playerCount=0;
var database;

var game;
var form,player;
var allPlayers=[]

var car1,car2,car3,car4;
var cars=[car1,car2,car3,car4]

function setup() {
  createCanvas(800,400);
 
game= new Game()

database=firebase.database();

game.getGameState();
game.start();
}

function draw() {
  background(255,255,255);  
if(playerCount==4){
game.updateGameState(2);

}
if(gameState==2){
  game.play()
  
}





}