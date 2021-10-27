import type { APIMessage } from "discord-api-types";
import type {
	ButtonInteraction,
	ClientEvents,
	CommandInteraction,
	CommandInteractionOption,
	ContextMenuInteraction,
	Message,
	MessageButton,
	MessageSelectMenu,
	SelectMenuInteraction,
	TextChannel,
	ThreadChannel,
	User,
} from "discord.js";

export type EventCallback<K extends keyof ClientEvents> = (...args: ClientEvents[K]) => Promise<void> | void;
export type MessageCallback = (
	message: Message,
	channel: TextChannel | ThreadChannel,
	args: string[]
) => Promise<Message | void> | void;
export type SlashCommandCallback = (
	interaction: CommandInteraction,
	args: CommandInteractionOption[]
) => Promise<Message | APIMessage | void> | void;
export type ContextMenuCallback = (
	interaction: ContextMenuInteraction,
	target: Message | User | undefined
) => Promise<void> | void;
export type ButtonCallback = (interaction: ButtonInteraction) => Promise<void> | void;
export type SelectMenuCallback = (interaction: SelectMenuInteraction, values: string[]) => Promise<void> | void;
export type MessagePermissions = {
	allowed?: Set<string>;
	denied?: Set<string>;
	flags?: Set<string>;
};
export type CommandPermission = {
	id: string;
	type: "ROLE" | "USER";
	permission: boolean;
};
export type SlashCommandOptionType =
	| "STRING"
	| "INTEGER"
	| "BOOLEAN"
	| "USER"
	| "CHANNEL"
	| "ROLE"
	| "MENTIONABLE"
	| "NUMBER";
export type SlashCommandChoice = { name: string; value: string };
export type SelectMenuOption = { label: string; description: string; value: string };
export type BuildComponentsData = [MessageSelectMenu | MessageButton];