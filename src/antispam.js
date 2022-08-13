function spamCheck(msg, set, time) {

const { MessageEmbed } = require("discord.js");

    for (let u of set) {

      
      
        if (u.id === msg.author.id) {
            if (u.times >= 4) {


              
                msg.reply(
                  {
                    embeds: [
                      new MessageEmbed()
                      .setDescription(`Por favor, não faça spam.`)
                    .setColor(`BLUE`)
                    ],
                    content: `${msg.author}`
                  }
                )
              client.channels.cache.get(`${client.logsp}`).send({
                embeds: [
                  new MessageEmbed()
                  .setDescription(`
                  **\`${msg.author.tag}\`** está fazendo spam.
  Chat: ${msg.channel}`)
                  .setColor(`RED`)
                ]
              })

              msg.channel.bulkDelete(parseInt(4))
                
             msg.member.timeout(10000)

                
                u.time = Date.now()
                u.times = 0
            } else if ((Date.now() - u.time) <= time) {
                u.times++
                u.time = Date.now()
            } else {
                
                u.time = Date.now()
                u.times = 1
            }
        }
    
    }
    let userInSet = false
    set.forEach(u => { 
        if (u.id === msg.author.id) userInSet = true 
    })
    
    if (!userInSet) set.add({ id: msg.author.id, time: Date.now(), times: 1 })
}


module.exports = { spamCheck }  
