var heartchange=document.getElementById("heart"),value;
function colorchange(){
    var tochange=parseInt(heartchange);
    heartchange+=1;
    if(heartchange%2==0){
        document.getElementById(heart).innerHTML="<svg style='color:'red''>"+heartchange+"</svg>";
    }
}
var product={
    prod_img:"https://5.imimg.com/data5/BG/UM/MY-23375112/61-500x500.jpg",
    prod_name:"Classic Polo",
    prod_color:"CYAN",
    prod_price:750
}
var image=document.getElementById("pro_img");
    image.src=product.prod_img;
    image.style.height="200px";
var product_name=document.getElementById("pro_name");
    product_name.innerHTML=product.prod_name;
var prod_color=document.getElementById("pro_color");
    prod_color.innerHTML=product.prod_color;
var prod_price=document.getElementById("pro_price");
    prod_price.innerHTML=product.prod_price;
function countincrement(){
    var incre=parseInt(document.getElementById("count").innerText);
    incre=incre+1;
    document.getElementById("count").innerHTML=incre;
    var totalprice=incre*product.prod_price;
    document.getElementById("total").innerHTML=totalprice;
}
function countdecrement(){
    var incre=parseInt(document.getElementById("count").innerText);
    incre=incre-1;
    document.getElementById("count").innerHTML=incre;
    var totalprice=incre*product.prod_price;
    document.getElementById("total").innerHTML=totalprice;
}