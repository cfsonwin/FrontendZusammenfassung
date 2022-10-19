window.onload = function () {
    const contentArray = ["HTML", "CSS", "JS", "NODEJS", "REACT", "ES", "AJAX", "ANGULAR"];
    function backTop() {
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.className = "backTop";
        var a = document.createElement("a");
        div.appendChild(a);
        a.innerHTML = "^";
        a.href = "#";
    }
    backTop();
    var topBarButton = document.getElementsByClassName("selector")[0];

    var titles = document.getElementsByClassName("title")[0];
    var topBarDropdown = document.getElementsByClassName("dropdown")[0];
    var topics = document.getElementsByClassName("topics")[0];
    var tDisplay = 0;
    topBarButton.onclick = function (event) {
        var tHeight = parseInt(titles.offsetHeight)
        if (tHeight == 49 * contentArray.length) {
            titles.style.height = 49 + "px";
        } else if (tHeight == 49) {
            titles.style.height = 49 * contentArray.length + "px";
        }
        if (topics.style.display == "flex") {
            topics.style.display = "none";
        }
        event.cancelBubble = true;
    };

    topBarDropdown.onclick = function (event) {
        var tHeight = parseInt(titles.offsetHeight);
        if (tHeight == 49 * contentArray.length) {
            // console.log("---" +tHeight);
            titles.style.height = 49 + "px";
        }
        if (topics.style.display == "flex") {
            topics.style.display = "none";
        } else {
            topics.style.display = "flex";
        }
        event.cancelBubble = true;
    };
    window.onclick = function () {
        var tHeight = parseInt(titles.offsetHeight);
        if (tHeight == 49 * contentArray.length) {
            // console.log("---" +tHeight);
            titles.style.height = 49 + "px";
        }
        if (topics.style.display == "flex") {
            topics.style.display = "none";
        }
    }
    var topics = document.getElementsByClassName("topics")[0];
    var urlArray;
    var urlObj = {
        AJAX: [
            "Ajax",
            "./0918_AJAX_Introduction.html",
            "./0920_AJAX_HTTP_Express.html",
            "./0920_AJAX_Example1.html",
            "./0921_AJAX_IE_网络超时&异常_重复请求.html",
            "./0921_AJAX_withJQuert_Axios.html"
        ],
        ES: [
            "ES",
            "./0913_ES_let_const.html"
        ],
        NODEJS: [
            "Node.JS",
            "./0914_NodeJS_Introduction.html"
        ],
        REACT: [
            "React",
            "./1005_React_Introduction.html",
            "./1007_React_Component.html"
        ],
        JS: [
            "Javascript",
            "./0716_JS_introduction.html",
            "./0719_JS_运算符.html",
            "./0719_JS_循环_判断.html",
            "./0801_JS_对象_数据类型.html",
            "./0804_JS_函数_作用域_this_工厂对象_原型对象.html",
            "./0804_JS_总结_属性检查_垃圾回收.html",
            "./0805_JS_Math_包装类_String补充.html",
            "./0805_JS_数组_Date_函数方法与参数.html",
            "./0806_JS_正则表达.html",
            "./0807_JS_DOM_Node_事件_查询.html",
            "./0811_JS_DOM练习.html",
            "./0812_JS_BOM.html",
            "./0816_JS_Window的方法.html",
            "./0918_JS_总复习.html"
        ],
        CSS: [
            "CSS",
            "./0822_CSS_简介_选择器.html",
            "./0823_CSS_单位_文档流_盒模型.html",
            "./0824_CSS_盒子模型_布局_Inline_Display.html",
            "./0826_CSS_Float_Position.html",
            "./0827_CSS_字体_IconFont_Font属性.html",
            "./0829_CSS_BackgroungImage.html",
            "./0901_CSS_渐变_表格_表单.html",
            "./0902_CSS_补充.html",
            "./0904_CSS_过渡_动画_变形.html",
            "./0905_CSS_Less_弹性盒.html",
            "./0906_CSS_像素_媒体查询.html"
        ],
        HTML: [
            "HTML"
        ],
        ANGULAR: [
            "Angular",
            "0919_Angular_introduction.html"
        ],

    }
    for(let content of contentArray){
        let titleChlid = document.createElement("a");
        
        if(content!="HTML"){
            titleChlid.href = urlObj[content][1];
        }else{
            titleChlid.href = "./0821_HTML_元素.html";
            // titleChlid.className = "active";
        }
        titleChlid.innerHTML = urlObj[content][0]
        titles.appendChild(titleChlid)
        if(document.getElementById(content)){
            urlArray = urlObj[content].slice(1);
            createChildTopicNode(urlArray);
            titleChlid.className = "active";
        }
    }
    function createTopicInnerHtml(url) {
        var urlString = url;
        var urlArray = urlString.split("_");
        var innerHtml = urlArray[0].slice(2);
        for (var i = 2; i < urlArray.length - 1; i++) {
            innerHtml += " ";
            innerHtml += urlArray[i];
        }
        innerHtml += " ";
        innerHtml += urlArray[i].split(".")[0];
        return innerHtml
    }
    function createChildTopicNode(urlArray) {
        for (var url of urlArray) {
            let topicChlid = document.createElement("a");
            topicChlid.href = url;
            topicChlid.innerHTML = createTopicInnerHtml(url);
            topics.appendChild(topicChlid);
        }
    }

}