

module.exports= {
    name: 'editinsult',
    description: "edits an insult",
	execute(message) {

            async()=>{
            const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');

			// equivalent to: UPDATE tags (descrption) values (?) WHERE name = ?;
			const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
			if (affectedRows > 0) {
				return message.reply(`${tagName} was edited.`);
			}
            return message.reply(`Could not find an insult with name ${tagName}.`);
         
            
        }

    },
};