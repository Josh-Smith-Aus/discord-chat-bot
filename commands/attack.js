
// Array list of replies
let replies = ["reply 0", "reply 1", "reply 2"];
// Random number from 0 to 2 for the array index
let random = Math.floor(Math.random()*(replies.length));


module.exports= {
    name: 'attack',
    description: "This is the attack command",
    execute(message, args){
        //where our code will go when ping gets called
        const taggedUser = message.mentions.users.first();
        
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        } else message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }
}
