var buttonclick = " "
var len = document.querySelectorAll(".song").length;
let flag =false;
let flag1 = false;
for(var i=0;i<len;i++){
    document.querySelectorAll("img")[i].addEventListener("click",function(){
        flag = true;
    })
    document.querySelectorAll(".play")[i].addEventListener("click",function(){
        flag1 = true;
    })
}
for(var i=0;i<len;i++){
    document.querySelectorAll(".song")[i].addEventListener("click",function(){
        buttonclick = this.querySelector("h3");
        document.querySelector("marquee").innerText = "Playing "+buttonclick.innerText;
        if(flag){
            play(buttonclick.innerText);
        }
        flag = false;
        if(flag1){
            play(buttonclick.innerText);
        }
        flag1 = false;
});
}

var audio = new Audio();
var sname = " ";
function play(name){
    if(audio.paused===false){
        if(sname===name){
            audio.pause();
            play(name);
        }
        else{
            audio.pause();
            play(name);
        }
    }
    else{
        sname = name;
        audio = new Audio("songs/"+name+".mp3");
        audio.play();
        audio.onloadedmetadata = function(){
            console.log(audio.duration);
        }
    }
}

document.querySelector(".btn1").addEventListener("click",function(){
    audio.pause();
});
document.querySelector(".btn2").addEventListener("click",function(){
    audio.play();
});

function search(){
    let svalue = document.getElementsByClassName("search")[0].value;
    svalue = svalue.toLowerCase();
    let content = document.querySelectorAll(".col-lg-4");

    for(var i=0;i<content.length;i++){
        if(!content[i].innerHTML.toLowerCase().includes(svalue)){
            content[i].style.display = "none";
        }
        else{
            content[i].style.display ="list-item"; 
        }
    }
}

var name1=" ";

var len2 = document.querySelectorAll(".title").length;

for(var i=0;i<len2;i++){
    document.querySelectorAll(".title")[i].addEventListener("click",function(){
        var name = this.querySelector("h2");
        name1 = name.innerText;
        console.log("."+name.innerText);
        show(name.innerText);
    });
}

document.querySelector(".back-btn").addEventListener("click",function(){
    back(name1);
});

document.querySelector(".footer1").style.display = "none";

function show(title){
    document.querySelector(".back-btn").style.display = "block";
    document.querySelector("."+title).style.display = "block";
    document.querySelector(".main-titles").style.display = "none";
    document.querySelector(".footer1").style.display = "block";
}
function back(name1){
    document.querySelector(".footer1").style.display = "none";
    document.querySelector(".back-btn").style.display = "none";
    document.querySelector("."+name1).style.display = "none";
    document.querySelector(".main-titles").style.display = "block";
}

var x = window.matchMedia("(max-width:1024px) and (min-width: 769px)")

if(x.matches){
    document.querySelector(".fa-pause-circle").classList.add("fa-4x");
}
else{
    document.querySelector(".fa-pause-circle").classList.remove("fa-4x");
}
