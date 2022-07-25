export { createApplicationCommandHandler, Application, Command } from "./handler";
export * from "./permissions";
export type { CommandInteractionHandler, ComponentInteractionHandler, InteractionDataType, InteractionResponse } from "./interaction";
import type { APIApplicationCommand } from "discord-api-types/payloads";

export type ApplicationCommand = Partial<APIApplicationCommand>;
