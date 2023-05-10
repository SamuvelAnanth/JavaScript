var lights=document.getElementById("trafficlight");
lights.className="lights";

var stop1=document.getElementById("stop");
stop1.className="stop";

var ready=document.getElementById("ready");
ready.className="stop";

var go=document.getElementById("go");
go.className="stop";

var stopbtn=document.getElementById("stopButton");
stopbtn.className="btn buttons allbtns";

var readybtn=document.getElementById("readyButton");
readybtn.className="btn buttons allbtns";

var gobtn=document.getElementById("goButton");
gobtn.className="btn buttons allbtns";

function stoplight(){
    stopbtn.style.backgroundColor="red";
    stop1.style.backgroundColor="red";
    readybtn.style.backgroundColor="rgb(0, 26, 65)";
    ready.style.backgroundColor="white";
    gobtn.style.backgroundColor="rgb(0, 26, 65)";
    go.style.backgroundColor="white";    
}
function readylight(){
    readybtn.style.backgroundColor="rgb(220, 227, 19)";
    ready.style.backgroundColor="rgb(220, 227, 19)";
    stopbtn.style.backgroundColor="rgb(0, 26, 65)";
    stop1.style.backgroundColor="white";
    gobtn.style.backgroundColor="rgb(0, 26, 65)";
    go.style.backgroundColor="white";
    }
function golight(){
    gobtn.style.backgroundColor="green";
    go.style.backgroundColor="green";
    stopbtn.style.backgroundColor="rgb(0, 26, 65)";
    stop1.style.backgroundColor="white";
    readybtn.style.backgroundColor="rgb(0, 26, 65)";
    ready.style.backgroundColor="white";
}