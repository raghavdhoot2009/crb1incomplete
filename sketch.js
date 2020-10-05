
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperIMG,paper;

function Preload(){
	paperIMG.loadImage(paper.png);
}

function setup() {
createCanvas(800, 700);


engine = Engine.create();
world = engine.world;



//Create the Bodies Here.

Paper=Matter.Bodies.circle(100,600,4);
paper.shapeColor=color(255,0,255);

groundSprite=createSprite(width/2, height-35, width,10);
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );


boxPosition=width/2 + 100 
boxY=610; 
boxleftSprite=createSprite(boxPosition, boxY, 20,100);
boxleftSprite.shapeColor=color(255);
boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
World.add(world, boxLeftBody);
boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
boxBase.shapeColor=color(255);
boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
World.add(world, boxBottomBody); 
boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100); 
boxleftSprite.shapeColor=color(255); 
boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
World.add(world, boxRightBody)
Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);

  
drawSprites();
 
}