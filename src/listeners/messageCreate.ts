import {
    BaseCommandInteraction,
    Client,
    Message,
} from "discord.js"

export default (client: Client): void => {
    client.on("messageCreate", (message: Message) => {})
}

const handleMessageCreate = async (
    client: Client,
    interaction: BaseCommandInteraction
) => {}
// https://discord.com/api/oauth2/authorize?client_id=980125877914451968&permissions=8&scope=bot%20applications.commands
