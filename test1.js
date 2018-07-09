const arab = require('./getArab')
const  fs = require("fs")

const targetFilePath = "./wholebook.txt"
let path = "./book";
function getFileList() {
    let obj1 = {}
    let files = fs.readdirSync(path);
    for (let i = 0; i < files.length; i++) {
        let reg = new RegExp("/\|第|章|.txt", "g")
        let str = files[i].replace(reg, "")
        let n = arab.getArab(str)
        obj1[n] = files[i]
    }
    return obj1
}

let list = getFileList()
for( let i in list)
{
    let fileFullPath = path+"/"+list[i]
    let data = fs.readFileSync(fileFullPath)
    fs.appendFileSync(targetFilePath,data)
}






// let s = "一千零六兆六千零八十九亿一千二百零四万零一"
//
// console.log(arab.getArab(s))