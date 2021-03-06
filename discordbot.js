const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const {Tags} = require('../database.js');
const { userInfo } = require('os');
const {victim1, victim2 } = require('./attackee-id');
const victim = victim1 //my id is victim1 for test and danbot is victim2
const {insults} = require('./insults.json');
//["go away", "you're not welcome here", "you smell", "on your way", "maybe it's time you leave this place", "a good bot would have more respect for themselves","... i have no words for how much you suck"];

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();


client.once('ready', () => { //may need to run async before running code for databse in different file
	console.log('nippsbot is online!');
	Tags.sync();
});


//main command code, copied from discord tute
client.on('message', async message => {
//database stuff
	const input = message.content.slice(prefix.length).trim().split(' ');
	const commandArgs = input.join(' ');
	const splitArgs = commandArgs.split(' ');
	const tagName = splitArgs.shift();
	const tagDescription = splitArgs.join(' ');
	
	

//normal stuff
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	
	if (!command) return;


	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

	// if danbot then attack with random insult

	if (message.author.id === victim) {
		function getRandomIntInclusive(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  }
		var randomInsult =insults[getRandomIntInclusive(0,insults.length-1)];
//			message.channel.send(randomInsult);
	

	}

});





client.login(token);












































/*   old code

//Discord bot main app script//

const Discord = require('discord.js');

//grabbing prefix and token form json file so we can use here later and change easily in other file
//could use 'const config = ...' then later use config.prefix but this is easier
const { prefix, token } = require('./config.json');

const fs = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


//loop through files to execute commands
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


const cooldowns = new Discord.Collection();

//will tell terminal bot is online
client.once('ready',() => {
    console.log('nippsbot is online!');
});


client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);
    
    if (command.args && !args.length) {
        	return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    
});

// Keep last. Will allow this to update the bot//
// check before starting again because discord will reset code after posted to public github//
client.login(token);


*/