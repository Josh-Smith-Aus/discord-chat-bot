const {commandArgs, Tags} = require('../discordbot.js');


module.exports= {
    name: 'tag',
    description: "update tags",
	execute(message) {



			const tagName = commandArgs;
			
			// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
			
			const tag =  Tags.findOne({ where: { name: tagName } });
			if (tag) {
				// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
				tag.increment('usage_count');
				return message.channel.send(tag.get('description'));
			}
			return message.reply(`Could not find tag: ${tagName}`);
		
		
	}
}