const fs = require('fs')

global.owner = "6281298912604" //owner number
global.namaowner = "Rayzz-X" //owner name
global.footer = "~ 攻撃スクリプト" //footer section
global.status = true //"self/public" section of the bot

global.lol = "";
global.mess = {
    owner: "\`[ Akses Ditolak!! ]\`\nFitur Khusus Developer Rayzz",
    group: "\`[ Akses Ditolak!! ]\`\nFitur Khusus Di Dalam Group",
    private: "\`[ Akses Ditolak!! ]\`\nFitur Khusus Private Chat",
    murbug: "\`[ Akses Ditolak!! ]\`\nFitur Khusus Pengguna Murbug",
    admin: "\`[ Akses Ditolak!! ]\`\nFitur Khusus Admin Group",
    botadmin: "\`[ Akses Ditolak!! ]\`\nBot Harus Admin Terlebih Dahulu"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
