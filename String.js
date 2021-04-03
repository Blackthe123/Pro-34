class Chain{
    constructor(bodyA, bodyB, offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.3,
            length:200,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.chain=Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        var point1X = pointA.x;
        var point1Y = pointA.y;
        var point2X = pointB.x+this.offsetX;
        var point2Y = pointB.y+this.offsetY;

        line(point1X,point1Y,point2X,point2Y);
        
    }

}