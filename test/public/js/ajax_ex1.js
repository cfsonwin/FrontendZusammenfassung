var btn1 = document.getElementById("btn1");
btn1.onclick = function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8000/server");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const ex = document.getElementsByClassName("ex")[0];
            ex.innerHTML = xhr.status + " <br> " + xhr.statusText + " <br> " + xhr.getAllResponseHeaders() + " <br> " + xhr.response;
        }
    }
};
var ex2 = document.getElementsByClassName("ex")[1];
ex2.onmouseover = function () {
    const xhr2 = new XMLHttpRequest();
    xhr2.open("POST", "http://127.0.0.1:8000/server");
    // content-type 设置请求体类型的
    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    // 自定义请求头    
    xhr2.setRequestHeader("name", "Lawi")
    xhr2.send("a='post'"); // 或者json格式
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {

            ex2.innerHTML = xhr2.response;
        }
    }
}
var ex3 = document.getElementsByClassName("ex")[2];
window.onkeydown = function () {
    const xhr3 = new XMLHttpRequest();
    xhr3.responseType = 'json';
    xhr3.open("GET", "http://127.0.0.1:8000/server-json");
    xhr3.send(); // 或者json格式
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState === 4 && xhr3.status === 200) {
            // let red = JSON.parse(xhr3.response)
            ex3.innerHTML = xhr3.response.name;
            
        }
    }
window.onkeyup = function () {
    setTimeout(() => {
        if(window.onkeydown){
            ex3.innerHTML = null;
        }
    }, 5000);
}

}