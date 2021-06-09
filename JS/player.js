class Player{
    constructor(){
this.name=null
this.distance=0
this.index=null


    }
getPlayerCount(){
database.ref("playerCount").on("value",(data)=>{
playerCount=data.val();
})}


updatePlayerCount(count){
database.ref("/").update({
playerCount:count

})

}
updateInfo(){
var playerRef="players/player"+player.index 
database.ref(playerRef).set({
name:this.name,
distance:this.distance
})

}
static getPlayersInfo(){
       database.ref("players").on("value",(data)=>{
       allPlayers=data.val();

})


}




}
