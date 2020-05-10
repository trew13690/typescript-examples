interface Dimensions {
    radius: number;
    circum: number;

}


abstract class Shape {
    protected radius: number; 

    abstract dimensions(): Dimensions;

    draw():void {

    }
}

class Circle extends Shape{
    
    
    private readonly circum: number; 
    constructor(){
        super();
        this.circum = 100;
    }

     public dimensions(): Dimensions{
         const dim: Dimensions= {

                radius: this.radius,
                circum: 0, 
         }
        return dim;

    }
}

const c = new Circle()
c.dimensions();
c.draw()
