var garden,rabbit;
var gardenImg,rabbitImg;
var leaf , apple;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit 
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
//moving the rabbit using mouse
rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
spawnApples()
spawnLeaf()
  drawSprites();
  
}

function spawnLeaf(){
  if(frameCount%60 === 0){
leaf = createSprite(Math.round(random(20,390)),0)

  }
}

function spawnApples(){
  if(frameCount%90 === 0){
apple= createSprite()
  }
}
