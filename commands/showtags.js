const {Tags} = require('../discordbot.js');

module.exports= {
    name: 'showtag',
    description: "shows list of tags",
	execute(message) {


            async () => {
            // equivalent to: SELECT name FROM tags;
			const tagList = await Tags.findAll({ attributes: ['name'] });
			const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
			return message.channel.send(`List of tags: ${tagString}`);
    } 
    

    }
}
