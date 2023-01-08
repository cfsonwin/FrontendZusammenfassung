let btn = document.getElementById("btn01")
let result = document.getElementById("result")
let btn02 = document.getElementById("btn02")

let code = document.getElementById("code")
function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1
}

// btn.addEventListener('click', ()=>{
//     console.log("dianji")
// })

// btn.onclick = ()=>{

//     setTimeout(()=>{
//         let n = rand(1, 100)
//         if(n <= 30){
//             result.style.color = "red"
//             result.innerHTML = "恭喜您中奖了！中奖号码为：" + n
//         }else{
//             result.style.color = "black"
//             result.innerHTML = "您的号码为："+n+"，再接再厉吧！"
//         }
//     }, 1000)
// }
btn.onclick = ()=>{
    const p = new Promise((resolve, reject) => {
        console.log("开始定时器")
        setTimeout(() => {
            let n = rand(1, 100)
            if (n <= 30) {
                resolve(n)
            } else {
                reject(n)
            }
        }, 1000)
    })
    
    p.then(
        (n) => {
            result.style.color = "red"
            result.innerHTML = "恭喜您中奖了！中奖号码为：" + n
        },
        (n) => {
            result.style.color = "black"
            result.innerHTML = "您的号码为：" + n + "，再接再厉吧！"
        },
    )
}


btn02.onclick = ()=>{

    const ps = new Promise((res, rej)=>{
        const xhr = new XMLHttpRequest()

        xhr.open("GET", "http://127.0.0.1/secret")
    
        xhr.send()
    
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    res(xhr.response)
                    // code.innerHTML=xhr.response
                }else{
                    rej(xhr.status)
                    // console.log(xhr.status)
                    // code.innerHTML=xhr.status
                }
            }
            
        }
    })

    ps.then(value=>{code.innerHTML=value}, reason=>{code.innerHTML=reason})

    
}

