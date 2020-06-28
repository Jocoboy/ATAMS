var crypto = require('crypto');

module.exports = {
    MD5_SUFFIX : 'Jocoboy@&^$IN^E#*J/*--UB#7!D^_^o(*￣︶￣*)o#$%^&dhfja)(* %^&FGHJfyfhak(^.^)YYa!!^o^)Y(*^__^*)ﾍ|･∀･|ﾉ*~●',
    md5: function(pwd){
        var md5 = crypto.createHash('md5'); // 加密方式:md5(不可逆)
        return md5.update(pwd+this.MD5_SUFFIX).digest('hex') // 编码方式:hex(可选:[hex,latin1,base64])
    }
};
