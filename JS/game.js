class Game{
    constructor(){


    }
getGameState(){
    database.ref("gameState").on("value",function(data){
        gameState=data.val()
    })
}
updateGameState(state){
  database.ref("/").update({
      gameState:state
})  
}    
start(){

    
    if(gameState==0){
        form=new Form();
        player=new Player();
        
        player.getPlayerCount();

        form.display();      

    }

    car1=createSprite(100,200,50,50);
car2=createSprite(200,200,50,50);
car3=createSprite(300,200,50,50);
car4=createSprite(400,200,50,50);


}
play(){
form.hide();
Player.getPlayersInfo();
var i=0
for(var item in allPlayers){
    if(player.index===i+1){
    cars[i].shapeColor="red";
        
    }
    i+=1;
    
}
drawSprites();

if(keyIsDown(UP_ARROW)){
player.distance+=50;
player.updateInfo();

}

}






}