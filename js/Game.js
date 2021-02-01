class Game{
    constructor(){

    }
//read the value of gameState from the database
getState(){
    var gameStateRef=database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState=data.val()
    })
}
//write a new value for the gameState in the database
update(state){
   database.ref('/').update({
       gameState:state
   })
}
start(){
    if(gameState===0){
   player=new Player();
   player.getCount()
   form=new Form();
   form.display()
    }
}
}