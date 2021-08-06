var garden,rabbit;
var gardenImg,rabbitImg;
var apples;
var appleImg;
var leaf, orangeLeaf, leafImg, orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);




//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 === 0) {
    if (select_sprites == 1) {
      createApples();
    }
    else if (select_sprites == 2) {
      createOrangeLeaf();
    }
    else {
      createLeaf();
   }
  }
  console.log(select_sprites);
  drawSprites();
}

function createApples() {
  apples = createSprite(random(50, 350), 40, 10, 10);
  apples.addImage(appleImg);
  apples.scale = 0.1;
  apples.velocityY = 3;
  apples.lifetime = 200;    
}

function createLeaf() {
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 3;
  leaf.lifetime = 200;
}

function createOrangeLeaf() {
  orangeLeaf = createSprite(random(50, 350), 40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.1;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 200;
}