var num=[2,3,4,5,6,7,8,9];
var num2=num.map(sample);
function sample(value){
  return value*2;
}
console.log(num2);
var a=[2,3,4,5,6,7,8,9];
var b=a.reduce(sum);                    //used to calculate the sum of numbers in the array
function sum(total,value){
  return total+value;
}
console.log(b);
var f=[2,3,4,5,6,7,8,9];
var g=f.filter(data);
function data(value){
  return value>4;
}
console.log(g);