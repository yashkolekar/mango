class stone{
    constructor(x,y,width,height){
        var opt={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
this.body=Bodies.rectangle(x,y,width,height,opt)
this.width=width
this.height=height
World.add(world,this.body)

    }
    display(){
      push()
var stonepos=this.body.position;
translate(stonepos.x,stonepos.y)
rectMode(CENTER)
rect(stonepos.x,stonepos.y,width,height)
pop()
    }
}