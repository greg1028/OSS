const schedule = function (rtm, text, channel){

        const fs = require('fs')
        const array = fs.readFileSync('haksa.txt').toString().split("\n")
        for(i in array){
                if(array[i].includes(text)){
                        rtm.sendMessage(array[i], channel);
                        break;
                }else{
                }
        }
}

module.exports = schdule;
