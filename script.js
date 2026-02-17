// // arithmatic operators +,-,/,*,**,++,--

// // console.log("a+b=",a+b)
// // console.log("a-b=",a-b)
// // console.log("a/b=",a/b)
// // console.log("a%b=",a%b)
// // console.log("a**b=",b**b)

// // assignment oprators   =,+=,-=,*=,/=,%=,**=

// // console.log("a=b", a+=b);
// // console.log("a+=b",a+=5);
// // console.log("a**=b",a**=b);
// // console.log("a/=b",a/=b);

// // // comparision operator ==,===,!=,!==,>,<,>=,<=

// // console.log("a==b",a==d)
// // console.log("a!=c",a!=c)

// // // logical operators &&,||,!

// // --------------------------------------------------------------
// // --------5 variabels

// let a = 5;
// let b = 6;
// let c = 5;
// let isStudent = true
// console.log("type of is student is",typeof isStudent)
// let d = "Nitin";
// console.log("type of d =",typeof d);
// console.log("c=c", c == c);

// // ---------------------swaping------

// a = b;
// b = c;
// c = a;
// console.log("a=", a);
// console.log("b=", b);
// console.log("c=", c);

// //     ---------------bio using template literals

// let myname = "Nitin";
// let myage = 22;
// let rollno = "22cs78";
// let myclg = "RPS GOI";
// let internship = "Cut edge technology";
// let bio = `
// Hi Myname is ${myname}
// i m ${myage} years ol,
// my class roll no is ${rollno}
// my clg name is ${myclg}
// i m doing my interships from ${internship}
// `;
// console.log(bio);

// //----------------------check type of 10 values-------

//  let x= 10;
//  console.log("x is a",typeof x);

//  let y = "hello";
//  console.log("y is a",typeof y);

//  let bike  ={
//     bikename : "hornet160",
//     model : 2016,
//     color: "Glossy Black"
//  }
//  console.log("bike is a ",typeof bike);

//  let num1=5;
//  let num2=6;
//  let result = num1>num2 ;
//  console.log("num1 > num2 ",result);
//  console.log("typeof result is", typeof result);

//  let fruits = ("apple,banana,mango");
//  console.log("typeof fruits is" ,typeof fruits);
 
// // ------------------------convert string 100----------

// let number = Number("100")
// console.log(typeof number);

// // true------------------

// console.log("true + 1 is ",true+1)

 // --------if else ----------

// let marks = prompt("enter your marks .....");
// let grade;

// if(marks>=90 && marks<=100){
//     grade="A"
// }else if(marks>=80 && marks<=89){
//     grade="B"
// }
// else if(marks>=70 && marks<=79){
//     grade="C"
// }
// else if(marks>=50 && marks<=69){
//     grade="d"
// }
// else if(marks<50){
//     grade="Go and study....hahahahahahaha"
// }

// console.log("your grade-",grade);

// -----------------------------even odd--------------

// let num = prompt("enter number");

// if(num%2===0){
//     console.log("num is even")
// }
// else if(num%2!==0){
//     console.log("num is odd")
// }
// else{
//     console.log("not a number")
// }


// ----------------------------max value---------------

// let a = prompt("enter 1st number");
// let b = prompt("enter 2st number");
// let c = prompt("enter 3st number");
// if(a>b && a>c){
//     console.log("1st number is greater");
// }else if(b>a && b>c){
//     console.log("2nd is greater");
// }else if(c>a && c>b){
//     console.log("3rd is greater")
// }

// ------------------loops-----------

// i=0
// for(let i=0;i<=10;i++){
//     let table= 7*i;
//    console.log("7*",i,"=", table)
// }

// ==========================

// let a = [1,2,3,4,5,6];
// let remove = 6
// for (let i = 0;i<a.length;i++){
//     if(a[i]===remove){
//         a.splice(i,1); 
//         console.log(a)
        
//     }
// }

// console.log(typeof remove) 

// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


// ------------------------while loops-------------
// i=12;
// while(i<=12){
//     console.log("hello world")
//     i++;
// }
// ------------------------do while loops----------------

// let i =0;
// do{
//     console.log("do while loops")
//     i++;
// }while(i<=12);

// ---------------------for of ------------only for string and array----------
// let str = "Nitin";
// let size = 0;
// for(let i of str){
//     console.log("i-",i)
//     size++;
    
// }
// console.log("size of string",size);

// ---------------------for in ------------itrator (object and arrays) ----------
 
// let obj = {
//     name: "nitin",
//     age:20,
//     class:"btech",
// }
// for(let key in obj){
//     console.log("key",key,"value=",obj[key]);

// }
// -----------------------------------------number game------------
// let gameNum = "25";
// let userNum = prompt("enter number");
// while (userNum!= gameNum){
//     userNum= prompt("again");
// }
// console.log("you are right")

// ----------------------------string-----------

// let str = "hello world how are you"
// console.log(str.length)
// let newstr = str.toUpperCase();

// let str = "Neeteen";
// let size = 0;
// for (let i of str){
//     console.log(i);
//     size++;
// }

// -------------------------------------------pattern print---------------------------

for(i=1;i<=8;i++){
for(j=1;j<=i;j++){
    document.write("*");
}
document.write("<br>");
}