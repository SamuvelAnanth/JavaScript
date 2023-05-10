var a=new Date();
console.log(a);

/*new Date();
new Date(milliseconds);     //This method accept single parameter milliseconds which indicates any numerical value. This argument is taken as the internal numeric representation of the date in milliseconds.
new Date(dataString);       //This method accept single parameter datastring which indicates any string value. It is a string representation of a date and return the datastring with data
new Date(year,month,date,hour,minute,second,milliseconds);*/        //This method accepts 7 parameters year,month,date,hour,minute,second,milliseconds

var b=new Date(4000);
console.log(b);

var c=new Date("April 20,2023 7:00:00");
console.log(c);

var d=new Date(2020,11,07,13,34,18,30);
console.log(d);

var e=Date();
console.log(e);                           //Date()  The javascript 

var f=Date.now();
console.log(f);                    //The method used to since 1970. now is the static Date() is always be used date.now()

var g=Date(Date.now());
var h=g.toString();
console.log(h);

var i=new Date();                                                    
var j=i.getDate();                  //getDate() method is used to fetch the date of month from the given date object. The returnvalue  will be an integer between 1 to 31 as well
console.log(j);
                               
var k=i.getDay();                            //getDay method is used to fetch the day of a week(sun-sat) from the given date object
console.log(k);

var l=i.getFullYear();                  //Mothod is used to fetch year from the given date object
console.log(l);

var m=new Date();
m.setDate(20);          //setDate method used to set a date of a month into a date object which is created using the date constructor
var n=m.getDate();                    //date_value it returns the new example updated date of the month which set by setDate Method. The date of the month is an integer value ranging from the 1 to 31st 
console.log(m);
console.log(n);

var o=new Date();
o.setFullYear(2024);                        //setFullYear method used to set full year into a data object
var p=o.getFullYear();
console.log(o);
console.log(p);