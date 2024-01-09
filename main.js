import TelegramBot from 'node-telegram-bot-api';
import { parse } from 'csv-parse';
import fs from 'fs';
import { CronJob } from 'cron';
import 'dotenv/config'

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

async function checkDate() {
    const date = new Date();
    const todayDate = date.getDate();
    const todayMonth = date.getMonth() + 1;
    const todayYear = date.getFullYear();

    fs.createReadStream("./data.csv")
    .pipe(parse({
        delimiter: ",",
        skip_empty_lines: true,
        columns: true,
    }))
    .on("data", function (row) {
        const [birthDate, birthMonth] = row.date.split("-").map(Number);
        if (birthDate === todayDate && birthMonth === todayMonth) {
            console.log(`Sending message for ${row.name}, on ${todayDate}-${todayMonth}-${todayYear}`)
            bot.sendMessage(process.env.CHAT_ID_PROD, `${row.message} ${row.telehandle}`);
        }
    })
}

const job = new CronJob(
    '10 00 00 * * *', // cronTime, seconds minutes hours
    function () {
        checkDate();
    }, // onTick
    null, // onComplete
    true,
    'Asia/Singapore' // timeZone
);