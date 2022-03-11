//Snow simulation

var multiEnemy=[];
var enemy;
var player=new PlayerCircle()


function Enemy(x,vel){
  this.collide=function(){
     if(this.y==player.y & x==player.x)
     {
      return true 
     }else{
      return false 
     }
  }
  this.y=20;
this.rain= function(){
    this.y+=vel
  }
  this.offScreen=function(){
     if(this.y>=600){
      return true
     }else{
      return false 
     }
  }
  this.show=function (){
    noStroke();
    fill(255)
    ellipse(x,this.y,10,10)
  }
}
  
function PlayerCircle(){

  this.x=300
  this.y=420
  this.Show=function(){
    noStroke();
    fill(0);
    rect(this.x,this.y,50,50);
  }   
  this.right=function()
  {
    this.x+=10;
  }
  this.left=function(){
  this.x-=10;
  }
}

function setup() {
  enemy=new Enemy();
  createCanvas(600, 600);
}

function keyPressed(){
  if(key=='ArrowRight'){
    player.right();
    //console.log('hi')
}
  if(key=='ArrowLeft'){  
    player.left();  
  }

}

function draw() {
  background(100);
  if(random(1)<5){
      multiEnemy.push(new Enemy(random(30,570),random(3,7)))

  }

  for(var i=0; i<multiEnemy.length; i++){
    multiEnemy[i].show();
    multiEnemy[i].rain();
    if(multiEnemy[i].offScreen()){
      multiEnemy.splice(i,1) 
    }

  if(multiEnemy[i].collide()){
    console.log('Hit') 
  }
    }

}