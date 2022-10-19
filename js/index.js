window.onload = function(){
    var imgCollection = document.getElementsByClassName("banner-img");
    var pointerCollection = document.getElementsByClassName("pointer")[0].getElementsByTagName("div");
    var goLeft = document.getElementById("go-left");
    var goRight = document.getElementById("go-right");
    console.log(imgCollection);
    bannerOnChange(imgCollection, pointerCollection, goLeft, goRight);
}