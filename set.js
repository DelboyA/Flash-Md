const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxlYzdMNFpSK0JjalhEQ3hhRjJaWVN0UXFhZEhEMjY5dFVOa0tFTWtIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekl0eG9JajNFZkE4MEJCcXpsc0tnL0FPdXhYN0dBQXU2NkRUUHc2OHJ6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQ09aNjFpMnVMTEhLVnJBcjJ5ZWV2cTJIdEo0aHkrb2ltZEJ5WkxzbEVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4OFFFYjBZb0dZNHpMMVNJL0RjOUZmMHRaRFNKRkxkM1N1MVp3TWF3MFVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCKzM3RVB2VVIzNjdjbEFpRndhN1RuYkFPTml5cUxkd0NSczE1cEtIa009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBGRFAvYXdQLzVlU1FYdGVEaUZPdkh5WFY2UHBwUVo1NU1VWmswTHFEQWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0t0RkdQNFF2aVhRcDNWQlFRbVRlYjZmb3lTcTkwZy9ndlgxNVM2amMzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUk0MG80KzVRUTJrWTFCN2QxU05zTXQ1QVpXSUNhRG1WaUF2WUJrYm9rOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNET2lUZWwzYVJ3eGVnZnVRMEM0ay9qMzlGVkIxYkVpRzlyNlJlNnNiUkI2M3VLV3VPWnpkckFTeWF0TVdXd216cCtsNjcyN1RFZGFsWG9FVkM5VUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiI4MWZQS0ZFK25jTktqT284bkNGcm9meUlHcXZMM1dIbzB4ZWZkb0x6T0xFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc3MzQ0MDc1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0REZCMUVCOTUwOTU3NDFGRTAyMkVGQ0U1OEY1MDk4MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3NjY5OTM0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NzM0NDA3NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjFDMkE2QzNBRjI5OTFGMzNGQ0VFRjdGNEI1N0M2MzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzY2OTkzN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRFd4ODd6bHhSNDZVNE9CdGxodmpWZyIsInBob25lSWQiOiIyOGVjY2ViYS04NGJmLTRjN2MtYWE1MS1hMmZmN2Q2MjFkYWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHJMdi9OQTI3SWhWYVlKdktOTnZKdkVtVzBVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKZTZwTVE5TG1CMDFoQWM0NTQ1Ukl1QXpSST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0M005M0ZDTiIsIm1lIjp7ImlkIjoiMjU0NzczNDQwNzU4Ojg2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRFTEJPWSBBTklFWSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2IvOUlVQ0VKK2dock1HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTG13OThmS1NpTGxYaUc4bW83MzhIUnJSMHpOZ0tlbGlGWXpGVkoybndtUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZHJLamx5ckVzNWdlWUxFSjhha2V4SnhlRGJRZXpSWGRybTIrKzlnMG15ZVpXWWtYai85Ui9XRTYwTjBtbTBzekJkaGIybytLN0MvL1UzV0oxT3pPQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImlEcHc2WFRCb3ozN3R0SDVQME4rZ1YwV0RPaGQwcGJNRjNPYW5pczBUd1V0c2liQ2tSb0o3b0h2OHJFWDdWbTFnRXpoUGxKZzVxdFVYNHB3NXVIRUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzczNDQwNzU4Ojg2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM1c1BmSHlrb2k1VjRodkpxTzkvQjBhMGRNellDbnBZaFdNeFZTZHA4SmsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc2Njk5MzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXhjIn0=;;=>',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "DELBOY ANIEY",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254 773 440758", 
             
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
CHATBOT: process.env.CHAT_BOT || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'FLASH-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
