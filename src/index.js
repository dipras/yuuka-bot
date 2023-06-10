
import dotenv from 'dotenv';
import { Client, GatewayIntentBits, Routes, REST } from 'discord.js';
import messageCreate from './events/messageCreate.js';

dotenv.config();

const token = process.env.TOKEN;
const client_id = process.env.CLIENT_ID;

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(token);

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(client_id), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.on("ready", () => {
    console.log("The AI bot is online"); //message when bot is online
});

client.on('messageCreate', messageCreate);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});
client.login(token);