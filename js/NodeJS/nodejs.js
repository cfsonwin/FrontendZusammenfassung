let btn01 = document.getElementById("btn01")
let btn02 = document.getElementById("btn02")

btn01.onclick = () => {
    // console.log("点击按钮")

    const pl = new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()

        xhr.open("POST", "http://127.0.0.1/login")
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var parmas = 'username=Lawi&password=admin123';
        xhr.send(parmas)
        console.log("发送请求")
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // console.log("请求成功")
                    res(xhr.response)
                } else {
                    rej(xhr.response.msg)
                }
            }

        }
    })

    pl.then(value => { alert(value) }, reason => { alert(reason) })

}

btn02.onclick = () => {
    // console.log("点击按钮")

    const ph = new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()

        xhr.open("GET", "http://127.0.0.1/")
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    res(xhr.response)
                } else {
                    rej(xhr.status)
                }
            }

        }
    })

    ph.then(value => { alert(value) }, reason => { alert(reason) })

}