# Discord Bot

> Node.js client to connect to Discord guilds (servers).

#### Install

* `npm install`
* Create an account at https://discordapp.com
* Create an `.env` file in the root folder and put your AppliTools API key
    - `BOT_TOKEN=[your key here]`

#### Configure

* https://discordapp.com/developers/applications/
* Go to Applications -> Your Application Name
* Copy `CLIENT ID` and go to `https://discordapp.com/oauth2/authorize?client_id=[CLIENT ID]&scope=bot&permissions=66560` in your browser.
    * `66560` means `View Channels` and `Read Message History`
* You can authorize the bot to **join only the servers you manage** or you can send the link to respective owners.

More docs: https://discordjs.guide/#/preparations/adding-your-bot-to-servers

#### Run

* `node ./bin/index.js`