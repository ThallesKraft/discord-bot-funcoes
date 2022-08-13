<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔨 - Discord bot funções</a>
</h1>
<p align="center">🚀 Uma dependência para lhe ajudar nas funções de seu discord-bot</p>
<img src="https://img.shields.io/static/v1?label=Blog&message=Rocketseat&color=7159c1&style=for-the-badge&logo=ghost"/>

## *➡️ Instalação*
```
npm i discord-bot-funcoes
```

# Função: antispam

```js
const Discord = require("discord.js");

let set = new Set()

client.on('message', async (msg) => {

    const anti = require("discord-bot-funcoes");
    anti.spamCheck(msg, set, 5000)
})
```
# Exemplo do AntiSpam
![test](https://cdn.discordapp.com/attachments/1003328552827093202/1007981814310256681/20220813_085910.jpg)







# Barra de Progesso

```js
const barra = require("discord-bot-funcoes");

let msg = progressbar.splitBar(10, 5);

message.reply({content: `${msg}`})

```

![](https://cdn.discordapp.com/attachments/1004844463090311211/1007987009903673524/20220813_092006.jpg)

> * Discord.js v13
> * Node v16
> * V1.0.0
