const {commandArgs, Tags} = require('../discordbot.js');

module.exports= {
    name: 'removetag',
    description: "removes a tag",
	execute(message) {
        
        async () =>{
        // equivalent to: DELETE from tags WHERE name = ?;
        const tagName = commandArgs;
        const rowCount = await Tags.destroy({ where: { name: tagName } });
        if (!rowCount) return message.reply('That tag did not exist.');

        return message.reply('Tag deleted.');

        }
    }
}