module.exports= {
    name: 'attack',
    description: "This is the attack command",
    execute(message){
        //where our code will go when ping gets called
        client.on('message', message => {
            if(message.author.id === (305289523619692544))  {
                // message.react(':face_with_symbols_over_mouth:');
                message.send('working?')
        
            }
        });

    }
}



// danbot id = 758541415788707840//trying new stuff

/*
        if(message.author.id === (305289523619692544))  {
           // message.react(':face_with_symbols_over_mouth:');
           message.send('working?')
            
            }

*/