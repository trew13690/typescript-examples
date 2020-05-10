
type arr = Array<number>

const last = <T>(arr: Array<T>) => {
    return arr[arr.length -1 ]
}


const l = last([1,2,3]); 
const l2 = last<string>(['a', 'b', 'c'])


const makeArr =  <X, Y = number>(x: X, y: Y): [X,Y] => {

    return [x, y]; 
    
}

const v = makeArr(5, 6)
const v2 = makeArr("a", "b");
const v3 = makeArr("a", 5);
const v4 = makeArr<string | null> ("a", 5)