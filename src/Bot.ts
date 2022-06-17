import { Client, ClientOptions } from "discord.js"
import 'dotenv/config'
import interactionCreate from "./listeners/interactionCreate"
import messageCreate from "./listeners/messageCreate"
import messageUpdate from "./listeners/messageUpdate"
import ready from "./listeners/ready"

const token = process.env.DISCORD_TOKEN

console.log("Bot is starting...")

const client = new Client({
    intents: [],
})

ready(client)
interactionCreate(client)
// messageCreate(client)
// messageUpdate(client)
client.login(token)
