
# Draco Birthdays Bot

Telegram bot that sends a birthday message on the specified persons' birthday

### What is it
- Automate the sending of 'Happy Birthday' messages in the House Chat

### Requirements
- Node.js

### Setting up locally
1. Clone this repo `https://github.com/jeonwonje/draco-birthdays-bot.git`
2. From the root directory, run `npm install`
3. Generate a Telegram Bot using `@BotFather`
4. Create a new `.env` file and copy the required bot key as per `.env.example`
5. Copy the ChatId for the desired Telegram chat group https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id
6. Run the project: `npm run start`

### How to use
1. Populate the `data.csv` as per `.csv.example`

| Name | Telehandle | Date | Message |
|-|-|-|-|
| John Doe | @JohnDoe | 19-12-1999 | HAPPY BIRTHDAY JOHN🎂🎉🎁🎈 |

- The date should be in DD-MM-YYYY
- As the records can get large, I recommend using ChatGPT to populate the csv file

2. The bot should automatically send a message every morning (00:00:10), assuming that a specified persons' birthday falls on that day
