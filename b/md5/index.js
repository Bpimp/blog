const crypto=require('crypto');

const myMd5=function(param){
    return crypto.createHash('md5').update(param).digest('hex').slice(16);
}
function Encryption (pwd,salt){
    const password=`${myMd5(pwd)}${myMd5(salt)}`
    return password
}
module.exports={
    Encryption
}