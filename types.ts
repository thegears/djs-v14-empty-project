import Discord from "discord.js";

export type SlashInteractionOptions = {
	type: string,
	name: string,
	description: string,
	required: boolean,
	choices?: { name: string, value: string }[] | []
}

export type SlashInteraction = {
	name: string,
	type: string,
	forGuild: boolean,
	description: string,
	options?: SlashInteractionOptions[]
	run: (args: { interaction: Discord.CommandInteraction }) => Promise<void>
}
