
class Ground {
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        var options ={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world, this.body);
    }

    display(){

        var pos= this.body.position;
        var angle= this.body.angle;
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        
        rect(0,0,this.width,this.height);
        pop();
    }



}