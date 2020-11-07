const {commandArgs, Tags} = require('../discordbot.js');
module.exports= {
    name: 'taginfo',
    description: "shows tag info",
	execute(message) {


		
				const tagName = commandArgs;
				async () => {
				// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
				const tag = await Tags.findOne({ where: { name: tagName } });
				if (tag) {
					return message.channel.send(`${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
				}
				return message.reply(`Could not find tag: ${tagName}`);
		
		}

	}
}