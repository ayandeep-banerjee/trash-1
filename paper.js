class Paper {
    constructor(x,y) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.width = 10;
        this.width = 10;
        //console.log(this.body.y);
        

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        
        push() 
        console.log(this.body.y);
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();

    }
    

}