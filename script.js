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


// ---------------------------Question 1-50------------------

// que 1
// let myName = "nitin"
// console.log(myName);

// q2
// let age;
// age = 25;
// console.log(age)

// q3
// const country = "india";
// console.log(country)

// q4
// let value = 25;
// console.log(value)
// value = 26;
// console.log(value)

// q5
// const a = 2;
// console.log(a)
// a = 3;
// console.log(a)
// Uncaught TypeError: Assignment to constant variable.

// q6
// let name = "string"
// let num= 22;
// let value = true;
// let a ;
// console.log(typeof a);
// let b= null;
// console.log(b);

// q7
// let str = "hi"
// console.log(typeof str);

// q8
// let a=25;
// console.log(typeof a);

// // q9
// let boo=true;
// console.log(typeof boo);

// // q10
// let nu= null;
// console.log(typeof nu)

// q11 to 15
// let naam = "hello"//string
// console.log(typeof "hello")//string
// console.log(typeof 100)//Number
// console.log(typeof true)//boolean
// console.log(typeof undefined)//undefined
// console.log(typeof null)//object

// q16 to 25
// console.log(10+5);//15
// console.log(10-5);//5
// console.log(10*5);//50
// console.log(10/2);//5
// console.log(10%3);//1
// console.log(5=="5");//true
// console.log(5==="5");//false
// console.log(10>5);//true
// console.log(10<5);//false
// console.log(true&&false)//false

// q26 --number is even or odd
// let num = prompt("enter any number")
// if(num%2===0){
//     console.log("even")
// }else if(num%2!==0){
//     console.log("odd")
// }

// q27--adult minor
// let age = prompt("enter age")
// let result = age>=18 ? "adult":"minor";
// console.log(result);

// q28--positive or negative
// let num = -10;
// if(num>=0){
//     console.log("positive");
// }
// else if(num<0){
//     console.log("negative")
// }

// q29 largest of 2num
// let a = 21; 
// let b = 21; 
// if(a>b){
//     console.log("a is greater")
// }else if(a==b ){
//     console.log("equal number")
// }else{
//     console.log("b is greater")
// }

//q30 largest of 3num
// let a = 21; 
// let b = 2;
// let c = 20;
// if(a>b && a>c){
//     console.log("a is greater")
// }else if(b>a && b>c ){
//     console.log("b is greater")
// }else if(c>a && c>b){
//     console.log("c is greater")
// }

//q31 - num is zero
// let num = 0;
// if (num === 0){
// console.log("num is zero")
// }else{
//     console.log(num)
// }

// q32 -- grade system
// let number = 81;
// let grade;
// if(number>=90 && number<=100){
//     console.log(grade="A")
// }else if (number>=80 && number<90){
//     console.log(grade= "B")
// }
// else if (number>=70 && number<80){
//    console.log(grade= "C")
// }
// else if (number<70){
//     console.log(grade= "Fail")
// }

// q33--num d by 5
// let num = 120;
// if(num%5===0){
//     console.log("number is divisible by 5")
// }else{
//     console.log("not divisible by 5")
// }

// q34-- d by 3-5
// let num = 33;
// if(num%5===0){
//     console.log("divisible by 5");
// }else if(num%3===0){
//     console.log("divisible by 3");
// }else if(num%5===0 && num%3===0){
//     console.log("num is divisible by both 3 and 5")
// }else{
//     console.log("not divsible by 3 and 5 ")
// }

// q35 -- leap year
// let year = 2020;
// if((year%4===0 && year%100 !==0) || (year%400===0)){
//     console.log(year+"this is a leap year");
// }

// else{
//     console.log(year+"not a leap year");
// }


// no % 400===0 || (no %4===0 && no%100 !==0)

// --------------------------ternary operator---------------------

// q36 adult minor
// let age = 18;
// let result = age>=18 ? "adult" : "minor";
// console.log(result);

// q37 pass fail
// let num = 32;
// let result = num>=40 ? "pass": "fail";
// console.log(result);

//q38-- even odd
// let num = 1;
// let result = num%2===0 ? "even":"odd";
// console.log(result);

// q39 +ive = -tive
// let num = -10;
// let result = num>=0 ? "positive" : "negative";
// console.log(result);

// q40 greater of 2 num
// let a = 1;
// let b = 0;
// let result = a>b ?"greater is a":"b is greater";
// console.log(result);

// ---------------------------loops--------------------

// q41--- num 1 to 10
// for (i=1;i<=10;i++){
//     console.log(i);
// }

// q42---10 to 1
// for (i=10;i>=1;i--){
//     console.log(i);
// }


// q43 even
// for (i=1; i<=20;i++){
//     if(i%2===0){
//         console.log(i = "even")
//     }
    
// }

// q44 odd
// for (i=1; i<=20;i++){
//     if(i%2!==0){
//         console.log(i, "odd")
//     }
    
// }

// 45-- multip of 5
// let table = 5;
// for(i=1;i<=10;i++){
//     console.log("5 * ",i , "=" ,table*i);
// }

// q47
// let num = 1;
// while(num<=10){
//     console.log(num);
//     num++;
// }

// 46
// let sum = 0;
// for(i=1;i<=10;i++){
//     sum+=i;

// }
// console.log(sum);


// 48
// let temp = `
// *
// **
// *
// **
// ***
// `
// console.log(temp);

// q49
// for(i=1;i<=100;i++){
//     if(i%5===0){
//         // console.log("divisible by 5");
//         console.log(i);
//     }
// }

// 50
// for(i=50;i>=1;i--){
//     console.log(i)
// }

// ---------------------------------Function------------
// function greet(mname){
//     console.log("HI" ,""+mname);
// }

// greet("BONI")

// function add(a,b){
//     // console.log(a+b);
//     return a+b;

// }
// let sum = add(5,6)
// console.log(sum);


// function isEven(number){
//     return number%2===0 ? true : false
// }
// console.log(isEven(10));


// -----------arrow function=--------------
// const add = (a,b)=> a+b;
// console.log(add(3,5))

// ---------default parameter ------------------
// function mname(name="BONI"){
//     console.log("HIII","",name);
// } 
// mname()

// -----------------------------array-----------------

// let bikeitems = ["handlebar","mirrors","chain"]
// bikeitems.push("sproket","engine oil");
// console.log(bikeitems);

// let str = "NItinghjhgfghjhgfghj";
// let str2 = str.toUpperCase();
// const count = [...str2].reduce((acc,alpha) => {
//     acc[alpha ]=(acc[alpha]|| 0) +1;
//     return acc;
// },[])
// console.log(count)


// ---------------------------function-------------

// let add=function sum(a,b){
//     return a+b;

// }
// sum(12,13)
//  console.log(add)

// ----------------------------Array--------------

// let num = [1,2,3,4,5];
// let b = num.toString();
// let c = num.join(" Hi ");
// console.log(num,b,c);

// ---push---add last
// let arr = [1,2,3];
// arr.push("j");
// arr.push("h");
// console.log(arr); //1,2,3,'j', 'h'

// ----pop--- remove from last 
// let arr = ["HII","NITIN","BONI"];
// arr.pop();
// console.log(arr);

//-----shift---remove from start ----shift and upshift down performance due to add or remove element from the start --use less
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.shift();
// console.log(arr) 

// ---unshift-----add start 
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.unshift(11);
// console.log(arr) 

// -------slice----
// let arr = [1,2,3,4,5,6]
// arr.slice(1,4)
// console.log(arr)


// ------------------------------------------------test 19226----------------------------------

// Q9 prints hello World
// function myFunction(){
//     console.log("Hello world");
// }
// myFunction();

// Q10 Prints your Name
// function myName(){
//     console.log("Nitin");
// }
// myName()

// let Name = myName();

// Q11 takes no and print it Html

 function submit(){
        let num = document.getElementById("userNum").value;
        document.getElementById("Useroutput").innerText = num;

    }

// Q12return sum of 2 number
function ADD(){
    let num1 = Number(document.getElementById("userNum1").value);
    let num2 = Number(document.getElementById("userNum2").value);
    let result = num1+ num2;
    document.getElementById("result").innerText = result;

}


// Q13 square of number
function Square(){
   let  num = Number(document.getElementById("sqNum").value);
   let result = Number(num*num);
    document.getElementById("sqresult").innerText = result;

}

// Q14 even odd.
function isEven(){
    let num = Number(document.getElementById("num").value);
    let result = num%2 ===0  ? "even" : "odd";
    document.getElementById("ev-od-result").innerText=result;
    }


// Q15 arrow fn 2numbers
//  let result = (a,b) => a+b ;
//  console.log(result(1,2))

// Q16 1 to 10 numbers
// let pnum = (num) => {
//     for(i = 1;i<=num;i++)
//         console.log(i);
// }
// pnum(13);

// Q17 array of 5 numbr
// let arr = [1,2,3,4,5]
// console.log(arr);

// Q18 print array value using loop
// let arr =[1,2,3,4,5,6,"HI"];
// for(let i of arr){
//     console.log(i);
// }

// Q19 add new value using push
// let arr = [1,2,3,4,5,6];
// arr.push("chilll");
// console.log(arr);

// Q20 remove last valuing pop()
// let arr = [11,12,13,14,15,16]
// arr.pop();
// console.log(arr);

// Q21 use Map( to double all value
// let arr = [1,2,3];
// let result = arr.map(n => n*2);
// console.log(result);

// Q22 filter( to print even number
// let arr = [1,2,3,4,5,6,7,8,9,1,2,3,];
// let result = arr.filter(n => n%2===0);
// console.log(result);

// Q23 foreach to print all value
// let arr = [4,5,6,7,8,0];
// arr.forEach((i) => console.log(i));

// Q24 take 5 number 
 function fiveNum(){
    let num = Number(document.getElementById("loopnum").value);
    let result = "";
    for(i=1;i<=num;i++){
        result +=i+"\n";
        document.getElementById("loopresult").innerText = result;
        console.log(i);
    }
 }

//  -------------------------------------------------------array methods---------20226-----------------

// -------forEach method-------forEach(() => {})
// let arr = [1,2,34,4,];
// arr.forEach((items) => {console.log(items)});

// -------map() method----------map(()=> )
// let arr = [1,2,3,4,5,5,5,6];
// let arr1 = arr.map( (item) => 2);
// console.log(arr1);

// --------filter method----filter(() => );
// let arr = ["1","2",12,2,33,4,];
// let arr2 = arr.filter((item) => typeof item === Number);
// console.log(arr2);

// ------------find()-------- find(()=>{})
    // let arr = [1,'blue',"black",2,"blue",2,2,3]
    // let arr2 = arr.find((item) => item === "blue");
    // console.log(arr2);


// ----------include---------
// let arr = [1,2,3,4];
// let arr2 = arr.includes(4);
// console.log(arr2);

// ----------join-----
// let arr = [1,2,3,4];
// let arr2 = arr.join("--");
// console.log(arr2);

// --------fill-----fill(element,startinx,endidx)
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr2 = arr.fill("a",2,6);
// console.log(arr2);

// -------slice------slice(st,end)
// let arr = [1,2,3,4,5,6,7,8,99,2];
// let arr2 = arr.slice(1,5);
// console.log(arr2);

// -------- splice  ------splice(st,delete,additm)
// let arr = [1,2,3,4,5,6,7,8,99,2];
// let arr2 = arr.splice(1,3,"TNT");
// console.log(arr)
// console.log(arr2);

// ---------reverse------
// let arr = [1,2,3,4,5,6,7,8,99,2];
// let arr2 = arr.reverse();
// console.log(arr2);

// -----------isArray()-------
// let arr = [1,2,3,4,5,6,7,8,99,2];
// let arr2 = Array.isArray(arr);
// console.log(arr2);

//------------sort Array -----
// let arr = [1,2,3,4,5,6,4,9,0,1,2,3,4,7,8,99,2];
// let arr2 = arr.sort();
// console.log(arr2);

// ----------------------String--------
// ---------length-----
// let str = "hi ,how are u";
// console.log(str.length);

// toUpperCase and toLowerCase
// let str = "  HElLo BONI HelLO ;> BONI";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// // trim
// console.log(str.trim());
// // include
// console.log(str.includes("BONI"));
// // indexof and lastindexof
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("O"));
// // slicing
// console.log(str.slice(4));
// console.log(str.slice(-6));
// // substring
// console.log(str.substring(4))
// // replace
// console.log(str.replace("BONI","Boni"));
// console.log(str.replaceAll("BONI","Boni"));
// // split
// console.log(str.split(" "));
// // startwith and endswith
// console.log(str.startsWith(" "));
// console.log(str.endsWith(" "));
// // charAt and charCodeAt
// console.log(str.charAt(19));
// console.log(str.charCodeAt(4));
// // search
// console.log(str.indexOf("BONI"));