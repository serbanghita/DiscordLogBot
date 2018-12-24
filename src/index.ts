import {default as Discord, Message} from "discord.js";
require("dotenv").config();
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg: Message) => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
    console.log(msg);
});

client.login(process.env.BOT_TOKEN);
