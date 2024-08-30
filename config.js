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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169644468";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
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
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_19_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLeEsydGJDcXhXVy9DQmx2U2JMWEtWOXEwNzBDZFQrbVN3OXpmSkl5M1lnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNUFdYa2hSVVRwcWJ5MFV3VG9uM1pBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0MDYwNGVhLTI0ZmEtNDIwOC04YWQ5LTkxNjcyMzNiYjAyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICA5NSxcbiAgICAgIDYxLFxuICAgICAgMSxcbiAgICAgIDEzMCxcbiAgICAgIDE2NixcbiAgICAgIDEsXG4gICAgICAxMDYsXG4gICAgICA5NyxcbiAgICAgIDE1MixcbiAgICAgIDgwLFxuICAgICAgNDYsXG4gICAgICAxMDEsXG4gICAgICAxOTIsXG4gICAgICAyMTcsXG4gICAgICAyMDksXG4gICAgICAyNixcbiAgICAgIDY5LFxuICAgICAgMjEyLFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTQ5LFxuICAgICAgMTQ5LFxuICAgICAgMjEyLFxuICAgICAgMjgsXG4gICAgICA1NSxcbiAgICAgIDE4LFxuICAgICAgMTcyLFxuICAgICAgNTUsXG4gICAgICAyNDYsXG4gICAgICAxNjEsXG4gICAgICAxNCxcbiAgICAgIDIwMyxcbiAgICAgIDIxNixcbiAgICAgIDEwMyxcbiAgICAgIDAsXG4gICAgICAyOCxcbiAgICAgIDY1LFxuICAgICAgMTk1LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWQlJRMVlLTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2OTY0NDQ2ODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldJU0RPTSBFTlRFUlBSSVNFU1wiLFxuICAgIFwibGlkXCI6IFwiMTgzNDg1NzE3MzE5NzA2OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zOXByVUZFTDdTeUxZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK29XN2F4Uy8vQ0lBL29qYjg5bDE0OGx3akpIQ3FsaVZUV3J1MGFUV1dVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxcVcxT1crWWVEcnU0YjFDcUhsdjlvTmh2ZDlHK1pBcVBEZnFtYkQ4TDRLS1p6aXZJcVFVdVBGdVlldVUrV1ZNYmpDN3dhWWV5VnRwd1RaZUhsTHVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMRlBUTWFZSE5LNXlhYzR4VTYvaFZpT0JXblcxUUQwRlRyeURvYjgvODYwVkw3dUdqSVMxdUJnL25OSGpKdFNMK1NkSzBBc0FiTHFhMUVKQUVLUU1oZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY5NjQ0NDY4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTA0OTE1NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
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
 
