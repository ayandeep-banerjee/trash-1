class Dustbin {
    constructor(x,y)  {
        rectMode(CENTER);
        var line1=createSprite(x-60,y,20,80);
        line1.body=Bodies.rectangle(x-60,y,10,40);
        
        
        World.add(world,line1.body);

        var line2=createSprite(x+60,y,20,80);
        line2.body=Bodies.rectangle(x+60,y,20,80);
        World.add(world, line2.body);

        var line3=createSprite(x,y+30,120,20);
        line3.body=Bodies.rectangle(x,y+30,120,20);
        World.add(world, line3.body);

    }
    display() {
        push()

        pop()

    }
}