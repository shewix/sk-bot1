const db = require("croxydb")

exports.run = async(client, message, args) => {
  let miktarsonuç = Math.floor(Math.random() * 99) + 1
    var sebep = ["tadilatçı olarak çalıştı","emlakçı olarak çalıştı","aşçı olarak çalıştı", "enginar satıcısı olarak çalıştı","dilenci olarak çalıştı","enginar olarak çalıştı","Doktor olarak çalıştı","Pythonic olarak çalıştı","su satıcısı olarak çalıştı","boş boş durdu"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`para_${message.author.id}`, miktarsonuç)
    return message.channel.send(`${message.author} ${sebepsonuç} ve **${miktarsonuç}** TL kazandı!`)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çalış' 
  }