class Rectangle {
    constructor(length) {
        this._length = length;
    }
}
class Rectangle2 {
    constructor(width, lenght) {
        this._width = width;
        this._length = lenght;
    }
    draw() {
        console.log('Drawing a Rect');
    }
    changeLenght(num) {
        this._length = num;
        console.log('Changing the lenght');
    }
}
const Rect1 = new Rectangle2(5, 7);
const Rect2 = new Rectangle2(4, 8);
const Rect3 = new Rectangle2(4, 3);
Rect1.draw();
