var PC, spikes,HPSprite, enemy, gem, gemSprite, TUTORIAL;
var enemy1, enemy2, enemy3;
var BS1, BS2;
var OBJ1, OBJ2, OBJ3, OBJ4;
var game, form, base, music;
var HP = 3;
var jewel, nether, hp1, hp2, hp3;
var gameState = 0;
//0=Start, 1=play, 2=end, 3=tutorial

function preload()
{
  //GFX FOR THE GAME...
  pc = loadImage("sprites/megaman.png");
  spikes = loadImage("sprites/spikes.png");
  storyLine = loadImage("sprites/Storyline.png");
  enemy = loadImage("sprites/enemies.png");
  TUTORIAL = loadImage("sprites/Tutorial.png");
  backgroundNight = loadImage("sprites/night background.jpg");
  backgroundDay = loadImage("sprites/forest day.png");
  gem = loadImage("sprites/GEM.jpg")
  nether = loadImage("sprites/nether.png");
  hp1 = loadImage("sprites/HP1.png");
  hp2 = loadImage("sprites/HP2.png");
  hp3 = loadImage("sprites/HP3.png");
  
  //SOUNDS FXs FOR GAME...
  formSound = loadSound("sprites/FORMSOUND.mp3");
  backgroundSong = loadSound("sprites/Background Game.mp3");
  buttonClick = loadSound("sprites/Button Click.mp3");
  walking = loadSound("sprites/Walking.mp3");

}
function setup() {
  createCanvas(displayWidth, displayHeight);
  music = createButton("MUSIC: ON");
  music.position(displayWidth/2-displayWidth/2.1, displayHeight/2+displayHeight/2.3);
  music.mousePressed(togglePlaying);
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundDay);
 
 if(gameState == 1)
  {
    clear();

    background(backgroundNight);

    //HPSprite = createSprite(displayWidth/10, displayHeight/12, 100, 25);
    //HPSprite.addImage("3HPLeft", hp3);
    //HPSprite.scale = 0.5;

    game.play();

    if(HP == 2) {
    HPSprite.addImage("2HPLeft", hp2);
    }
    else if(HP == 1) {
      HPSprite.addImage("1HPLeft", hp1);
    }
    else if(HP == 0) {
      game.end();
    }
  }
  else if(gameState == 0)
  {
    image(storyLine, displayWidth/6 - 25, displayHeight/6 - 50, 800, 400);
    //formSound.play();
  }
  else if(gameState == 2)
  {
    game.end();
  }
  else if(gameState == 3)
  {
    image(TUTORIAL, displayWidth/6, displayHeight/5, 800, 400);
  }
  else if(gameState == 4)
  {

  }
}

function togglePlaying()
{
  if(!backgroundSong.isPlaying()) {
      backgroundSong.play();
      backgroundSong.setVolume(5);
      
      buttonClick.play();
      buttonClick.setVolume(20);
      buttonClick.rate(1.5);

      music.html('MUSIC: OFF');
} else {
    buttonClick.play();
    buttonClick.setVolume(20);
    buttonClick.rate(1.5);

    backgroundSong.pause();
    
    music.html('MUSIC: ON');
    }
}
