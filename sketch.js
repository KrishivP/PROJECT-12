var runner, road, invisibleBoundary1, invisibleBoundary2, roadImage, runnerAnimation;

function preload(){
  //pre-load images
  roadImage = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png"); 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200, 200);
  road.addImage(roadImage);
  invisibleBoundary1 = createSprite(60, 200, 20, 400);
  invisibleBoundary1.visible = false;
  invisibleBoundary2 = createSprite(340, 200, 20, 400);
  invisibleBoundary2.visible = false;
  runner = createSprite(305, 350, 25, 100);
  runner.addAnimation("running", runnerAnimation);
  runner.scale = 0.05;
}

function draw() {
  background(0);

  //creating an infinite road
  road.velocityY = 10;
  if (road.y > 450) {
    road.y = height/2;
  }

  //setting the x pos of runner to x pos of mouse
  runner.x = mouseX;

  //making the runner collide with the invisible boundary
  runner.collide(invisibleBoundary1);
  runner.collide(invisibleBoundary2);

  //fixing bugs
  if (mouseX < 111.675) {
    runner.x = 111.675;
  }
  if (mouseX > 288.324) {
    runner.x = 288.324;
  }

  drawSprites();
}


