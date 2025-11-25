const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'play.null-network.com',
  port: 25565,
  username: 'xanDEER',
  version: false
})

bot.once('spawn', () => {
  console.log('Bot spawned and ready.')
})

bot.on('login', () => console.log('Bot logged in!'))
bot.on('end', () => console.log('Bot disconnected.'))
bot.on('kicked', (reason, loggedIn) => console.log('Kicked:', reason, loggedIn))
bot.on('error', (err) => console.error('Error:', err))

bot.on('resourcePack', (url, hash) => {
  console.log('Resource pack requested:', url, hash || 'No hash')
  if (typeof bot.acceptResourcePack === 'function') {
    bot.acceptResourcePack()
    console.log('Resource pack accepted automatically!')
  }
})