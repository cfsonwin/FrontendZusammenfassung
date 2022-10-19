function bannerOnChange(imgCollection, pointerCollection, goLeft, goRight) {
    var adImg = imgCollection;
    var pointer = pointerCollection
    var goLeft = goLeft;
    var goRight = goRight;
    var imgIndex = 0;
    function imgInit(imgList) {
        for (var i = 0; i < imgList.length; i++) {
            imgList[i].style.zIndex = 0;
        }
    }
    function _imgInit(imgList) {
        for (var i = 0; i < imgList.length; i++) {
            imgList[i].style.zIndex = 1;
        }
    }
    function activePointer(pList, index, cName) {
        for (var i = 0; i < pList.length; i++) {
            if (i == index) {
                pList[i].className = cName;
            } else {
                pList[i].className = "";
            }
        }
    }
    function imgChange() {
        imgIndex++;
        if (imgIndex >= adImg.length) {
            imgIndex = 0;
            imgInit(adImg);
        }
        adImg[imgIndex].style.zIndex += 1;
        activePointer(pointer, imgIndex, "active");
    }
    var imgInterval = setInterval(imgChange, 5000);
    goLeft.onclick = function () {
        clearInterval(imgInterval);
        adImg[imgIndex].style.zIndex = 0;
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = 3;
            _imgInit(adImg);
        }
        activePointer(pointer, imgIndex, "active");
        setTimeout(imgInterval = setInterval(imgChange, 5000), 5000);
    }
    goRight.onclick = function () {
        clearInterval(imgInterval);
        imgIndex++;
        if (imgIndex >= adImg.length) {
            imgIndex = 0;
            imgInit(adImg);
        }
        adImg[imgIndex].style.zIndex = 1;
        activePointer(pointer, imgIndex, "active");
        setTimeout(imgInterval = setInterval(imgChange, 5000), 5000);
    }
}

function printLog(FatherId) {
    var logEl, isInitialized = false, _console = {};
    if (isInitialized) { return; }
    var fatherDiv = document.getElementById(FatherId);
    logEl = createElement("div", "log");
    fatherDiv.appendChild(logEl);
    isInitialized = true;
    // _console.log = console.log;
    _console.clear = console.clear;
    console.log = originalFnCallDecorator(log, 'log');
    console.clear = originalFnCallDecorator(clear, 'clear');
    function createElement(tag,cName ) {
        var element = document.createElement( tag );
        element.className = cName;
        return element;
    }
    function originalFnCallDecorator(fn, fnName) {
        return function(){
            //前台打印
            fn.apply(this, arguments);
            if (typeof _console[fnName] === 'function') {
                //后台打印
                _console[fnName].apply(console, arguments);
            }
        };
    }
    function clear() {
        logEl.innerHTML = '';
    }
    function log() {
        var el = createElement('div');
        var val = [].slice.call(arguments).reduce(function(prev, arg) {//
            return prev + ' ' + arg;
        }, '');
        el.textContent = val;
        logEl.appendChild(el);
        // Scroll to last element
        logEl.scrollTop = logEl.scrollHeight - logEl.clientHeight;
    }
}

function bind(obj, eventStr, callback) {
    if (obj.addEventListener) {
        obj.addEventListener(eventStr, callback, false);
    } else {
        obj.attachEvent("on" + eventStr, function() {
            callback.call(obj);
        });
    }
};

function ranPosition(obj, pElement) {
    var colorArr = ["red", "yellow", "blue", "black", "green"];
    var pX = pElement.offsetLeft;
    var pY = pElement.offsetTop;
    var ex1Height = pElement.clientHeight;
    var ex1Width = pElement.clientWidth;
    var sq1Height = obj.clientHeight;
    var sq1Width = obj.clientWidth;
    var PositionX = (ex1Width - sq1Width) * Math.random() + pX;
    var PositionY = (ex1Height - sq1Height) * Math.random() + pY;
    obj.style.left = PositionX + "px";
    obj.style.top = PositionY + "px";
    obj.style.background = colorArr[Math.floor(Math.random() * 5)];
};

function dragableObj(obj, pElement) {
    obj.onmousedown = function(eventOmd) {
        var pX = pElement.offsetLeft;
        var pY = pElement.offsetTop;
        var ex1Height = pElement.clientHeight;
        var ex1Width = pElement.clientWidth;
        var sq1Height = obj.clientHeight;
        var sq1Width = obj.clientWidth;
        var left = 0;
        var top = 0;
        var leftOffset = eventOmd.clientX - obj.offsetLeft;
        var topOffset = eventOmd.clientY - obj.offsetTop;
        pElement.onmousemove = function(event) {
            event = event || window.event;
            left = event.clientX - leftOffset;
            top = event.clientY - topOffset;
            if (left < pX || top < pY) {
                if (left < pX) {
                    left = pX;
                }
                if (top < pY) {
                    top = pY;
                }
            } else if (left > (ex1Width - sq1Width + pX) || top > (ex1Height - sq1Height + pY)) {

                if (left > (ex1Width - sq1Width + pX)) {
                    left = ex1Width - sq1Width + pX;
                }
                if (top > (ex1Height - sq1Height + pY)) {
                    top = ex1Height - sq1Height + pY;
                }
            }
            obj.style.left = left + "px";
            obj.style.top = top + "px";
        };
        pElement.onmouseup = function() {
            pElement.onmousemove = null;
            pElement.onmouseup = null;
        };
        //event.cancelBubble = true;
        document.onmouseup = function() {
            console.log(pElement)
            if (pElement.onmousemove != null) {
                console.log(pElement);
                pElement.onmousemove = null;
                console.log("Move Outside, event cancled.");
            }
        };
    };

}

function objScaleByWheel(obj, pElement) {
    dragableObj(obj, ex2);

    function tFunc(event) {
        var objY = obj.offsetTop;
        if (event.wheelDelta < 0 || event.detail > 0) {
            var newHeight1 = obj.clientHeight - 10;
            if (newHeight1 <= 0) {
                newHeight1 = 5;
            }
            obj.style.height = newHeight1 + "px";
        } else {
            var newHeight2 = obj.clientHeight + 10;
            if ((newHeight2 + objY) > (pElement.offsetTop + pElement.clientHeight)) {
                newHeight2 = pElement.offsetTop + pElement.clientHeight - objY;
            }
            obj.style.height = newHeight2 + "px";
        }
        event.preventDefault && event.preventDefault();
        return false; //取消浏览器的默认行为
        //alert(event.wheelDelta); //-120; 120
        //alert(event.detail); //1;-1
    };
    obj.onmousewheel = tFunc;
    bind(obj, "DOMMouseScroll", tFunc);
};

function numberBlock(obj) {
    obj.onkeydown = function(event) {
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            return false; //对于input 输入是默认行为
        }
    };
}

function moveWithKeyboard(obj, pElement) {
    document.ondblclick = function() {
        var divs = document.getElementsByClassName("ex");
        for (var di = 0; di < divs.length; di++) {
            var _div = divs[di];
            if (_div.ondblclick != null) {
                _div.style.outline = "none";
                document.onkeydown = null;
            }
        }
    }

    pElement.ondblclick = function(event) {
        // pElement.style.outlineColor = "grey";
        pElement.style.outline = "2px solid grey";
        event.cancelBubble = true;
        // 左上右下 37-40
        document.onkeydown = function(eventOKD) {
            var left = obj.offsetLeft;
            var top = obj.offsetTop;
            var bLeft = pElement.offsetLeft;
            var bTop = pElement.offsetTop;
            var bRight = bLeft + pElement.clientWidth - obj.clientWidth;
            var bBottom = bTop + pElement.clientHeight - obj.clientHeight;
            var movePx = 30;
            switch (eventOKD.keyCode) {
                case 37:
                    if (left - movePx < bLeft) {
                        obj.style.left = bLeft;
                    } else {
                        obj.style.left = left - movePx + "px";
                    }
                    break;
                case 38:
                    if (top - movePx < bTop) {
                        obj.style.top = bTop;
                    } else {
                        obj.style.top = top - movePx + "px";
                    }
                    break;
                case 39:
                    if (left + movePx > bRight) {
                        obj.style.left = bRight;
                    } else {
                        obj.style.left = left + movePx + "px";
                    }
                    break;
                case 40:
                    if (top + movePx > bBottom) {
                        obj.style.top = bBottom;
                    } else {
                        obj.style.top = top + movePx + "px";
                    }
                    break;
            }
            return false;
        };
    };

};

function moveWithKeyboard02(obj, pElement) {
    var timer;
    document.ondblclick = function() {
        clearInterval(timer);
        var divs = document.getElementsByClassName("ex");
        for (var di = 0; di < divs.length; di++) {
            var _div = divs[di];
            if (_div.ondblclick != null) {
                _div.style.outline = "none";
                document.onkeydown = null;
            }
        }
    }
    pElement.ondblclick = function(event) {
        pElement.style.outline = "1px solid grey";
        event.cancelBubble = true;
        // 左上右下 37-40
        var movePx = 5;
        var keyInput = 0;
        var left;
        var top;
        var bLeft;
        var bTop;
        var bRight;
        var bBottom;
        timer = setInterval(function() {
            // console.log(keyInput);
            left = obj.offsetLeft;
            top = obj.offsetTop;
            switch (keyInput) {
                case 37:
                    if (left - movePx < bLeft) {
                        obj.style.left = bLeft;
                    } else {
                        obj.style.left = left - movePx + "px";
                    }
                    break;
                case 38:
                    if (top - movePx < bTop) {
                        obj.style.top = bTop;
                    } else {
                        obj.style.top = top - movePx + "px";
                    }
                    break;
                case 39:
                    if (left + movePx > bRight) {
                        obj.style.left = bRight;
                    } else {
                        obj.style.left = left + movePx + "px";
                    }
                    break;
                case 40:
                    if (top + movePx > bBottom) {
                        obj.style.top = bBottom;
                    } else {
                        obj.style.top = top + movePx + "px";
                    }
                    break;
                default:
                    break;
            }
        }, 30);
        document.onkeydown = function(eventOKD) {
            bLeft = pElement.offsetLeft;
            bTop = pElement.offsetTop;
            bRight = bLeft + pElement.clientWidth - obj.clientWidth;
            bBottom = bTop + pElement.clientHeight - obj.clientHeight;
            keyInput = eventOKD.keyCode;
            return false;
        };
        document.onkeyup = function() {
            keyInput = 0;
        };
    };

};
