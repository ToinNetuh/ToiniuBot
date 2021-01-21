const pesado = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *18+*
  |
  ├─ ❏ ${prefix}randomhentai
  ├─ ❏ ${prefix}nsfwtrap
  └─ ❏ ${prefix}nsfwneko`
}
exports.pesado = pesado
