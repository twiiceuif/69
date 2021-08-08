/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');
const dil = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    
    if (Config.ALIVEMSG == 'default') {
        
        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_IMG, {responseType: 'arraybuffer'})
       
        await message.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVE_MESSAGE})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_IMG, {responseType: 'arraybuffer'})
       
        await message.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVE_MESSAGE})
     }
    }));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
