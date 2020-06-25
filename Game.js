class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
        }
    start(){
        //console.log("start");
        form.hide();
        background(128)
        //this.keyPressed();
        drawSprites();
        this.play();
    }

    play(){
        Player.getPlayerInfo();
    
        if(allPlayers !== undefined){
          console.log("play")
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 175 ;
          var y = 150 ;
    
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = displayWidth - allPlayers[plr].position.x;
            //use data form the database to display the cars in y direction
            y = displayHeight - allPlayers[plr].position.y;
           // console.log(index, player.index)
    
           console.log("50")
            if (index === player1.index){
                if(keyIsDown(UP_ARROW) && player1.index !== null){
                    console.log("65")
                    //fighter1.y = fighter1.y - 2
                    var distanceUp = fighter1.y - 2
                    player1.updatePosition(600, distanceUp);
                }
            }
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
        /*console.log("63"+ player1.index)
        if(keyIsDown(UP_ARROW) && player1.index !== null){
            console.log("65")
            //fighter1.y = fighter1.y - 2
            var distanceUp = fighter1.y - 2
            player1.updatePosition(600, distanceUp);
        }

        if(keyIsDown(DOWN_ARROW) && player1.index !== null){
            //fighter1.y = fighter1.y + 2
            var distanceDown = fighter1.y + 2
            player1.updatePosition(600, distanceDown);
        }

        if(keyIsDown(LEFT_ARROW) && player1.index !== null){
            //fighter1.x = fighter1.x - 2
            var distanceLeft = fighter1.x - 2
            player1.updatePosition(distanceLeft, 350);
        }

        if(keyIsDown(RIGHT_ARROW) && player1.index !== null){
            //fighter1.x = fighter1.x + 2
            var distanceRight = fighter1.x + 2
            player1.updatePosition(distanceRight, 350);
        }*/
    }

    //keyPressed(){
    //    if(keyCode === 87){
    //        fighter1.velocity.y = -5
    //    }
    //    if(keyCode === 83){
    //        fighter1.velocity.y = 5
    //    }
    //    if(keyCode === 65){
    //        fighter1.velocity.x = -5
    //    }
    //    if(keyCode === 68){
    //       fighter1.velocity.x = 5
    //  }
    //}
    }
