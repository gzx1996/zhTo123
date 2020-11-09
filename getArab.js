let number = {"壹": 1, "一": 1, "贰": 2, "二": 2,"两":2, "叁": 3, "三": 3, "肆": 4, "四": 4, "伍": 5, "五": 5, "陆": 6, "六": 6, "柒": 7, "七": 7, "捌": 8, "八": 8, "玖": 9, "九": 9, "零": 0}
let times = {"拾":10, "十":10, "佰":100, "百":100, "仟":1000, "千":1000, "万":10000, "亿":100000000, "兆":1000000000000, "京":10000000000000000}

function splitStr(s) {
    let sum = 0
    let status = 0
    for (let i in s) {
        if (s[i] == "万" || s[i] == "亿" || s[i] == "兆" || s[i] == "京") {
            let head = s.split(s[i])[0]
            let tail = s.split(s[i])[1]
            let res = handleNumber(head)
            sum += res * times[s[i]]
            status = 1
            return splitStr(tail)
        }
    }
    if (status == 0 && s.length > 0) {
        sum += (handleNumber(s))
    }
    return sum
}
function handleNumber(numberStr) {
    let sum1 = 0
    let status = 0
    for (let i in numberStr) {
        if (times[numberStr[i]] != undefined) {
            sum1 += times[numberStr[i]] * number[numberStr[i - 1]]
            status = 1
        }
        if (numberStr.length > 1 && i == numberStr.length - 1 && number[numberStr[i]] != undefined) {
            sum1 += number[numberStr[i]]
            status = 1
        }
    }
    if (status == 0) {
        sum1 += number[numberStr]
    }
    return sum1
}

module.exports = {
    getArab: function (s) {
        let result = splitStr(s)
        return result
    }
}


