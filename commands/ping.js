module.exports= {
    name: 'ping',
    description: "This is a ping command!",
    execute(message, args){
        //where our code will go when ping gets called

        message.channel.send('pong!');

    }
}
