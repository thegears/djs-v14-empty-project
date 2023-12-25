import type { SlashInteraction } from "../types";

export default <SlashInteraction>{
	name: "avatar", // Command name
	description: "Get avatar", // Command description
	forGuild: false, // Is command for a guild? If yes specify guild ID, if not set to false. If you set to false it will be global command so every guild member can use it.
	options: [
		{
			type: "user", // Command option type. "string" | "integer" | "boolean" | "user" | "channel" | "role" | "mentionable" | "number",
			name: "user", // Command option name
			description: "User", // Command option description
			required: false, // Is this option required?
			choices: [ // Choices

			]
		}
	],
	async run({ interaction }) {
		interaction.reply({
			ephemeral: true,
			content: `Avatar: ${interaction.user.displayAvatarURL()}`
		})
	}
}

