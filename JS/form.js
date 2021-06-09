class Form{
    constructor(){
this.title=createElement("h1")
this.input=createInput("Enter Your Name")
this.button=createButton("PLAY")
this.greeting=createElement("h2")

    }
display(){
 this.title.html("Car Racing Game")   

 this.title.position(150,50)

this.input.position(180,150);

this.button.position(180,200);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    
    playerCount+=1;
player.updatePlayerCount(playerCount);
player.index=playerCount

player.name=this.input.value();    
player.updateInfo();
this.greeting.html("Hello"+player.name);
this.greeting.position(150,100);

})

}
hide(){

    this.title.hide();
    this.input.hide();
    this.button.hide();
    this.greeting.hide();    

}
}