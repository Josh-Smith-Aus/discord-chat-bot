module.exports= {
    name: 'addinsult',
    description: "add insult to insult list",
	execute(message, args) {       
     const {insults} = require("C:/Users/joshu/Documents/Discord chat bot/discord-chat-bot/insults.json");

    //create small arrray then push that array to insults.json
    
//take args, put in new array, add spaces, push to insults
        const newInsult = args.join(' ');//insult to string

        insults.push(`${newInsult}`);

    
        message.channel.send(`Added "${newInsult}" to insult list`)

	},
};