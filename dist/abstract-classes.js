class Shape {
    draw() {
    }
}
class Circle extends Shape {
    constructor() {
        super();
    }
    dimensions() {
        const dim = {
            radius: 0,
            circum: 0,
        };
        return dim;
    }
}
const c = new Circle();
c.dimensions();
c.draw();
