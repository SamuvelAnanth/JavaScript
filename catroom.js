var bulb_off=document.getElementById("bulboff");
var darkcat=document.getElementById("darkcat");
var switchmode=document.getElementById("switch");
var onbtn=document.getElementById("onbtn");
var offbtn=document.getElementById("offbtn");
function on(){
    bulb_off.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    darkcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchmode.textContent="Switched On";
    onbtn.style.backgroundColor="green";
    offbtn.style.backgroundColor="grey";
}
function off(){
bulb_off.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
darkcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
switchmode.textContent="Switched Off";
onbtn.style.backgroundColor="grey";
offbtn.style.backgroundColor="red";
}