class RainDrop{
    constructor(x,y,width,height){
        var options = {
            'restitution': 1.0,
            'friction':0.001

        }
        this.body = Bodies.rectangle(x,y,width,height,options);

        this.image = loadImage("raindrop.png");

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }

     display(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}