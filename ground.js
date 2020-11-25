class Ground {
    constructor(x,y) {
        var options = {
            'isStatic':true,
        }
        this.body = Bodies.rectangle(x,y,width,20,options);
        var ground = createSprite(x,y,width,20);
        ground.shapeColor=color('yellow');

        World.add(world, this.body)
        
    }

    display() {
        var pos = this.body.poisition;
        push()
        rectMode(CENTER);
        rect(this.body.x,this.body.y,width,20);
        pop()
    }
}