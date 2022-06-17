import {
    BaseCommandInteraction,
    Client,
    Message,
    PartialMessage,
} from "discord.js"

export default (client: Client): void => {
    client.on(
        "messageUpdate",
        (
            oldMessage: Message | PartialMessage,
            newMessage: Message | PartialMessage
        ) => {}
    )
}

const handleMessageUpdate = async (
    client: Client,
    interaction: BaseCommandInteraction
) => {}
// https://discord.com/api/oauth2/authorize?client_id=980125877914451968&permissions=8&scope=bot%20applications.commands
