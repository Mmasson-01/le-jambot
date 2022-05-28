import { BaseCommandInteraction, Client, Interaction } from "discord.js"
import { Commands } from "../Commands"

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenu()) {
            await handleSlashComment(client, interaction)
        }
    })
}

const handleSlashComment = async (
    client: Client,
    interaction: BaseCommandInteraction
) => {
    const slashCommand = Commands.find(
        (c) => c.name === interaction.commandName
    )
    if (!slashCommand) {
        interaction.followUp({ content: "An error has occured" })
        return
    }

    await interaction.deferReply()
    slashCommand.run(client, interaction)
}
// https://discord.com/api/oauth2/authorize?client_id=980125877914451968&permissions=8&scope=bot%20applications.commands
