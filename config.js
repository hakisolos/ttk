//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ViK0VPc1FXaUJMaU5ZNzdCUnlDaUY4eEJPb0ROOGxKNnUzN0dFM1ZXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHVQc1RHQWYxNXBuemVJemMxMWIrMGp1WEpPa0E2Y0pZTll1RVVhd0NrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RDRnZEpINytqeDloc1J3czB3eWRqR3lhWHFyUkpYZ3d3UDNOQ3hWZ1ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWTEI5cHRsbml1bTI3Q2ZUSWZ4alNPZFV0NExCWHUrckFrdHplRVF2TG1zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFWllKWEpNL0J5d3BXb0NaQ2NlNEU0YWdZbmVTMTFYYWpOTlZ5dThNbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUvU0g1OU9JQjRpdUhpWWhxMXFBczNXRDlMU2ZxaXNTNzlvdFNFYzEvV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RPSXlnRVZxVGdHNEJQcnJ1UlJtWUVHUHVwMjU4R3BXb1NRUVB6MytXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1pZUmFBZ0F4Y3c0VTNJTEtJM1hOMnVyZ1hkeU9MbDJMSDh4TEhWbVRqYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNvNTc0NUVlVzlmY2JQQTN4WlhnM3RRcCt0UDFxdVFGVEh6U3ZxbTh1VDlIYWpDVThZcXNyUktFdHlWZS95RThWZExya25lZFI2MUNhR1BoYnIwMkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiIrVGhSejQyT3c0NXN0VWcyajJSeGhTY3lXSVpoL1dmZTM5UU1FeW1xLzVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhdVVhZXU0bVJ2R1lQOHNHN3U4WDN3IiwicGhvbmVJZCI6ImQwOGQzMzk1LWYzNDctNGJmYi1iNWJiLTIyOTEzMzBkOTkwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmTXdkaCt3SnBqTWpCNW9MYmJ6M0N3Q1d5bUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEQ4RlJoU0V2eGtXdElpOVp4VkUzTHBjWE9JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZETkZHWjRNIiwibWUiOnsiaWQiOiIyMzQ4MTA1Njc2MjIwOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkAxaW52ZXN0b3IgZ29rdSAwMDHZitmG2YHYuSDZhtix2KrYqNiqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdlNudkVHRU1hR3VMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzNHZvVHNGK3paWEg4NkZiTktqeXI0S0piNWx3U2hjV283U3pQT2twL0ZRPSIsImFjY291bnRTaWduYXR1cmUiOiJiMTB2ZXhqS3VQNTdFK3B4Uyttc0Zvb2lZeHQ5NU1wbVN5aTEvd0tkTXFacjVMSlFsWHNQd01sdHdPWEhROCtDeFdDTzR5bXBlSkN2RU9yWFJGYm1DUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYmJQcGI0OU9NcHd0SEZSZzhuZnNnZEZ3SmpnVDE4cWNmVitaWDdKL3lTZ012SzM2SGpyYmM5eDlQNFVyOEI0Mk54ZDBtWDZ6eE1qLy8xRFZKZ09KQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTA1Njc2MjIwOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQrTDZFN0JmczJWeC9PaFd6U284cStDaVcrWmNFb1hGcU8wc3p6cEtmeFUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY4NzQ0NTJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
