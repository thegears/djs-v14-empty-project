import Discord from "discord.js";
import fs from "fs";
import { SlashInteraction } from "../types";

const SlashInteractions: SlashInteraction[] = []

for (const file of fs.readdirSync("SlashInteractions").filter(file => file.endsWith(".ts"))) {
	let interaction = await import(`../SlashInteractions/${file}`);
	interaction = interaction.default;
	SlashInteractions.push(interaction);
};

const rest = new Discord.REST().setToken(process.env.TOKEN);

