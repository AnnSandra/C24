class Dustbin {

constructor(x,y){

    this.width=300;
    this.height=20;

    var options ={
        isStatic : true
    }
    this.bottom=Bodies.rectangle(x,y,this.width,this.height,options);
    this.leftWall=Bodies.rectangle(x-this.width/2,y-50,20,50,options);
    this.rightWall = Bodies.rectangle(x+this.width/2,y-50,20,50,options);
    
    World.add(world,this.bottom);
    World.add(world,this.leftWall);
    World.add(world,this.rightWall);
   
    
}


display() {
var posLeft= this.leftWall.position;
var posBottom= this.bottom.position;
var posRight= this.rightWall.position;
//var angle= this.body.angle;

push()
rectMode(CENTER);
translate(posLeft.x,posLeft.y);
angleMode(RADIANS)
rotate(PI/2)
//rotate(angle);
fill(255);
rect(0,0,120,20)
pop()


push()
rectMode(CENTER);
translate(posRight.x,posRight.y);
angleMode(RADIANS)
rotate(PI/2)
fill(255);
rect(0,0,120,20)
pop()


push()
rectMode(CENTER);
translate(posBottom.x,posBottom.y);
//rotate(angle);
fill(255);
rect(0,0,this.width,this.height)
pop()



}




}