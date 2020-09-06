class Game
{
    constructor()
    {
        
    }
    
    start()
    {
        form = new Form();
        form.display();
    }

    play()
    {
        BS1 = createSprite(displayWidth/2, displayHeight/2+displayHeight/2.3, displayWidth, 10);
        //BS1.addImage("groundImage1", nether);
        //BS1.scale = 0.1;

        BS2 = createSprite(displayWidth/2, displayHeight/2+displayHeight/3, 10, 125);
        //BS2.addImage("groundImage2", nether);
        //BS1.scale = 0.1;

        PC = createSprite(displayWidth/10, displayHeight/2+displayHeight/2.5);
        PC.addImage("playingCharacter", pc);
        PC.scale = 0.1;

        HPSprite = createSprite(displayWidth/10, displayHeight/12, 100, 25);
        HPSprite.addImage("3HPLeft", hp3);
        HPSprite.scale = 0.5;

        enemy1 = createSprite(600, 600);
        enemy1.addImage("enemySprite1", enemy);
        enemy1.scale = 0.1;

        gemSprite = createSprite(displayWidth/2+displayWidth/4, displayHeight/2+displayHeight/2.3);
        gemSprite.addImage("gem", gem);
        gemSprite.scale = 0.2;

        enemy1.depth = PC.depth;
        PC.depth = PC.depth+1;
        
        if(keyIsDown(RIGHT_ARROW))
        {
            PC.velocityX = 10;
        }

        if(keyIsDown(LEFT_ARROW))
        {
            PC.velocityX = -10;
        }

        if(keyIsDown(UP_ARROW))
        {
            PC.velocityY = -10;
        } 


        //CREATING A CONDITION TO LOSE HP
        if(PC.x-enemy1.x <= PC.width/2 + enemy1.width/2) {
            HP = HP - 1;
        }
        
        //Gravity for the game
        PC.y = PC.y + 0.8;

        drawSprites();
    }


    end()
    {
        
    }
    
}
