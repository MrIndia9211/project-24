	    class Box {
    
        constructor(){
            this.bin1=Bodies.rectangle(620,680,150,18,{isStatic:true})
            this.bin2=Bodies.rectangle(540,625,18,70,{isStatic:true})
            this.bin3=Bodies.rectangle(700,625,18,70,{isStatic:true})
            World.add(world,this.bin1)
            World.add(world,this.bin2)
            World.add(world,this.bin3)
            }
            
        display(){
            rectMode(CENTER);
           
            fill("green");
            rect(this.bin1.position.x,this.bin1.position.y,200,20)
            rect(this.bin2.position.x,this.bin2.position.y,20,100)
            rect(this.bin3.position.x,this.bin3.position.y,20,100)
            }
    }