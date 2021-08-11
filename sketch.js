var dog,sadDog,happyDog;
var feed
var addFood
var foodObj


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
 // food = new Food()

  var button1 = createButton("Feed Dog")
  button1.position(400, 375)

  var button2 = createButton("Add Food")
  button2.position(600, 375)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
function addFood(){
  button.mousePressed(function(){
    foodStock = foodStock + 1
  })
}
