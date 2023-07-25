const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/") // bunu istediğiniz herhangi bir dizine değiştirebilirsiniz

bot.status({
    text: "Tech Development",
    type: "PLAYING",
    status: "online",// online , idle , dnd
    time: 12
});