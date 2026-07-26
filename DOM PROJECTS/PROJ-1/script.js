var con = document.querySelector("#container");
var lov = document.querySelector("i");

con.addEventListener("dblclick",function(){
    lov.style.transform = "translate(-50%,-50%) scale(2)";
    lov.style.opacity = 0.8;

    setTimeout(function(){
        lov.style.opacity = 0;

    },2000)

    setTimeout(function(){
        lov.style.transform = "translate(-50%,-50%) scale(0);"
    },4000)
});