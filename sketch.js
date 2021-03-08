var canvas;
var music;
var surface1,surface2,surface3,surface4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(700,585,200,30);
    surface1.shapeColor="green";

    surface2=createSprite(470,585,200,30);
    surface2.shapeColor="red";

    surface3=createSprite(240,585,200,30);
    surface3.shapeColor="orange"
    

    surface4=createSprite(10,585,200,30);
    surface4.shapeColor="blue"

    edges=createEdgeSprites();




    //create box sprite and give velocity
    box=createSprite(random(20,750),200,30,30);
    box.velocityX=4;
    box.velocityY=2;
    box.shapeColor="white"


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges);

    



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
      box.shapeColor="green";
      music.play();

    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="red";
        music.play();
        
  
      }

      if(surface3.isTouching(box)){
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
        
        
  
      }

      if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="blue";
        music.play();
        
  
      }
    drawSprites();
}
