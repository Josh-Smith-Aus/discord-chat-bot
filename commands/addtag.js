const {tagDescription, Tags, tagName} = require('../discordbot.js');



module.exports= {
    name: 'addtag',
    description: "adds tag to database",
	execute(message) {




			async () => {
				try {
					// equivalent to: INSERT INTO tags (name, descrption, username) values (?, ?, ?);
					const tag = await Tags.create({
						name: tagName,
						description: tagDescription,
						username: message.author.username,
					});
					return message.reply(`Tag ${tag.name} added.`);
				} catch (e) {
					if (e.name === 'SequelizeUniqueConstraintError') {
						return message.reply('That tag already exists.');
					}
					return message.reply('Something went wrong with adding a tag.');
				}
		}	
	}
}