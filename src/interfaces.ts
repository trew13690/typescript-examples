interface IShape{
    type: string;
    height?: number;
    width?: number;
    draw: () => void; 

}


function drawShape(s: IShape): void{


}





class NewSquare implements IShape{
    public type: string;
    public height: number;
    public width: number; 
    
    public draw(): void {
        console.log('Whats up ')
    }
}