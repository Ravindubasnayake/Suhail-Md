const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_58_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDE2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MixcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaGEvU05aS3ZRWFV2UFhtN3BZcXU5ZklXd2JRTzlUeG43dGlpQmNZY1h4ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZGZTdko1bEFRTjZtMGNlVXl3eGMzd1wiLFxuICBcInBob25lSWRcIjogXCI2MzE5MjNkNC04NWJjLTRmNGQtYjgyZC1lNzBhOTAzMzEwMThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTA2LFxuICAgICAgMzMsXG4gICAgICAyOSxcbiAgICAgIDE4MSxcbiAgICAgIDEzNyxcbiAgICAgIDIyMSxcbiAgICAgIDE0MCxcbiAgICAgIDI0OCxcbiAgICAgIDc3LFxuICAgICAgMTM3LFxuICAgICAgNjIsXG4gICAgICAxNzQsXG4gICAgICAyMCxcbiAgICAgIDk0LFxuICAgICAgMTk2LFxuICAgICAgMTMzLFxuICAgICAgMTI5LFxuICAgICAgMTM0LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDE3MixcbiAgICAgIDI0OCxcbiAgICAgIDgsXG4gICAgICAxMjMsXG4gICAgICAyMjYsXG4gICAgICA1MSxcbiAgICAgIDQ1LFxuICAgICAgNCxcbiAgICAgIDE5MSxcbiAgICAgIDE4MSxcbiAgICAgIDE0OSxcbiAgICAgIDExOSxcbiAgICAgIDExLFxuICAgICAgMTcyLFxuICAgICAgMTQ4LFxuICAgICAgMTkxLFxuICAgICAgMCxcbiAgICAgIDE0MCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRDVFU1Q4MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTcyNjc2MDI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTk2OTEwNTY1MzkyMjo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHdHI2UUZFT0RYbUxRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidVlKaVlsYVNjUmRmV29wR2txa1dGVjhkaVgwZUpWdWluM0hYUllRbzlqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2ajAwL2hZTnRTRnRTaDdHMCtHc2oxSnduMmlVbEFuUDRuN0p2RlM5aWswRlJ4SGFUWHpORWJEV2VvMkFZU2RSUkVhOEtkaEpCamJ1K2hoY0ZZbDNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDVDBmc0I3MmJ6aGJCOU0zMjV2dVkzVjBpcHJYMjRFNDVuVjVLdCtVRVdOei9PMG1jMUZMTUlqVm9zL3hWdEc2Y0dSUWNqaGMzTjJrVEgvZmdvT3RCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNzI2NzYwMjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA2OTA5MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
