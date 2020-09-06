class Form
{
    constructor()
    {
        this.start = createButton('START');
        this.tutorial = createButton('HOW TO PLAY');
        this.back = createButton('⬅BACK');
    }

    hide()
    {
        this.start.hide();
        this.tutorial.hide();
        this.story.hide();
    }

    display()
    {
        this.start.position(displayWidth/2, displayHeight/2+displayHeight/4);
        this.tutorial.position(displayWidth/2-25, displayHeight/2+displayHeight/4+50);
        this.back.position(25, 20);
        this.start.mousePressed(() =>
        {
            buttonClick.play();
            buttonClick.setVolume(20);
            buttonClick.rate(1.5);
            this.start.hide();
            this.tutorial.hide();
            this.back.hide();
            gameState = 1;
            game.play();
        })
        
        this.tutorial.mousePressed(() => 
        {
            buttonClick.play();
            buttonClick.setVolume(20);
            buttonClick.rate(1.5);
            this.start.hide();
            this.tutorial.hide();
            gameState = 3;
        })
        
        this.back.mousePressed(() => 
        {
            buttonClick.play();
            buttonClick.setVolume(20);
            buttonClick.rate(1.5);
            form = new Form();
            form.display();
            gameState = 0;
        })

    }
}