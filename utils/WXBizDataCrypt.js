let Crypto = require('cryptojs/cryptojs').Crypto
function WXBizDataCrypt(appId, sessionKey) {
  this.appId = appId
  this.sessionKey = sessionKey
}
WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode ：使用 CryptoJS 中 Crypto.util.base64ToBytes()进行 base64解码
  var encryptedData = Crypto.util.base64ToBytes(encryptedData)
  var key = Crypto.util.base64ToBytes(this.sessionKey)
  var iv = Crypto.util.base64ToBytes(iv)
  // 对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充
  var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7)
  try {
    // 解密
    var bytes = Crypto.AES.decrypt(encryptedData, key, {
      asBpytes:true,
      iv: iv,
      mode: mode
    });
    var decryptResult = JSON.parse(bytes)
  } catch (err) {
    console.log(err)
  }
  if (decryptResult.watermark.appid !== this.appId) {
    console.log(err)
  }
  return decryptResult
}
const decodeData = (sessionKey, encryptedData, iv) => {
  let appId = 'wx4a09a66b834d0e6c'
  let pc = new WXBizDataCrypt(appId, sessionKey)
  let data = pc.decryptData(encryptedData, iv)
  return data
}

export default decodeData
