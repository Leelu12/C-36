class Player{
    constructor(){

    }
    //readthe value of playercount from the database
     getCount(){
         var playerCountRef=database.ref('playerCount')
         playerCountRef.on("value",function(data){
        playerCount=data.val()
         })
     }
     //writing a new value for the playerCount inside the database
     updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
     }
     //write the name of the player inside the database
     update(name){
         var playerIndex="player"+playerCount;
         database.ref(playerIndex).set({
             name:name
         })
     }
}
