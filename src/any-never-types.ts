function IDontKnow(): any {

    let whatisThis: any;
    whatisThis = 'Alex'
    whatisThis = 38;
    whatisThis = {};

    // Try not to use any type; Essentialy javascript

}

function keepGoing(): never{
    while(true){

    }
}

function throwMesomeException(err: string): never{
    throw new Error(`Internet Server error: ${err}`)
    
}