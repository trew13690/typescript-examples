class Shape {
    draw() {
    }
}
class Circle extends Shape {
    constructor() {
        super();
        this.circum = 100;
    }
    dimensions() {
        const dim = {
            radius: this.radius,
            circum: 0,
        };
        return dim;
    }
}
const c = new Circle();
c.dimensions();
c.draw();
