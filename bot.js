const { Telegraf } = require('telegraf');

YOU_BOT_TOKEN = '7893541535:AAEe0auEczkUbPIbKP2q1jqWlHzkl4_7Eu0'
const bot = new Telegraf('YOU_BOT_TOKEN');

const question = "Какой язык программироавния используется для разработки телеграм-ботов?";
const correctAnswer = "JavaScript";

bot.start((ctx) => {
    ctx.reply("Привет! Давай сыграем в квиз. " + question);
})

bot.on('text', (ctx) => {
    const userAnswer = ctx.message.text;

    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
        ctx.reply("Правильно! Молодец!");
    } else {
        ctx.reply("Неправильно. Попробуй еще раз!");
    }
});

bot.launch();
console.log("Бот запущен!");