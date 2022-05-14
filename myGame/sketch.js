var phineas, ferb;
var pancake, fries;
var table, bg;
var friesGroup, pancakeGroup;
var score = 0;
var life = 3;
var x = 1;
var bgMusic;
var initialSetUp = true;
var play = false;
var win = false;
function preload()
{
  phineasImg = loadImage("phineas.png")
  phineas2Img = loadImage("phineas2.png")
 // ferbImg = loadImage("ferb.png")
  pancakeImg = loadImage("pancake.png")
  friesImg = loadImage("fries.png")
  tableImg = loadImage("table.png")
  bgImg = loadImage("bg.jpg")
  isabellaImg = loadImage("isabella.png")
  isabella2Img = loadImage("isabella2.png")
  restartImg = loadImage("restart.png")
  winImg = loadImage("win.png")
  loseImg = loadImage("lose.png")
  startImg = loadImage("start.png")

  bgSound = loadSound("Subway-Surfers-theme-song.mp3")
  eatSound = loadSound("eat.mp3")
  winSound = loadSound("win.mp3")
  loseSound = loadSound("losee.wav")

  friesGroup = new Group();
  pancakeGroup = new Group();
}
 
function setup() {
    createCanvas(windowWidth,windowHeight);
    bgSound.play()
    table = createSprite(600,450,60,60)
    table.scale = 0.4
    table.addImage(tableImg)

    phineas = createSprite(415,355,50,50)
    phineas.addImage(phineasImg)
    phineas.scale = 0.6
    phineas.setCollider("circle",0,-40,30)
    phineas.debug = false;

    isabella = createSprite(805,340,50,50)
    isabella.addImage(isabellaImg)
    isabella.scale = 0.3
    isabella.setCollider("circle",0,-140,60)
    isabella.debug = false;

   restart = createSprite(windowWidth - 295, 35)
   restart.addImage(restartImg)
   restart.scale = 0.03

   start = createSprite(windowWidth/2, 100)
   start.addImage(startImg)
   start.scale = 0.15

   win = createSprite(windowWidth/2, 100)
   win.addImage(winImg)
   win.scale = 0.45
   win.visible = false;

   lose = createSprite(windowWidth/2, 100)
   lose.addImage(loseImg)
   lose.scale = 0.47
   lose.visible = false;
}
 
 
function draw() {
  background(bgImg);

  textSize(25)
  fill(0)
  strokeWeight(2.5)
  stroke(255)
  text("Instructions:",windowWidth - 1250, 95)

  textSize(15)
  fill(0)
  text("* In order to move fries, press left/right arrow key",windowWidth -1260,120)
  text("* In order to move pancake, press numeric 1 or 2 from the keyboard",windowWidth -1260,145)


  textSize(25)
  fill(0)
  text("Rules:",windowWidth - 265, 510)

  textSize(15)
  fill(0)
  text("* Feed Phineas only fries",windowWidth - 275, 535)
  text("* Feed Isabella only pancake",windowWidth - 275,560)


  textSize(40)
  fill("magenta")
  strokeWeight(5)
  stroke(255)
  text("Score:" + score, windowWidth - 250, 50)
  text("Life:" + life, windowWidth - 1250, 50)

if(play == false){
  start.visible = true;

  if(mousePressedOver(start)){
    play = true;
  }
}

if(play == true){ 
win.visible = false;
lose.visible = false;
start.visible = false;
spawnFries()
spawnPancake()
mousePressed()}


if(friesGroup.isTouching(phineas)){

  if(initialSetUp == true){
    score += 10;
    eatSound.play()
  }
    else{
    score -= 10  
    life -= 1;
    }
  
  for(var j = 0; j < friesGroup.length; j++){
    if(friesGroup[j].isTouching(phineas)){
      friesGroup[j].destroy();
    }
  }
}

if(pancakeGroup.isTouching(isabella)){

  if(initialSetUp == true){
    score += 10;
    eatSound.play()
  }
    else{
    score -= 10  
    life -= 1;
    }
  eatSound.play()
  
for(var j = 0; j < pancakeGroup.length; j++){
  if(pancakeGroup[j].isTouching(isabella)){
    pancakeGroup[j].destroy();
  }
}
}

if(friesGroup.isTouching(isabella)){

  if(initialSetUp == true){
    score -= 10;
    life -= 1;}
    else{
    score += 10
    eatSound.play()
  
    }
  for(var j = 0; j < friesGroup.length; j++){
    if(friesGroup[j].isTouching(isabella)){
      friesGroup[j].destroy();
    }
  }
}

if(pancakeGroup.isTouching(phineas)){

  if(initialSetUp == true){
  score -= 10;
  life -= 1;}
  else{
  score += 10 
  eatSound.play()
 
  }
for(var j = 0; j < pancakeGroup.length; j++){
  if(pancakeGroup[j].isTouching(phineas)){
    pancakeGroup[j].destroy();
  }
}
}

if(score >= 80 && score % 40 == 0){
  if(score % 80 != 0){

  initialSetUp =  false;

  phineas.addImage(isabella2Img)
  phineas.changeImage(isabella2Img)
  phineas.y = 340;
  phineas.scale = 0.3
  phineas.setCollider("circle",0,-140,60)
  phineas.debug = false;

  isabella.addImage(phineas2Img)
  isabella.changeImage(phineas2Img)
  isabella.y = 355;
  isabella.scale = 0.6
  isabella.setCollider("circle",0,-40,30)
  isabella.debug = false;}

  else {
    initialSetUp =  true;

  isabella.addImage(isabellaImg)
  isabella.changeImage(isabellaImg)
  isabella.y = 340;
  isabella.scale = 0.3
  isabella.setCollider("circle",0,-140,60)
  isabella.debug = false;

  phineas.addImage(phineasImg)
  phineas.changeImage(phineasImg)
  phineas.y = 355;
  phineas.scale = 0.6
  phineas.setCollider("circle",0,-40,30)
  phineas.debug = false;


  }}


  if(score >= 160 && score % 20 == 0){
    if(score % 40 != 0){
  
    initialSetUp =  false;
  
    phineas.addImage(isabella2Img)
    phineas.changeImage(isabella2Img)
    phineas.y = 340;
    phineas.scale = 0.3
    phineas.setCollider("circle",0,-140,60)
    phineas.debug = false;
  
    isabella.addImage(phineas2Img)
    isabella.changeImage(phineas2Img)
    isabella.y = 355;
    isabella.scale = 0.6
    isabella.setCollider("circle",0,-40,30)
    isabella.debug = false;}
  
    else {
      initialSetUp =  true;
  
    isabella.addImage(isabellaImg)
    isabella.changeImage(isabellaImg)
    isabella.y = 340;
    isabella.scale = 0.3
    isabella.setCollider("circle",0,-140,60)
    isabella.debug = false;
  
    phineas.addImage(phineasImg)
    phineas.changeImage(phineasImg)
    phineas.y = 355;
    phineas.scale = 0.6
    phineas.setCollider("circle",0,-40,30)
    phineas.debug = false;
  
  
    }}

 if(score == 400){ 
   play = false;
   win.visible = true;
  winSound.play()
  score = 0
 }

 if(life == 0){
   play = false;
   lose.visible = true;
  loseSound.play()
  life = null
 }

  if(mousePressedOver(restart)){
    play = true;
    score = 0; 
    life = 3;
  }

drawSprites();
}
 


function spawnFries(){
  if(frameCount % 100 == 0){
  x = random(500,620)
  fries = createSprite(x,330)
  fries.addImage(friesImg)
  fries.scale = 0.02;
  fries.lifetime = 100;
  friesGroup.add(fries)
}
}

function spawnPancake(){
  if(frameCount % 100 == 0){
    x = random(600,750)
    pancake = createSprite(x,320,30,30)
    pancake.addImage(pancakeImg)
    pancake.scale = 0.09
    pancake.lifetime = 100
    pancakeGroup.add(pancake)
  }
}

function mousePressed(){
  if(keyDown("RIGHT_ARROW")){
    for(var i = 0; i < friesGroup.length; i++){
    
        friesGroup[i].velocityX = 5;
      
    }
  }

  if(keyDown("LEFT_ARROW")){
    for(var i = 0; i < friesGroup.length; i++){
    
        friesGroup[i].velocityX = -5;
      
    }
  }


  if(keyDown("2")){
    for(var i = 0; i < pancakeGroup.length; i++){
    
        
      pancakeGroup[i].velocityX = 5;
      
    }
  }

  if(keyDown("1"))
  {
    for(var i = 0; i < pancakeGroup.length; i++){
    
        pancakeGroup[i].velocityX = -5;
      
    }
  }
}

