const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94773824266";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773824266";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "soVidu-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "soVidu",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_28_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzksXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImV3YnFsVWNLeTJ4dmhPK3E2OWwwa1lsVnJDeXdCMWd4Sk8yVW03Rnl4V2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm54WnNDS0dzU0x5cXZNMWJsOWtmZUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFlZTY1NzEtNDliMS00MzA5LWJlOGMtZGJjMDA0MWJjZmM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMSxcbiAgICAgIDE3OCxcbiAgICAgIDIzMixcbiAgICAgIDgzLFxuICAgICAgMTQ4LFxuICAgICAgMjQ3LFxuICAgICAgMTkxLFxuICAgICAgMjIyLFxuICAgICAgNzAsXG4gICAgICA0MCxcbiAgICAgIDExOCxcbiAgICAgIDIwMixcbiAgICAgIDExMyxcbiAgICAgIDI2LFxuICAgICAgODgsXG4gICAgICA1NCxcbiAgICAgIDgsXG4gICAgICAzMSxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDIzMCxcbiAgICAgIDEyMixcbiAgICAgIDEyNSxcbiAgICAgIDIxNixcbiAgICAgIDE4MixcbiAgICAgIDUzLFxuICAgICAgMTU2LFxuICAgICAgMjEwLFxuICAgICAgMTcyLFxuICAgICAgMTY4LFxuICAgICAgODgsXG4gICAgICAyMjUsXG4gICAgICAyMzUsXG4gICAgICAxOTQsXG4gICAgICAyOSxcbiAgICAgIDE1LFxuICAgICAgMjM1LFxuICAgICAgMTYwLFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1ZNUzgxVFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczODI0MjY2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibVwiLFxuICAgIFwibGlkXCI6IFwiNjc3NzUxNTQ0MTc3NjU6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdlcDZFSEVMSzQ1N1lHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPVkJvbldUc2cxRjlDUGNoRmhzaFdPU09CZnJSODNNYkNyU3Q1UHVpNUc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRJQktEVmszakdQSlZrczBjWWdOWjFEdHl6WDk1N05vcUxUaE0zR1BSa0VQVVg1Wlk5Y2dYSStXYzJGN0tiRFBpclI1Qkh1L1hUTjlGZzJPdXlYUkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZXMlhuaU4yUGZpdFpzVWNOYXA3Sy9qRlNSM2dEbzVwc05sNExkVDlLNm5qTzAyWHZMUE92TEdEYlFsdCt1MElnbCt0c1hBOHlmYXo5K1hJZG9WTEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzczODI0MjY2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTU1MzcxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURucFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRG5wLmpzb24iOiAie1wia2V5RGF0YVwiOlwidlIwMVhFMHkxSlFSYTBlK0dmMzVWczZWTGYwanFnNVZSbVAwc0VYRk4wVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ4ODk3MDcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI1NDQ1OTQ2MzI2XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
