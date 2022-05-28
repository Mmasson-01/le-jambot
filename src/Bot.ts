import { Client, ClientOptions } from "discord.js"
import 'dotenv/config'
import interactionCreate from "./listeners/interactionCreate"
import ready from "./listeners/ready"

const token = process.env.DISCORD_TOKEN

console.log("Bot is starting...")

const client = new Client({
    intents: [],
})

ready(client)
interactionCreate(client)
client.login(token)
