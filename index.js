var buttonclick = " "
var len = document.querySelectorAll(".song").length;
let flag =false;
let flag1 = false;
var end = false;
var p1 = false;
var value = 0;
var click = false;
for(var i=0;i<len;i++){
    document.querySelectorAll("img")[i].addEventListener("click",function(){
        flag = true;
        info();
    })
    document.querySelectorAll(".play")[i].addEventListener("click",function(){
        flag1 = true;
        info();
    })
}
var lentitle = 0
var titlename = " ";
function titleshow(text){
    lentitle = document.querySelectorAll("."+text+" .song").length;
    console.log("."+text+" .song");
    titlename = "."+text+" .song h3";
    console.log(lentitle);
}


function info(){
    for(var i=0;i<len;i++){
        document.querySelectorAll(".song")[i].addEventListener("click",function(){
            buttonclick = this.querySelector("h3");
//             document.querySelector("marquee").innerText = "Playing "+buttonclick.innerText;
            p1 = true;
            click = true;
            if(flag){
                document.querySelector("marquee").innerText = "Playing "+buttonclick.innerText;
                play(buttonclick.innerText);
                document.querySelector(".btn1").style.display = "inline";
                document.querySelector(".btn2").style.display = "none";
            }
            flag = false;
            if(flag1){
                document.querySelector("marquee").innerText = "Playing "+buttonclick.innerText;
                play(buttonclick.innerText);
                document.querySelector(".btn1").style.display = "inline";
                document.querySelector(".btn2").style.display = "none";
            }
            flag1 = false;
            if(p1===true){
                for(var j=0;j<len;j++){
                //console.log(j);
                    if(document.querySelectorAll(".song h3")[j].innerText===buttonclick.innerText){
                        value = j;
                    }
                }
                p1 = false;
            } 
        });
    }
    if(end===true){
    // if(p1<len){
    //     console.log(p1);
    //     if(buttonclick === document.querySelectorAll(".song h3")[p1].innerText){
    //         p1 += 1;
    //         play(document.querySelectorAll(".song h3")[p1].innerText);
//                document.querySelector(".btn1").style.display = "block";
//                 document.querySelector(".btn2").style.display = "none";
    //     }
    //     else{
    //         console.log(document.querySelectorAll(".song h3")[p1].innerText);
    //         play(document.querySelectorAll(".song h3")[p1].innerText);   
    //         p1 += 1;
//                document.querySelector(".btn1").style.display = "block";
//                 document.querySelector(".btn2").style.display = "none";
    //     }
    // }
        if(value<lentitle){
            value += 1;
            buttonclick = document.querySelectorAll(titlename)[value].innerText;
            console.log(buttonclick);
            document.querySelector("marquee").innerText = "Playing "+buttonclick;
            play(buttonclick);
            document.querySelector(".btn1").style.display = "inline";
            document.querySelector(".btn2").style.display = "none";
        }
        else{
            value = 0;
            buttonclick = document.querySelectorAll(titlename)[value].innerText;
            console.log(buttonclick);
            document.querySelector("marquee").innerText = "Playing "+buttonclick;
            play(buttonclick);
            document.querySelector(".btn1").style.display = "inline";
            document.querySelector(".btn2").style.display = "none";
        }
            
    }
}
console.log(buttonclick);
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
        audio.onended = function(){
            end = true;
            console.log("ended");
            info();
        }
    }
}

function next(){
    if(value>=0){
        value += 1;
        buttonclick = document.querySelectorAll(titlename)[value].innerText;
        console.log(buttonclick);
        document.querySelector("marquee").innerText = "Playing "+buttonclick;
        play(buttonclick);
        document.querySelector(".btn1").style.display = "inline";
        document.querySelector(".btn2").style.display = "none";
        click = true;
    }
}

document.querySelector(".btn3").addEventListener("click",function(){
    next();    
})

document.querySelector(".btn1").addEventListener("click",function(){
    audio.pause();
    if(click){
        document.querySelector("marquee").innerText = "Paused "+buttonclick.innerText;
    }
    document.querySelector(".btn2").style.display = "inline";
    document.querySelector(".btn1").style.display = "none";
});
document.querySelector(".btn2").addEventListener("click",function(){
    audio.play();
    console.log(click)
    if(click){
        document.querySelector("marquee").innerText = "Playing "+buttonclick.innerText;
    }
    document.querySelector(".btn1").style.display = "inline";
    document.querySelector(".btn2").style.display = "none";
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

let pass = false;

var len4 = document.querySelectorAll(".titleimg").length;
console.log(len4);
for(var i=0;i<len4;i++){
    document.querySelectorAll(".titleimg")[i].addEventListener("click",function(){
        pass = true;  
    });
}
for(var i=0;i<len2;i++){
    document.querySelectorAll(".title")[i].addEventListener("click",function(){
        if(pass){
            var name = this.querySelector("h2");
            name1 = name.innerText;
            console.log("."+name.innerText);
            show(name.innerText);
            titleshow(name.innerText);
        }
        pass = false;
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
    document.querySelector(".copyright").style.display = "none";
}
function back(name1){
    document.querySelector(".footer1").style.display = "none";
    document.querySelector(".back-btn").style.display = "none";
    document.querySelector("."+name1).style.display = "none";
    document.querySelector(".main-titles").style.display = "block";
    document.querySelector(".copyright").style.display = "block";
}

var x = window.matchMedia("(max-width:1024px) and (min-width: 769px)")

var len3 = document.querySelectorAll(".s1").length;
if(x.matches){
    document.querySelector(".btn1").classList.add("fa-5x");
    document.querySelector(".btn2").classList.add("fa-5x");
    for(var i=0;i<len3;i++){
        document.querySelectorAll(".s1")[i].classList.add("fa-5x");
    }
    document.querySelector(".back-btn").classList.add("btn-lg");
}
else{
    document.querySelector(".btn1").classList.remove("fa-5x");
    document.querySelector(".btn2").classList.remove("fa-5x");
    for(var i=0;i<len3;i++){
        document.querySelectorAll(".s1")[i].classList.remove("fa-5x");
    }
}

document.addEventListener("backbutton",function(){
    document.querySelector(".footer1").style.display = "none";
    document.querySelector(".back-btn").style.display = "none";
    document.querySelector("."+name1).style.display = "none";
    document.querySelector(".main-titles").style.display = "block";
    document.querySelector(".copyright").style.display = "block";
},true);
