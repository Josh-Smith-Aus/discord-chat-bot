//Discord bot main app script//

const Discord = require('discord.js');

//grabbing prefix and token form json file so we can use here later and change easily in other file
//could use 'const config = ...' then later use config.prefix but this is easier
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


//loop through files to execute commands
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//will tell terminal bot is online
client.once('ready',() => {
    console.log('nippsbot is online!');
});


client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    if(command === 'attack'){
        client.commands.get('attack').execute(message, args);
    }
    
});

// Keep last. Will allow this to update the bot//
// check before starting again because discord will reset code after posted to public github//
client.login(token);