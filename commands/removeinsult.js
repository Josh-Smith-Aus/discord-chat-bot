

module.exports= {
    name: 'removeinsult',
    description: "removes an insult",
	execute(message) {


    // equivalent to: DELETE from tags WHERE name = ?;
    async()=>{
    const tagName = commandArgs;
    const rowCount = await Tags.destroy({ where: { name: tagName } });
    if (!rowCount) return message.reply('That insult did not exist.');

    return message.reply('Insult deleted.');
        }
    },
};
