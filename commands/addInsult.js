const { MessageManager } = require('discord.js');

module.exports= {
    name: 'addinsult',
    description: "add insult to insult list",
	execute(message, args) {       
     
  //       //old insults stuff
   /*      
        const {insults} = require("C:/Users/joshu/Documents/Discord chat bot/discord-chat-bot/insults.json");
         //take args, put in new array, add spaces, push to insults
         //only pushes loccally, need to use sql
         const newInsult = args.join(' ');//insult to string

         insults.push(`${newInsult}`);

         message.channel.send(`Added "${newInsult}" to insult list(currently not working)`)

     */    //create small arrray then push that array to insults.json
   

const Sequelize = require('sequelize'); //sql database 
async() =>{

//new stuff 
const splitArgs = commandArgs.split(' ');
const tagName = splitArgs.shift();
const tagDescription = splitArgs.join(' ');

try {
    // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
    const tag = await Tags.create({
        Insult: tagName,
    });
    return message.reply(`Insult ${tag.name} added.`);
}
catch (e) {
    if (e.name === 'SequelizeUniqueConstraintError') {
        return message.reply('That insult already exists.');
    }
    return message.reply('Something went wrong with adding that insult.');


}
}
   
   
   
    












    
	},
};

//https://discordjs.guide/sequelize/#a-simple-tag-system for database tutorial