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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_59_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic2t3N21KWktiS0Z4SUlMTE56eGNrNld1K3VIR2NISHFpeDd4Qk1QV0RtND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicElEcGJCZVJTRjJ6b3JhQTk0VDJtZ1wiLFxuICBcInBob25lSWRcIjogXCJkYTJmM2UwMC0wYzEzLTRhMDgtOTA1ZC01MDYxMGIyYjU3YWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAyMzQsXG4gICAgICAxNzIsXG4gICAgICAxMDQsXG4gICAgICAxOTYsXG4gICAgICAxNjcsXG4gICAgICAxMzMsXG4gICAgICAxMjAsXG4gICAgICA3MixcbiAgICAgIDE1OCxcbiAgICAgIDIwMyxcbiAgICAgIDg1LFxuICAgICAgMTkzLFxuICAgICAgMTgsXG4gICAgICAzMixcbiAgICAgIDEwNixcbiAgICAgIDI1MCxcbiAgICAgIDYwLFxuICAgICAgMjE2LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDEzMCxcbiAgICAgIDIyOCxcbiAgICAgIDEyNyxcbiAgICAgIDkwLFxuICAgICAgMTAwLFxuICAgICAgMTEzLFxuICAgICAgMjA2LFxuICAgICAgMTA5LFxuICAgICAgMjA0LFxuICAgICAgMTEsXG4gICAgICAxNDIsXG4gICAgICA3NCxcbiAgICAgIDE4OSxcbiAgICAgIDE0LFxuICAgICAgMTk2LFxuICAgICAgNDgsXG4gICAgICAyNDMsXG4gICAgICAyNDEsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMktINlBXM0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE3MjY3NjAyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5OTY5MTA1NjUzOTIyOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lLdHI2UUZFTytBbXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidVlKaVlsYVNjUmRmV29wR2txa1dGVjhkaVgwZUpWdWluM0hYUllRbzlqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTZ0xZNHNqNWgxTnc3Q3M5R1BNUk1QWURIQWNVY3BZQlRjYnc5dW5CTGtSNEo1ZStzci9lL3Q0YXFwakUxSVZtU3o5RE9NWXZ5RHBJSzZXVXZJY2VCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6cmlHb2tnamFERDFHVlVaVzNOWlNKaTBOb1l5RGgwa1JCOEZmN1VvOWV3cnljV3dHWTF4VlRMaWpJdk5DbHkvMDRJL1dyNnBsY1pwLzAzeWZUVW1oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNzI2NzYwMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwOTA3Mzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
