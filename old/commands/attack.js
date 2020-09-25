
// Array list of replies
let replies = ["reply 0", "reply 1", "reply 2"];
// Random number from 0 to 2 for the array index
let random = Math.floor(Math.random()*(replies.length));


module.exports= {
    name: 'attack',
    description: "This is the attack command",
    execute(message){
        //where our code will go when ping gets called
        
        if(message.author.id === (305289523619692544))  {
           // message.react(':face_with_symbols_over_mouth:');
           message.send('working?')
            
            }
    }
}



// danbot id = 758541415788707840