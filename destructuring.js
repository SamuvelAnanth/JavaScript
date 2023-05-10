let person={
    name:"Samuvel Ananth",
    age:24,
    gender:"Male"
}
let {name,age,gender}=person;
let {name:name1,age:age1,gender:gender1}=person;  //rename the variable name
console.log(name1);
console.log(age1);
console.log(gender1);

var arr=[1,"Samuvel",true,43.50,0,654654];

var [ , , ,x,y,z]=arr;

console.log(x);

var arrValue=[20];
var {c,a=20,b=30}=arrValue;
console.log(a);
console.log(c);

var obj={
    name:"Samuvel Ananth",
    age:24,
    city:"Virudhunagar"
}
var {city,state="Tamilnadu"}=obj;
console.log(state);