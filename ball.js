class Ball{
    constructor(x, y, r){
        var options = {
            
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8

        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r/2, options);

        World.add(world, this.body);
    }

      
        display(){
		    var paperpos=this.body.position;		

		    push()
            translate(paperpos.x, paperpos.y);
            fill(168,0,142)
		    ellipseMode(CENTER)
            ellipse(0,0,this.r, this.r);
		    pop()
			
	}
    
}