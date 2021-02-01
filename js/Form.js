class Form{
    constructor(){

    }
    display(){
        //display the title
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        //create the text box,button and message to be displayed
        var input=createInput("Name");
        var button=createButton("Play");
        var greeting=createElement('h3');
        input.position(130,160);
        button.position(250,200);
        //what should happen when click the button with the mouse
        button.mousePressed(function(){
            //hide the text box and the button
            input.hide();
            button.hide();
            //get the name entered by the user and store it
            var name=input.value();
            //increase the count for the player by one
            playerCount=playerCount+1;
            //write the name of the player and the player count to the database
            player.update(name);
            player.updateCount(playerCount);
            //display the message for the player
            greeting.html("Hello "+name)
            greeting.position(450,200)
        });
    }
}