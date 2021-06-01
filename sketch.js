const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,310,70,70);
    box2 = new Box(920,310,70,70);
    ground = new Ground(600,height,1200,20)
    box3 = new Box(700,220,70,70);
    box4 = new Box(920,220,70,70);
    box5 = new Box(800,130,70,70);
    log1= new Log(810,290,300,PI/2)
    log2= new Log(810,200,300,PI/2)
    log3= new Log(770,100,150,PI/7)
    log4= new Log(850,100,150,-PI/7)
    bird= new Bird(200,200)
    pig1= new Bird(800,310)
    pig2= new Bird(800,220)
}

function draw(){
    background(0);
    Engine.update(engine);
    text("mouseX"+mouseX,50,50)
    text("mouseY"+mouseY,50,60)
    box1.display();
    box2.display();
    box3.display();
   box4.display();
    box5.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    pig1.display();
    pig2.display();
}