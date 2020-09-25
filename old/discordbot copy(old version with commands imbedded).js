//Discord bot main app script//

const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

//collection of commands
client.commands = new Discord.Collection();

//make sure all files we're reading are javascript files
const commandFiles = fs.readdirSync('./commands').filter(file => endsWith('.js'));

//prefix is what the bot will use register youre talking to it, just setting a cosntant here
const prefix = '-';

//loop through files to execute commands
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}




//will tell terminal bot is online
client.once('ready',() => {
    console.log('nippsbot is online!');
});








//checking the messages to see if bot prefix is called
client.on('message', message =>{

    // bot will not start if message starts pefix or author is the bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;


    //allows splicing of message to allow multiple commands after prefix
    const args = message.content.slice(prefix.length).split(/ +/);
   
    //puts commands all in lowercase so you can ignore case
    const command = args.shift().toLowerCase();

    // new command ping returns pong
    if(command === 'ping'){
        message.channel.send('pong!');
        } else if (command == 'hi'){
       message.channel.send('sup');
        }
    
});

// Keep last. Will allow this to update the bot//
// check before starting again because discord will reset code after posted to public github//
client.login('NzU4NjUyOTY2NzgwNjY1ODU2.X2yEog.5OlZVUoffGC20lfjW5brRT8izpg');