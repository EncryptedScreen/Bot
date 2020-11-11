const Discord = require("discord.js");
const client = new Discord.Client();

const token = "Nzc0NjgxMzI4MzAxMzc1NDg4.X6bUNQ.3Npbc9ePKdj_HFF2ux1PL9exkeM";

const Prefix = "!";

client.on("ready", () =>{
    console.log("Bot is online");

})

client.on("message", message=>{

    let args = message.content.substring(Prefix.length).split(" ")
    
    switch(args[0]){
        case "help":
            message.reply("Use the prefix ! to clear"
            }
            break;
            case "clear":
            if(!args[1]) return message.reply("Define numbers")
            message.channel.bulkDelete(args[1]);
            break;
    }
})

client.login(token);


