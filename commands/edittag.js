const {tagDescription, tagName, Tags} = require('../discordbot.js');

module.exports= {
    name: 'edittag',
    description: "edits tag in database",
	execute(message) {



 

			async () => {
			// equivalent to: UPDATE tags (descrption) values (?) WHERE name = ?;
			const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
			if (affectedRows > 0) {
				return message.reply(`Tag ${tagName} was edited.`);
			}
			return message.reply(`Could not find a tag with name ${tagName}.`);
		 
	}
	}
}