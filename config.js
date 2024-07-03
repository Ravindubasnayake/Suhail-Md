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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_49_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQTlEUHR4L2RaT3hoR2JnNDhxcGZVSklSVUNicGgvSmdtUW4zL01Wa1cxND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia3NDRHVVLUZTQmUyYTFUMmxHME9NQVwiLFxuICBcInBob25lSWRcIjogXCIxYzA3MGU5NS1hYWVhLTQ1YjYtYWMzMC01MjM3MjY1ODEzZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICA1NSxcbiAgICAgIDcsXG4gICAgICAxODIsXG4gICAgICAyOCxcbiAgICAgIDM5LFxuICAgICAgMTk2LFxuICAgICAgMjA5LFxuICAgICAgMTI4LFxuICAgICAgNTgsXG4gICAgICAyMyxcbiAgICAgIDEyMSxcbiAgICAgIDI1MyxcbiAgICAgIDgzLFxuICAgICAgODgsXG4gICAgICAxMTcsXG4gICAgICAyMzYsXG4gICAgICA4NSxcbiAgICAgIDIzOSxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIwMixcbiAgICAgIDIxNCxcbiAgICAgIDEzOSxcbiAgICAgIDI0NixcbiAgICAgIDIzNixcbiAgICAgIDEzNCxcbiAgICAgIDE1MSxcbiAgICAgIDIyNyxcbiAgICAgIDIyNCxcbiAgICAgIDE3OCxcbiAgICAgIDIxOSxcbiAgICAgIDI0MyxcbiAgICAgIDIzNixcbiAgICAgIDI1LFxuICAgICAgODAsXG4gICAgICA3NyxcbiAgICAgIDIyNCxcbiAgICAgIDIxOCxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMUxYU0pCNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTcyNjc2MDI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTk2OTEwNTY1MzkyMjo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHdHI2UUZFTGp5bHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidVlKaVlsYVNjUmRmV29wR2txa1dGVjhkaVgwZUpWdWluM0hYUllRbzlqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvR0dhTDZ0M3llTkhpZ0dtZzBoeUYvZHBodTZYVTJSU3ZMaHA1T3BQR29WWHBuSnNKZlFaV2Y4RFZVMlpWTGI1NEhLa0JDdWxIcGwrdC9NcjJpd2FCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1aFNJQTNIbjlUT1o1dmVLRUhmNEdiVC8vaEc2TG51Z3U5UmhvSE85NEZaM0ZKLzRxK3Ruek1vcHpRRGdoZkN3Wkl3QkxMV0NDLy9ER1JaMWczajZqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNzI2NzYwMjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAzOTc0MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
