import fs from "fs";
import Discord from "discord.js";
const allIntents: number[] = [1, 2, 4, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 1048576, 2097152]; // Define all intents
const client = new Discord.Client({
	intents: allIntents
});

export const SlashInteractions = new Discord.Collection();
export const OtherInteractions = new Discord.Collection();

for (const file of fs.readdirSync("./SlashInteractions").filter(file => file.endsWith(".ts"))) {
	const interaction = await import(`./SlashInteractions/${file}`);
	SlashInteractions.set(interaction.name, interaction);
};

console.log(SlashInteractions);

client.login(process.env.TOKEN); // Login with token

client.once(Discord.Events.ClientReady, () => { // Log when bot is ready
	console.log("Bot is running!");
});
