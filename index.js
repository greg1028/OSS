const { RTMClient } = require('@slack/rtm-api')

const fs = require('fs')

let token

try {
  token = fs.readFileSync('./hide/token').toString('utf-8')
} catch (err) {
  console.error(err)
}
console.log(token)

token = token.replace(/\n/g, '')

const rtm = new RTMClient(token)

rtm.start()

rtm.on('message', function (message) {
  const channel = message.channel
  const text = message.text

  if (text === 'hello') { rtm.sendMessage('Hello', channel) } else { rtm.sendMessage('?????', channel) }
})
