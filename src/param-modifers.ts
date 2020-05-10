 
 class Rectangle {

     private _length: number;

     constructor(length: number){
        this._length = length
     }

 }


 class Rectangle2 {

     private _width: number; 
     private _length: number;

     constructor(width: number, lenght: number){
            this._width = width
            this._length = lenght
     }

     public draw(){
        console.log('Drawing a Rect')
     }

     public changeLenght(num){
        this._length = num; 
        console.log('Changing the lenght')
     } 
 }

 const Rect1 = new Rectangle2(5,7)
 const Rect2 = new Rectangle2(4,8)
 const Rect3 = new Rectangle2(4,3)

 Rect1.draw()
