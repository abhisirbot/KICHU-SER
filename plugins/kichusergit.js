const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:KICHU SER [OWNER]\n' // full name
            + 'ORG:KICHU-SER;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919961857267:+91 99618 57267\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "KICHU-SER [OWNER]", vcard: vcard}, MessageType.contact)
}))
