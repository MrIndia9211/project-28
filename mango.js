class Mango {
    
    constructor(){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1
            
        }
        this.mango1=Bodies.rectangle(800,300,18,90,options)
        this.image = loadImage("mango.png");
        this.mango2=Bodies.rectangle(800,380,18,70,options)
        this.image = loadImage("mango.png");
        this.mango3=Bodies.rectangle(730,390,18,70,options)
        this.image = loadImage("mango.png");
        this.mango4=Bodies.rectangle(850,380,15,18,options)
        this.image = loadImage("mango.png");
        this.mango5=Bodies.rectangle(790,440,10,18,options)
        this.image = loadImage("mango.png");
        World.add(world,this.mango1)
        World.add(world,this.mango2)
        World.add(world,this.mango3)
        }
        
    display(){
        imageMode(CENTER);
       
        
        image(this.image,this.mango1.position.x,this.mango1.position.y,20,50)
        image(this.image,this.mango2.position.x,this.mango2.position.y,20,50)
        image(this.image,this.mango3.position.x,this.mango3.position.y,20,50)
        image(this.image,this.mango4.position.x,this.mango4.position.y,20,50)
        image(this.image,this.mango5.position.x,this.mango5.position.y,20,50)

        }
}