const telegramBot = require('node-telegram-bot-api')
const token = '7726956298:AAE8zEMxSM1mKjVDC0UHVfHA3vYMLjOCxvw'

const bot = new telegramBot(token ,{polling : true})


bot.onText(/\/start/,(msg) =>{
    const chatId = msg.chat.id
    const pesan = "hi, welcome to uba and good luck looking for airdrops on $uba. Thank You"
    bot.sendMessage(chatId ,pesan )
})

bot.on('message',(msg) => {
    const chatId =msg.chat.id
    if (msg.text.toLowerCase() !== '/start') {
        bot.sendMessage(chatId, `Anda mengirim: ${msg.text}`);
      }    
})