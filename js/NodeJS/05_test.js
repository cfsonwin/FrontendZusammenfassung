function dataFormat(dStr){
    const dt = new Date(dStr)

    const y = dt.getFullYear()
    const m = addZero(dt.getMonth())
    const d = addZero(dt.getDate())

    const hh = addZero(dt.getHours())
    const mm = addZero(dt.getMinutes())
    const ss = addZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function addZero(n){
    return n>9?n:'0'+n
}

module.exports = dataFormat
