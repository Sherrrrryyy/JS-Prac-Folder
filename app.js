// function myfunction() {
//     document.getElementById("demo").innerHTML = "Paragraph Changed"
// }


// Using innerHTML 
// document.getElementById("demo").innerHTML = 5+6;

// Using document.write() 
// document.write(7 + 20);

// Using window.alert
// alert( 70 + 90 );


// using console.log()
// console.log( 100 + 29 );




// JS Statements

// let x, y, z;
// x = 5;
// y = 10;
// z = x + y;

// document.getElementById("demo").innerHTML =
// "The value of z is " x + y 


// let carname = "Corolla";
// document.getElementById("demo").innerHTML = carname;

// var carName = "Revo";
// console.log(carName);

// var carName;
// carName = "Civic";

// console.log(carName)


// let a = 5;
// let b = 2;

// a **= 4;
// console.log(a);



// let a = 5; // number
// let b = "5"; // string


// console.log(" a !== b", a !== b)


// let a = 6;
// let b = 5;

// console.log(  !(a === 6) );


// var tableNumber = +prompt("Enter a number")
// var tableLength = +prompt("Enter a length number")

// for( i = 1; i < tableNumber; i++){

// if(){

// }

// }



// var a = 4
// var b = 6

// console.log( a === 4 || a > 6 );


// var userGender = prompt("Enter your gender")

// if( userGender == "female"){
// console.log("Youre eligible")
// }else{
// console.log("Youre not eligible")

// }



// var mode = "silver"
// var color;

// if (mode === "dark") {
//     color = "black"
// } else if (mode === "blue") {
//     color = "blue"
// } else if (mode === "pink") {
//     color = "pink"
// } else {
//     color = "white"
// }

// console.log(mode)


// age = 16

// age >= 18 ? console.log("adult") : console.log("not adult");



// var getName = prompt("Enter a number");
// console.log(getName)

// var num = prompt("enter a number");

// if(num % 3 === 0){
//     console.log(num, " is multiple of 3")   
// }else{
//     console.log(num, " is not multiple of 3")

// }




// let studentScore = +prompt("enter your score");

// if(studentScore >= 90 && studentScore <= 100){
//     grade = "A"
// }else if(studentScore >= 70 && studentScore <= 89){
//     grade = "B"
// }else if(studentScore >=60 && studentScore <= 69){
//     grade = "C"
// }else if(studentScore >=50 && studentScore <= 59){
//     grade = "D"
// } else if (studentScore >=0 && studentScore <=49){
//     grade = "Fail"
// }

// console.log("according to your score, your grade was: ", grade)



//LOOPS AND STRINGS

// console.log("apna college")
// console.log("apna college")
// console.log("apna college")
// console.log("apna college")
// console.log("apna college")


// for(var i=1; i<=5; i++){
// console.log("i = " , i)
// }


// console.log(i)

// var sum = 0
// var n = 100

// for(i = 1; i <= n; i++ ){
//     sum = sum + i;
// }
// console.log("sum  = " , sum)


// var num = +prompt("enter any number")

// if(num % 2 == 0){
// console.log(num , " is even")
// }else {
// console.log(num , " is odd")

// }


// var age = +prompt('enter your age' );

// if(age <= 20){
// console.log("Junior")
// } else if (age <= 30 ){
// console.log("Intermediate")
// }else if(age <= 40){
// console.log("Senior")
// }else if (age <= 50){
// console.log("Very senior")
// } else {
// console.log("Youre about to die prepare yourself")
// }


// var number  = +prompt("enter a number")

// if(number % 3 === 0){
// console.log("Number is multiple of 3")
// }else{
// console.log("Number is not multiple of 3")

// }



// for(var i= 1; i<=5; i++){
// console.log("i = " , i)
// }


// for(var num = 0; num<=100; num++){
// if(num % 2 !== 0){
//     console.log("num = " , num)
// }
// }

// for(var num = 0; num<=100; num++){
//     if(num % 2 === 0){
//         console.log("num = " , num)
//     }
//     }


// var str = "Apna college"
// console.log(str, str.length)

// console.log(str[0],str[1],str[2],str[3],str[4],str[5],str[6])


//template literals

// var sentance = `This is a template literals`
// console.log(typeof sentance);



// console.log("Shaheer \n khan")


// str = "APNA COLLEGE".toLowerCase()

// str = "                         Apna College  JS              "
// console.log(str.trim())


// function foo(num1,num2){
//     var num10 = 100
//     var num20 = 200
//     return num10 + num20
// }

// var temp = foo()
// console.log(temp)



// function calc(num1, num2, opt) {
//     if (opt === "+") {
//         console.log("add", num1 + num2)
//     } else if (opt === "-") {
//         console.log("sub", num1 - num2)
//     } else if (opt === "*") {
//         console.log("mul", num1 * num2)
//     } else if (opt === "/") {
//         console.log("div", num1 / num2)
//     } else {
//         alert("Invalid operator")
//     }
// }

// var num1 = +prompt("enter first number")
// var num2 = +prompt("enter second number")
// var opt = prompt("enter operator")

// calc(num1, num2 , opt);


// function rabiya(){
//     document.write("Rabiya pagal beemar hai")
// }

// rabiya()

// var username = "Faraz"

// function foo(username){
//     username = "faraz"
//     console.log("username", username)
// }


// foo("Jaffer aman")
// foo("Shaheer Khan")
// foo("mohammad Zaviyar")

// function api(){
//     document.write("api tm mjhe alien lagti ho sach sach btao klha se ayi ho?")
// }

// api()


// function foo(){
//     var num10 = 100
//     console.log("before return")
//     return 100 

//     console.log("after return")

// }



// var temp = foo()
// console.log(temp)


// function foo(){
//     var number = 100 +200
//     return number
// }

// var temp = foo()
// console.log(temp)

// function foo(){
//     for(var i=1; i<=20; i++){
// console.log("Hello World")
//     }
// }

// foo()

// function foo(){
//     var num1 = +prompt("enter num1")
//     var num2 = +prompt("enter num2")
//     console.log(num1 * num2)
// }



// function foo(username) {
//     var username = "Hadi Jamal"
//     console.log("username", username)
// }

// foo("Shaheer Khan")


// function foo(){
//     var username = prompt("Enter your Name")
// alert(username)
// }

// function foo(num1 , num2){
//     var number = num1 % num2 
//     console.log(number)
// }

// foo(20,50)


// function foo(num1 , num2){
//     var num1;
//     var num2;
// return num1 * num2
// }

// var temp = foo(2 , 10)
// console.log(temp)

// function foo(){
//     var arr = ["Shaheer" , "Saad", "Mustafa" , "Hadi" , "Ansab" , "Hasnain "]
//     // arr.slice(2)
//     console.log(arr)
//     console.log(arr.slice(2))
//     var oneArr = arr + arr.slice(2)
//     console.log(oneArr)
//     // var twoArr = 
// }

// foo()

// function foo(num1 , num2 , num3){
//     var numbers;
// return num1 * (num2 + num3)
// }


// var temp = foo(30, 10, 10)
// alert(temp)


// var name;
// name = "Shaheer"
// console.log(name)

// name = "Hadi"

// var isActive = true
// var isNotActive = false
// var userGender = prompt("enter your gender")


// for (var i = 1; i <= 20; i++) {
//     if (userGender === "Male".toLowerCase) {
//         console.log(isActive)
//     }else{
//         console.log(isNotActive)
//     }

// }

// var username = "Ahmed"
// username += " Hamza"

// console.log(username)


// function saveUserName(){
// var userName = document.getElementById("userName")
// console.log(userName.value)
// }


// function foo(){
//     console.log("Hello World")
// }

// function carImage1(event) {
//     var carImage = document.getElementById("carImage")

//     if (event === "over") {
//         carImage.src = "./pics/car1.jpg"
//     } else {
//         carImage.src = "./pics/car2.jpg"

//     }
// }



// function changeImage(event, element) {

//     if (event === "over") {
//         element.src = "./pics/car1.jpg"
//     } else {
//         element.src = "./pics/car2.jpg"

//     }
// }

// function feild(flag, elem){

//     elem.style.backgroundColor = "red"

// if(flag === "focus"){
// console.log("hello focus", elem)
// }else {
// console.log("hello blur", elem)

// }

// }

// /*function bulbSwitch(element){

// var bulb = document.getElementById("bulb")

// if(bulb.src === "./pics/bulboff.jpg"){
//     bulb.src = "./pics/bulboff.jpg"
// }else {
//     bulb.src = "./pics/bulbon.jpg"
// }

// }


// function showPass(btnelem) {
//     // console.log("Hello world", btnelem.innerHtml)
//     var password = document.getElementById("password")


//     if (btnelem.innerHtml === "SHOW") {
//         btnelem.innerHtml = "HIDE"
//         password.type = "text"
//         password.style.backgroundColor = "red"
//         password.style.color = "white"
//     } else {
//         btnelem.innerHtml = "SHOW"
//         password.type = "password"
//         password.style.backgroundColor = "blue"
//         password.style.color = "white"
//     }

// }


// function inputFocus(inputelem) {

//     inputelem.style.background = "grey"
// }

// function inputBlur(inputelem) {
//     console.log(inputelem.value.length)


//     if (inputelem.value.length < 3) {
//         inputelem.style.background = "darkgreen"
//     } else {
//         inputelem.style.background = "lightgreen"
//     }
// }

// function changeImg(btncheck ,element) {

//     var image = document.getElementById('image')


//     if (btncheck === "btn") {
//         image.src = "./pics/car2.jpg"
//     }else {
//         image.src = "./pics/car1.jpg"
//     }

// }


// function saveName(){
//     var userName = document.getElementById("userName")
// console.log(userName.value)

// }


// function saveMe(lamp){
// var picYou = document.getElementById("picYou")

//     if(lamp === "console" ){
// picYou.src = "./pics/car1.jpg"
// }else {
// alert("This console was not done succesfully")

// }

// }


// function onOver(upper, elem) {
//     console.log(upper, elem)

//     if (upper === "over") {
//         elem.src = "./pics/car2.jpg"
//     } else {
//         elem.src = "./pics/car1.jpg"
//     }
// }

// function onOut(down, elem) {
//     console.log(down, elem)

//     if (down === "out") {
//         elem.src = "./pics/car1.jpg"
//     } else {
//         elem.src = "./pics/car2.jpg"
//     }
// }


// var longPara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ut placeat eveniet nam rem! Velit iure incidunt tempore tenetur voluptatibus! Laborum recusandae sit enim dignissimos unde perspiciatis aliquid doloribus ipsa cupiditate, repudiandae quas numquam non incidunt, mollitia asperiores velit quos."
// var shortPara = "Laborum recusandae sit enim dignissimos unde perspiciatis."


// function seeMore(elem) {
//     var paragraph = document.getElementById("paragraph")
//     // console.log(paragraph.innerHTML)


//     if (elem.innerHTML === "SEE MORE") {
//         elem.innerHTML = "SEE LESS"
//         paragraph.innerHTML = longPara
//     } else {
//         elem.innerHTML = "SEE MORE"
//         paragraph.innerHTML = shortPara
//     }
// }


// function multiply(num1 , num2){
//     var numm = num1 + num2
//     console.log("numm" , numm)
// }


// function onMove(level , element){
// console.log(level , element)

// if(level === "in"){
// element.src = "./pics/car2.jpg"
// }else {
// element.src = "./pics/car1.jpg"

// }

// }


// function changeColor(elem) {
//     var commoncolor = document.getElementById("commoncolor")
//     console.log(commoncolor.innerHTML)

//     if (commoncolor.innerHTML === "HAHA") {
//         elem.innerHTML = "CHANGE WHAT"
//         commoncolor.innerHTML = 'Why do you laugh like that?'
//     } else {
//         commoncolor.innerHTML = "HAHA"
//         elem.innerHTML = "CHANGE LINE"
//     }

// }





// var userGender = prompt("enter your gender")
// // var userAge = +prompt("enter your ag")

// if (userGender === "Male" || userGender === "Female") {
//     alert("You're eligible for this scholarship")
// } else {
//     alert("You're not eligible for this scholarship")

// }


// for(var i=1; i<=15; i++){
// console.log("WOW you are now a developer")
// }


// var arr = [15,17,58,65,57,33,54,18,66]

// for(i=0; i<arr.length; i++){
// console.log("working", arr[i])
// }    


// var arr = ["kraachi","lahore"];

// console.log(arr)
// console.log(arr.pop())

// var cities = ["karachi", "lahore", "Islamabad"]

// // var citiesCopy = cities.slice(-2, 3)
// // console.log("citiesCopy", citiesCopy)

// cities.splice(1, 0 , "multan")
// console.log(cities)


// console.log("cities", cities)



// var userCity = prompt("Enter your city!").toLowerCase()
// var cityCollection = ["karachi", "lahore", "multan"]
// var isMatch = false


// for (var i = 0; i < cityCollection.length; i++) {
//     if (cityCollection[i] === userCity) {
//         console.log("exist")
//         isMatch = true
//         break
//     }
// }
// console.log("ismatch", isMatch)

// if(isMatch === false){
//     console.log("not exist")
// }


// var userInput = prompt("Enter fruits")
// var fruits = ["apple", "orange", "mango"]
// var flag = false


// for (var i = 0; i < fruits.length; i++) {
//     if (fruits[i] === userInput) {
//         console.log("fruit exist")
//         flag = true
//         break
//     }
// }


// if (flag === false) {
//     console.log("not exists")
// }


// for (var i = 1; i <= 5; i++) {
//     console.log(i, "outer")

//     for (var j = 1; j <= 2; j++) {
//         console.log(j, "inner")
//     }
// }



// var arr = [["apple" , "banana"], ["watermelon", "papaya"]]

// // console.log(arr[0][1])


// for(i=0; i<arr.length; i++){

//     for(j=0; j<arr[i].length; j++){
// console.log(arr[i][j])
//     }
// }


// var greetUser = alert("Welcome to the website")

// var errorPass = alert("Error! Please enter a valid password")

// var codeStand = alert("welcome to the JS land \nHappy Coding")

// var firstAlert = alert("Welcome to the JS land")
// var secondAlert = alert("Happy Coding")


// var userName;
// var myName = "Shaheer Khan"

// var message = "Hello World"
// alert(message)

// var studentName = "Shaheer"
// var studentAge = 20
// var studentProf = "Web and Mobile development"
// alert(studentName)
// alert(studentAge)
// alert(studentProf)


// var pizzaAlert = alert("Pizza \nPizz\nPiz\nPi\nP ")

// var email = "example@example.com"
// alert("My email address is " + email)

// var bookName = "A smarter way to learn javascript"
// alert("I am trying to learn from the book " + bookName)

// var javaIn = document.write("I can write HTML content through javascript")

// var designAll = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(designAll)


// var age = 20
// alert("i am " + age + ' years old')

// var times = 14
// alert("You have visited the this site " + times + " times")

// var birthYear = 2004
// document.write("My birth year is " + birthYear )
// document.write("Data type of my declared variable is number" )

// var customerName = prompt("Enter your full name")
// var productTitle = prompt("what you wnat to buy")
// var productQuan = +prompt("Quantity of your product?")

// document.write(customerName + " ordered " + productQuan + productTitle + " on Sherry clothing store" )


// var a = 8
// var b = 2
// var result = a + b;
// console.log(result);

// var a = 8
// var b = 2
// var result = a - b;
// console.log(result);

// var a = 8
// var b = 2
// var result = a * b;
// console.log(result);

// var a = 8
// var b = 2
// var result = a / b;
// console.log(result);

// var a = 8
// var b = 2
// var result = a % b;
// console.log(result);

// var movieTicket = 600
// document.write("Total cost of buying 5 tickets to a movie is ", movieTicket * 5)

// var yourChoice = +prompt("Enter any number to genertae the table you want")
// document.write("Table of ", yourChoice,"<br />")

// for(var i=1; i<=10 ; i++){
// document.write(yourChoice , " x " , i , " = ", yourChoice*i , "<br />")
// }

// var totalMarks = 980
// var marksObtain = 804
// var marksPer = (totalMarks-marksObtain)/(totalMarks)*100;

// document.write("Your percentage is " , marksPer)

// function foo(){
//     var a = 50
//     var b = 10
//     var result = a+b
//     console.log(result)
// }

// foo()


// function foo() {
//     var a = 50
//     var b = 10
//     return a * b
// }

// var temp = foo()
// console.log(temp)

// function foo(a,b){

//     var toot = a * b
//     console.log(toot)
// }

// foo(10,5)



// var arr = ["apple","banana","orange"]

// console.log(arr[2])

// arr.pop()

// arr.push("KELA","Lemon","KELA","Lemon")
// console.log(arr)


// var str = "My name is shaheer"
// console.log(str[10])


// var tableNumber = +prompt("enter table number:")
// var tableLen = +prompt("enter table length:")
// console.log(tableNumber, "tableNumber")

// for (var i = 1; i <= tableLen; i++) {
//     document.write(tableNumber + " x" + i + "=" + tableNumber * i + "<br />")
// }


// function foo(emp , timp){
//     console.log(emp , timp)
//     if(emp === "1010"){
// console.log("Hey Watcha")
// timp.innerHtml = 'Oh Hell Yeah'
//     }else {
//         console.log("Niqqa")
// timp.innerHtml = 'SAVE ME'


//     }

// }

// var userCity = prompt("enter your city...").toLowerCase()
// var cities = ["karachi", "lahore", "multan"]

// var flag = false


// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] == userCity) {
//         console.log("user city exists")
//         flag = true
//         break
//     }
//     console.log(cities[i])
// }

// if (flag === false) {
//     console.log("user city not exist ")
// }


// var dayOfWeek = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"]

// var now = new Date().getDay() //day of week  0 to 6

// console.log(dayOfWeek[now])



// var Paras = document.getElementsByTagName("p")
// console.log(Paras)
// Paras[1].style.background = "red"



// var num = 1000.4587465496584625498
// console.log(typeof num)
// console.log(typeof num.toFixed(3))


// var now = new Date().toDateString()
// var now = new Date().toTimeString()

// var now = new Date().toLocaleDateString()

// var now = new Date().toLocaleTimeString()
// document.write(now)

// var paras = document.getElementsByTagName("p")
// console.log("paras", paras)
// for (var i = 0; i < paras.length; i++) {
//     console.log("para", paras[i].style.color = "red");
// }


// var str = "saylani mass it traning";
// var arr = str.split(" ")  //string to arr
// var tempArr = []

// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i], "arr")
//     var cap = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
//     // console.log(cap, "cap")
//     tempArr.push(cap)

// }

// console.log("arr", arr)
// var cap = tempArr.join(" ") //arr to str
// console.log("cap", cap)




// var str = "saylani mass it traning";
// var arr = str.split(" ")
// var tempArr = []


// for(var i=0; i< arr.length; i++){
// console.log(arr[i])
// var cap = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
// console.log(tempArr.push(cap))
// }


// var cap = tempArr.join(" ")
// console.log(cap)


// . Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// var inputUser = prompt("Enter something");
// var 


// if(inputUser === ){

// }


// . Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// var firstInput = +prompt("Enter a number")
// var secondInput = +prompt("Enter a number")

// if (firstInput > secondInput) {
//   console.log("First number is greater")
// } else if (firstInput < secondInput) {
//   console.log("second number is greater")
// } else if (firstInput === secondInput) {
//   console.log("both numbers are equals")
// }else {
//   console.log("NaN")
// }

// var firstInput = +prompt("Enter a number")

// if(firstInput > 0){
// console.log("The number is positive")
// } else if(firstInput < 0){
//   console.log("The number is negative")
// }else {
//   console.log("The number is zero")
// }


// var passOne = "khan123@"
// var passTwo = "palestine55"

// var enterPass = prompt("Enter  your password")

// if (enterPass === "khan123@" || enterPass === "palestine55") {
//   alert("Correct! The password you entered matche the original password")
// } else if (enterPass === "") {
//   alert("Please enter your password")
// } else {
//   alert("worng password")
// }


// var arr = [];
// var arr = [0]/)





// if(userColor === "red"){
//     console.log(colrors.unshift(userColor))
// }else{
//     alert("this is not a color")
// }


// Initialize an array with color names
// var colors = ["Red", "Green", "Blue", "Yellow"];

// // Display the array elements in the browser
// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br>");

// // Ask the user what color they want to add to the beginning
// var newColor = prompt("Enter a color to add to the beginning of the array:");

// // Add the user's color choice to the beginning of the array
// console.log(colors.unshift(newColor) + colors.join(", "));

// Display the updated array in the browser
// console.log("<b>Updated Array:</b> " + colors.join(", "));


// var userColor = prompt("Enter a color you want to remove in an array")
// var indexNum = +prompt("enter index number")
// var colrors = ["orange", "black", "purple", "pink", "white"];
// // colrors.unshift(userColor)
// // colrors.push(userColor)
// // colrors.unshift(userColor)
// // colrors.shift()
// // colrors.pop()
// colrors.splice(indexNum ,1)

// console.log(colrors)


// var studentScore = [320,230,480,120]
// document.write("studentScore: ", studentScore, "<br>")
// studentScore.sort()
// document.write("Ordered studentScore: ", studentScore)

// var cityName = ["karachi","islamabad","quetta","lahore",'multan',"rawalpindi"]
// console.log(cityName)
// var citiesCopy = cityName.slice(2 , -1)
// console.log(citiesCopy)


// var str = ["This", "is", "my", "cat"]
// document.write("Array: " , str , "<br>")
// document.write("String: " , str.join(" "))

// var accComp = ["keyboard", "laptop", "mouse", "Printer", "speaker"]
// console.log(accComp)
// var tempArr = accComp.slice(-0)
// console.log(tempArr)

// var mobileManufacture = ["smasung", "motorolla", "Iphone", "Nokia", "oppo", "infinix", "Haier" ,"poco"]
// var optional = document.getElementById("optional")
// console.log(optional)


// var arr = [];
// console.log(arr)

// var multiArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(multiArr[0])
// console.log(multiArr[1])
// console.log(multiArr[2])


// for(var i=1; i <=20; i++){
// console.log(i)
// }

// var tableNum = +prompt("enter table number")
// // var tablLeng = +prompt("enter table length number")

// for(var i=1; i <= 1000; i++){
// document.write(tableNum + " x " + i + " = " + tableNum * i + "<br>")
// }

// var fruits = ["apple","banana","mango","orange","strawberry"]
// console.log(fruits)
// for(var i=0; i < fruits.length; i++){
// console.log(fruits[i])
// }

// for (var i = 0; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log("even", i)
//     } else {
//         console.log("odd", i)
//     }

// }


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userDefine = prompt("Enter a fruit")

// for (var i = 0; i < A.length; i++) {
//     // console.log(A[i])

//     if (userDefine === A[i]) {
//         console.log("available ")}
//      else {
//         console.log("not available ")
//     }


// }

// var A = [24, 53, 78, 91, 12]

// var largest = A[0]

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//       largest = A[i];

//       console.log("the largest number is " ,largest )
//     }
//   }


// for(var i =1; i <= 100; i++){

// if(i % 5 == 0){
// console.log(i)
// }

// }

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullname = firstName + lastName

// console.log("Welcome" ,fullname)


// var favoritePhone = prompt("Enter your favorite phone")

// console.log(favoritePhone.length)


// var str = 'Pakistani'
// console.log(str ,str.indexOf("n") )

// var last = "Hello world"
// console.log(last.lastIndexOf("l"))


// var paras  = document.getElementsByTagName("p")
// console.log(paras[0])
// paras[0].style.background = "black"
// paras[0].style.color = "white"


// var who = document.childNodes


// var currYear = 2024;
// var birthYear = 2005;
// var birthDate = currYear  - birthYear
// console.log(birthDate)


// var present = new Date
// var now = present.toDateString()
// console.log(present)

// var now = new Date("Apr 10 2023").toLocaleTimeString()
// console.log(now)

// var now = new Date().getTime()
// console.log(now)


// var past = "24 March 1998"
// // var now = Date().getDate(past)

// var miliSec = new Date().getTime()
// var pastMiliSec = past.getTime()
// console.log(pastMiliSec)

// var parent = document.children[0].children[1].children[1].style.color = "purple"
// document.children[0].children[1].children[1].style.backgroundColor = "pink"
// document.children[0].children[1].children[2].nextElementSibling.style.color = "pink"
// document.children[0].children[1].children[4].previousElementSibling
// console.log(parent)


// function saveMe(){
//     var pass = document.getElementById("pass")
// // var canCheck = pass.hasAttribute("type")
// // var canCheck = pass.getAttribute("type")
// // var canCheck = pass.setAttribute("placeholder" , "Eneter password")
// console.log(canCheck)
// }

// function showMe(elem){
// var pass = document.getElementById("pass")
// pass.value = "Shaheer"
// console.log(pass)




// }


// var head1 = document.createElement("h1")
// head1.innerHTML = ("Hello my name is shaheer")

// heading.appendChild(head1).style.color = "red"
// heading.appendChild(head1).style.fontSize = "50px"

// var para = document.createElement("p")
// para.innerHTML = ("My name is shaheer and i am software engineeer and studying web development now")
// heading.appendChild(para)


// var heading = document.getElementById('heading')
// var btn = document.createElement("")
// btn.placeholder = ("SAVE ME")
// heading.appendChild(btn)


// var university = "University of Karachi"
// console.log(university.split(" "))
// console.log(university.split(" "))


// var positive = +prompt("Enter a positive number")

// if(positive >= 1){
//     console.log("positive number")
// }else{
//     console.log("ERROR")
// }


// var positive = +prompt("Enter a positive number")
// console.log(Math.round(positive))
// console.log(Math.floor(positive))
// console.log(Math.ceil(positive))

// var negative = +prompt("Enter a negative number")

// if(positive <= 0){
//     console.log("negative number")
// }else{
//     console.log("ERROR")
// }


// var negative = +prompt("Enter a negative number")
// console.log(Math.number(negative))
// console.log(Math.round(negative))
// console.log(Math.floor(negative))
// console.log(Math.ceil(negative))


// function absValue(number){
//     return Math.abs(number)
// }

// var number1 = +prompt("Enter any negative number")
// var number2 = +prompt("Enter any positive number")

// console.log("Absolute value of number1 is " , absValue(number1))
// console.log("Absolute value of number2 is " , absValue(number2))


// var diceValue = Math.floor(Math.random() * 6 +1)
// console.log("Random dice value is ", diceValue)

// var coinValue = Math.floor(Math.random() * 2 +1)
// // console.log(coinValue)

// if(coinValue === 2){
// console.log("Random coin value: Heads")
// }else{
// console.log("Random coin value: Tails")
// }


// var hundredCount = Math.floor(Math.random() * 101 + 0)
// console.log(hundredCount)

// var userWeight = prompt("Enter your weight")
// console.log( "The weight of the user is: " ,parseInt(userWeight))



// var secretNumber = Math.floor(Math.random()*11 + 1)
// console.log(secretNumber)
// var findSecret = +prompt("enter a number between 1 to 10")

// if(findSecret === secretNumber){
// alert("Congratulations")
// }else{
// alert("try again")
// }

// var now = new Date
// console.log(now)


// function getMonthName(){

// var monthNames = ["January","Febuary", "March", "april","may","June","July","august","Spetember","October","Novemeber","December"]

//     var getDate = new Date();
//     var currMonthIndex = getDate.getMonth()
//     var currMonth = monthNames[currMonthIndex]

//     alert(currMonth);


// }

// getMonthName()

// function foo() {

//     var daysName = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
//     var getDates = new Date
//     var getDays = getDates.getDay()
//     var currDays = daysName[getDays]
//     // console.log(currDays)
//     var copyArr = currDays.slice(0, 4)
//     console.log(copyArr)


// }

// foo()


// var flag = true

// function foo() {
//     var daysName = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
//     var getDates = new Date
//     var getDays = getDates.getDay()
//     var currDays = daysName[getDays]

//     if (currDays === "Sunday" || currDays === "Saturday") {
//         console.log("It's Fun day")
//     }
//     flag = false


// }


// if (flag = true) {
//     console.log("It's not Fun day")
// }

// foo()

// var now = new Date()
// console.log(now)


// var pastDate = "Sun Dec 05 1995"
// var now = new Date(pastDate)
// console.log(now)


// var currYear = +prompt("enter curent month")
// var userAge = +prompt("Enter your age");

// console.log( "Your bith year is " , currYear - userAge );


// function foo(){
//     var now = new Date
// console.log(now)
// }

// foo()



// function foo(){
//     var firstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your last name")
// console.log("welcome" , firstName +  lastName)
// }

// foo()


// function foo(){
//     var num1 = +prompt("Enter first number")
//     var num2 = +prompt("Enter second number")
// console.log(num1 + num2)
// }

// foo()


// function foo() {
//     var num1 = +prompt("Enter first number")
//     var num2 = +prompt("Enter second number")
//     var opt = +prompt("Enter operator")

//     if(opt === "+"){
// console.log(num1 + num2 , "add")
//     }else if(opt === "-"){
//         console.log(num1 - num2 , "sum")
//     }else if(opt === "*"){
//         console.log(num1 * num2 , "mul")
//     }else if(opt === "/"){
//         console.log(num1 / num2 , "div")
//     }else{
//         console.log("Invalid operator")
//     }
// }

// foo()


// function foo(start, end) {

//     var container = document.getElementById('countingContainer');
//     container.innerHTML = ''




//     for (var i = start; i <= end; i++) {
//         var para = document.createElement("p")
//         para.innerHTML = i;
//         container.appendChild(para)

//     }


// }

// foo(1, 10)


// function foo(height, width){

// return 4 * 5
// }

// var tempVar = foo()
// console.log(tempVar)


// var str = "the quick brown fox"

// function foo(str){
//     var words = str.split(' ')

//     var result = words.charAt(0).toUpperCase() + words.slice(1).join(' ')
//     return result

// }

// var exampleString = 'the quick brown fox';
// var tempArr = foo(exampleString)
// console.log(tempArr)


// let str = "I love javascript"
// console.log(str.charAt(3))

// var userName = prompt("Enter your name without spaces");
// var userFullId = "@" + userName + userName.length

// console.log(userFullId)

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

// var obj = {
//     name : "Shaheer" ,
//     rollNo : 174746 ,
//     courses : ["Html" , "css" , "JavaScript"],
//     result : undefined,
//     marks : {
//         html : 95,
//         css : 80,
//         javaScript : 99
//     } ,
//     calcMarks : function(){
//         var total = this.marks.html + this.marks.css + this.marks.javaScript
//         this.result = total
//         return total
//     }
// }


// obj.calcMarks()
// console.log(obj)


// setTimeout(function(){
//     console.log("Hello World")
// },1000)

// function start(){
//     console.log("Hello world")
// }

// setTimeout(start , 5000)

// var inter = setInterval(start , 2000)

// function stopThis(){
//     clearInterval(inter)
// }


// setTimeout(() => {
//     console.log("Hello")
// }, 2000);

// setTimeout(function(){
//     console.log("Hello")
// }, 4000)


// var interval = setInterval(function(){
//     console.log("Heloo")
// }, 4000)

// var integers = setInterval(() =>{
//     console.log('Shaheer')
// }, 2000)

// var arr = ["karchi","karchi","karchi","karchi"]

// for(var key of arr){

//     console.log(key)

// var btn = document.getElementById("btn")
// btn.innerHTML = `<button>${arr[key]}</button>`
// }


// var minutes = document.getElementById("minutes")
// var seconds = document.getElementById("seconds")
// var miliseconds = document.getElementById("miliseconds")
// var interval;


// var min = 0;
// var sec= 0;
// var miliSec = 0;


// function start(){
//     // console.log(elem, "Ele")
//     miliSec++
//     miliseconds.innerHTML = miliSec


//     }

//     function startWatch() {
//         startFromZero = setInterval(start, 10)
//         var enbordis = document.getElementById('enbordis')
//         enbordis.disabled = "true"


//     }


// window.alert("Saheyef")


// console.log(window.location)


// var chanePage = () => {

//     // window.location.href = "./about.html"    
//     // window.location.replace("./about.html")
//     // window.location.assign("./about.html")
//     // window.location.reload(true)

//     // window.history.forward()
//     // window.history.back()


//     // window.open("./about.html", "about", "width:400;height:400")

// }


// function Std(name, age, gender) {
//     this.username = name
//     this.userage = age
//     this.usergender = gender
// }

// var std1 = new Std("Shaheer", 21, "Male")
// console.log(std1)

// var std2 = new Std("Jaffer", 22, "Male")
// console.log(std2)


// var obj = {
//     std1,
//     std2
// }

// console.log(obj)


// var userName = "shaheer"
// console.log(`My name is ${userName} and what is your name`)


// function chanePage(){

// window.open("./about.html", "about", "width:450;height:450") 
// }

//  var std = addEventListener("click" , chanePage())

// console.log(document.childNodes)

// function value(num){
//     var inputdata = document.getElementById("inputdata")
//     inputdata.value += num 
// }

// function allvalueclear(){
//     var inputdata = document.getElementById("inputdata")
//     inputdata.value = "" 
// }

// function valueclear(){
//     var inputdata = document.getElementById("inputdata")
//     inputdata.value = inputdata.value.slice(0 , -1)
// }

// function equalsvalue(){
//     var inputdata = document.getElementById("inputdata")
//     inputdata.value = eval(inputdata.value)   
// }

// var unknown;
// document.write(`value after variable declaration is: ${unknown} <br>`)

// unknown = 10
// document.write(`initial value: ${unknown} <br>`)

// var kon = ++unknown
// document.write(`value after increment: ${kon} <br>`)

// var kon = ++unknown + 7
// document.write(`value after addition: ${kon} <br>`)

// var kam = --kon
// document.write(`value after decrement: ${kam} <br>`)

// var div = kam / 3
// document.write(`The remainder is: ${div} <br>`)


// var stuName = document.getElementById("stuName")
// var password = document.getElementById("password")

// var stuData = stuData => {


// document.write(stuName.value , password.value)

// // console.log(stuName.value)
// // console.log(password.value)


// }


// var parashort = "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript"
// var paraLong = "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. HTML elements are delineated by tags, written using angle are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. HTML elements are delineated by tags, written using angle "
// var para = document.getElementById("para")
// function more(key, ele) {

//     if (key === "in") {
//         ele.innerHTML = "READ LESS"
//         para.innerHTML = paraLong
//         console.log("Shaheer")

//     } else {
//         ele.innerHTML = "READ MORE"
//         para.innerHTML = parashort

//     }

//     // console.log("ele" , key)

// // }

// function foo1(){
// alert("Thanks for purchase this phone1")
// }
// function foo2(){
//     // console.log("HELLO")
// alert("Thanks for purchase this phone2")

// }
// function foo3(){
//     // console.log("HELLO")
//     alert("Thanks for purchase this phone3")

// }

// var stuData1 = document.getElementsByTagName("td")


// function delete1(){
// stuData1.innerHTML = ""
// }

// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;

//       alert(i);
//     }
//   }

//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) return false;
//     }

//     return true;
//   }

// showPrimes(10)
// isPrime(2)


// const foo = (num1 , num2) => num1 * num2


// const res = foo(10 ,2)
// console.log(res)

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const wholeYear = [5,...q1,...q2,...q3, ...q4,65]
// console.log(wholeYear)

// const numbers = [23,55,21,87,56];
// // let maxValue = Math.max(...numbers);

// let value = Math.min(...numbers)
// console.log(value)


// const arr = ["karachi","lahore","multan","Inidia"]

// for(var all of arr){
//   if(all === "lahore"){
//     console.log("Its correct")
//     break
//   }else {
//     console.log("Its not correct")

//   }
// }

// let language = "JavaScript";
// let text = "";

// for (let x of language) {
//     text += x + " " 
// }

// console.log(text)


// const cities = new Map([
//   ["karachi","city of lights"],
//   ["islamabad","quetta"]
// ])


// console.log(cities)

// const fruits = new Map([
//   ["apples", "keeps the doctors away"],
//   ["bananas", 300],
//   ["oranges", 200]
//   ]);

//   console.log(fruits)

// const values = new Set()

// values.add("karachi")
// values.add("quetta")
// values.add("lahore")

// for(var key of values){
// console.log(key[values])

// }

// console.log(values)

// const Add = (name,age,gender,) => {

// this.userName = name
// this.userAge = age
// this.userGender = gender

// }

// const user1 = new Add('Shaheer', 21, 174746)
// console.log(user1)

// function Add(name,age,gender){

// this.userName = name
// this.userAge = age
// this.userGender = gender

// }

// const user1 = new Add('Shaheer',21, "male")
// console.log(user1)
// const user2 = new Add('Hadi',21, "male")
// console.log(user2)
// const user3 = new Add('ahmed',21, "male")
// console.log(user3)

// const obj1 = {
//     name : "Shaheer",
// }

// const obj2 = {
//     age : 21,
// fullName : "Shaheer Khan"
// }

// const obj3 = {...obj1,...obj2}
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// OBJECT LITERALS

// let name = `Shaheer`
// let age = 21

// const obj = [
//     name,
//     age
// ]

// console.log(obj)

// let n = "name"

// const obj = {
//     [n] : "Shaheer"
// }

// console.log(obj)
// console.log(obj.name)

// let n = "name"

// const obj = {
//     [n] : "shaheer",
//     course : "btech",
// detail(){
//     return `${this.name} is a student of ${this.course}`
// }

// }

// console.log(obj.detail())
// console.log(obj['detail']())


// let name = "Shaheer"
// let course = "Software"

// const foo = (name , course) => {
// return {name,course}
// }

// console.log(foo(name,course))

//ARRAY DESTRUCTURING

// const arr = ["Shaheer",, "karachi"]

// const [name,age = 25,city] = arr

// console.log(name)
// console.log(age)
// console.log(city)

// const arr = ["Shaheer",, "karachi",["male",20000]]

// const [name,age = 25,city, [gender,salary]] = arr

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(gender)
// console.log(salary)



// const arr = ["Shaheer",25, "karachi"]

// const [name,...args] = arr
// console.log(name)
// console.log(args)

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!


// let user = {
//     name: "John",
//     age: 30
//   };

// let {name,age} = user 

// //   let key = "name";
//   alert( user.name ) // undefined


// let obj = {};

// obj = {
//     name : "john",
//     surName : "smith"
// }
// obj.name = "peter"
// // obj["name"] = "peter"


// delete obj.name
// console.log(obj)


// console.log(window.location.href)

// window.location.assign("./about.html")

// var std = {
//     name: "Jaffar",
//     age: 23,
//     courses: ["HTML", "CSS", "JS"],
//     result: undefined,
//     email: null,
//     marks: {
//         html: 80,
//         Css: 60,
//         js: 70
//     },
//     calcMarks: function (name) {
//         var total = this.marks.html + this.marks.Css + this.marks.js
//         console.log("name", name)
//         this.result = total
//         return total
//     }

// }
// std.calcMarks("jaffar")
// console.log(std)



// var std1 = {
//     name: "John Doe",
//     age: 26,
//     id: 28,
//     courseName: "web and app",
//     gender: "male",
//     email: null,
//     result: undefined
// }


// var std2 = {
//     name: "MEER",
//     age: 26,
//     id: 28,
//     courseName: "web and app",
//     gender: "male",
//     email: null,
//     result: undefined
// }

// var std3 = {
//     name: "Ali",
//     age: 26,
//     id: 28,
//     courseName: "web and app",
//     gender: "male",
//     email: null,
//     result: undefined
// }

// var arr = [std1,std2,std3]

// console.log(arr)


// var userName= prompt("enter userName")
// var a = `my name is ${userName}` 
// console.log("userName"  ,a)

// var UI = `<table border>
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//         </tr>
//         <tr>
//             <td>100</td>
//             <td>Shaheer Khan</td>
//             <td>23</td>
//             <td>jaffar@gmail.com</td>
//         </tr>
//     </table> `


// document.write(UI)



// var stdArr = [
//     {
//         id: 100,
//         name: "John Doe",
//         age: 26,
//         email: null,

//     },
//     {
//         id: 101,
//         name: "MEER",
//         age: 26,
//         email: null,

//     },
//     {
//         id: 102,
//         name: "Ali",
//         age: 26,
//         email: null,
//     },
//     {
//         id: 134,
//         name: "sufiyan",
//         age: 26,
//         email: null,
//     }
// ]


// var tbody = document.getElementById('tbody')

// for (var i = 0; i < stdArr.length; i++) {

//     var obj = stdArr[i]
//     console.log(obj)

// tbody.innerHTML += `<tr>
// <td>${obj.id}</td>
// <td>${obj.name}</td>
// <td>${obj.age}</td>
// <td>${obj.email}</td>
// </tr>`

// }

//OOP(Object Oriented Programming )

// class student {

//     constructor(name, age) {
//         this.name = name
//         this.stuAge = age
//     }

//     void() {
//         console.log(`Hello my name is ${this.name} and my age is ${this.stuAge}`)
//     }
// }

// let foo1 = new student("Shaheer", 21)
// let foo2 = new student("Saad", 20)

// console.log(foo1) //.void()
// console.log(foo2)  //void()



// function Foo (name,age,email){

//     this.stuName = name;
//     this.stuAge = age;
//     this.stuEmail = email;


//     // console.log(name,age,email)
// }

// let stu1 = new Foo("Shaheer",21,"shaheer@gmail.com")
// let stu2 = new Foo("Hadi",19,"hadi@gmail.com")

// console.log(stu1)
// console.log(stu2)



// foo("Shaheer",21,"shaheer@gmail.com")


// const myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//       myResolve(console.log("Hello")); // when successful
//       myReject(console.log("HEll"));  // when error
//     });

//     // "Consuming Code" (Must wait for a fulfilled Promise).
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );


// const myPromise = new Promise(()=>{

// })

// localStorage.setItem(name,"shaheer")
// localStorage.getItem(name)
// localStorage.removeItem(name)


// window.location.href = './about.html'
// window.location.assign("./about.html")
// window.location.replace("./about.html")



// let assign = 'Shaheer Khan'
// assign = "Yumnaa"

// console.log(assign)

// const assign = "Shaheer Khan"
// const assign;

// const foo = () =>{

// console.log("Hello");
// }

// foo()

// const sum = (num1 , num2) => {
//     return num1 * num2

// }

// let result = sum(5,6)
// console.log(result);

// const foo = (num,num2) => {return num * num2}

// let result = foo(12,10)
// console.log(result);

// const obj = {
//     stuName : "shaheer",
//     stuAge : 21,
//     stuEmail : 'shaheer@gmail.com'
// }

// let {} = obj

// console.log(stuName,stuAge,stuAge)

// let naam = "Sherry"

// console.log(naam)

// let user = {
//     name: "John",
//     age: 30
//   };

// let {name,age} = user 

// console.log(name,age);

// const arr = ["Shaheer",21,"shaheer@gamil.com"]

// let [ofName,age,email] = arr

// console.log(ofName,age,email);

// const arr1 = ["karachi","lahore"]
// const arr2 = ["islamabad","quetta"]

// const arr3 = [...arr1,...arr2]

// console.log(arr3);




// const arr1 = ["karachi","lahore","islamabad","quetta"]
// const arr2 = []


// const value = arr1.find((value,index,array)=>{

//     // console.log(value,index,array)
// for(var i in array){

// // console.log(array[i])
// if(array[i] === "islamd"){

// console.log("you find it")

// break

// }else{
//     console.log("Ae ki pen yakki hai")
// }


// }


// })



// const value = arr1.find((value,index,array)=>{

//     console.log(value,index,array)

// isMatch = value

// if(isMatch){
// arr2.push("Delhi")

// }


// })

// console.log(arr2)



// const arr1 = ["karachi","lahore","islamabad","quetta"]
// // const arr2 = []


// const arr5 = arr1.findIndex((value,index)=>{

// // console.log(value,index);

// for(var i of arr1){

//     if(index === 1){

// console.log(value)

// break

//     }
// }

// })

// const arr1 = ["karachi","lahore","islamabad","quetta"]
// const arr1 = [2,4,5,10,6]
// const arr2 = []


// const arr = arr1.map((value)=>{

//     console.log(value);

// if(value === 5){
// return value * 2

// }

//     // console.log(value)

// })

// console.log(arr)



// const arr1 = ["karachi","lahore","islamabad","quetta"]
// const arr2 = [2,4,5,10,6]
// const arr3 = []

// const newArr = arr2.filter((value)=>{

// // console.log(value)

// return value * 5

// })
// console.log(newArr)



// var arr = ["karachi", "lahore", "islamabad"]

// const findArr = arr.find((val,ind)=>{

//     console.log(val,ind)

// if(val === "lahore"){

//     return true
// }

// })

// const findCity = arr.find((value, index) => {
//     // console.log("example", value, index)
//     // return false

//     if (value === "lahore") {
//         // return value
//         return true
//     }

// })


// var arr = ["karachi", "lahore", "islamabad"]
//  const findIndex = arr.findIndex((value ,index)=>{

// console.log(value,index);

//  })


// var arr = [
//     { name: "karachi" },
//     { name: "lahore" },
//     { name: "islamabad" },
// ]

// const cityIndex = arr.findIndex((value, index) => {
//     console.log("value", value.name)
//     if (value.name == "islamabad") {
//         return true
//     }
// })
// console.log(cityIndex, "cityIndex")



// var arr = [2, 4, 6, 8, 10]
// var newArr = arr.map((value, index) => {
//     console.log(value)

// })

// console.log("newArr", newArr)
// console.log("arr", arr)


// var arr = [8, 2,6, 4,6, 8, 6, 8, 8, 10]

// var filterValue = arr.filter((value, index) => {
//     // console.log(value, index)
//     if (value == 8) {
//         return value
//     }
// })

// console.log("filterValue", filterValue)



// var arr = [1, 11, 113, 8, 2, 4, 8, 6, 8, 8, 10]
// var tempArr = []
// const value = arr.forEach((value, index) => {
//     console.log(value, index)
//     // arr[index] = value  * 2
//     if (value % 2 === 0) {
//         tempArr.push(value)
//     }
// })


// console.log("value", value)
// console.log("arr", arr)
// console.log("tempArr", tempArr)


// var arr = [1, 11, 113, 8, 2, 4, 8, 6, 8, 8, 10]
// var tempArr = []

// const value = arr.forEach((value,index)=>{

//     if(value % 2 !== 0){
//         tempArr.push(value)
//     }

// })


// console.log(value)
// console.log(tempArr)
// console.log(arr)


// const loginPromise = new Promise((resolve, reject) => {
//     var requestLogin = true
//     if (requestLogin) {
//         resolve("Login successfully")
//     } else {
//         reject("something went wrong!")
//     }



// })
// .then((success)=>console.log(success , "then"))
// .catch((error)=> console.log(error , "catch"))





// const myPromise = new Promise((resolve, reject) => {

//     var login = true
//     if (login) {
//         resolve("Succesfully Login")
//     } else {
//         reject("Wrong password or email")
//     }

// });

// myPromise.then((chalgya) => {
//     console.log(chalgya)

// })
// myPromise.catch((nahichala) => {
//     console.log(nahichala);
// })


// const myPromise = new Promise((resolve, reject) => {

//     var login = true
//     if (login) {
//         resolve("Succesfully Login")
//     } else {
//         reject("Wrong password or email")
//     }

// });

// myPromise.then((success,error)=>{

//     console.log(success);
//     console.log(error);


// })


// const myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
//     login =true
//     if(login){

//         myResolve("Login success"); // when successful
//     } else{
//         myReject("dafa ho");  // when error

//     }
//     });

//     myPromise.then(
//       function(value),
//       function(error)
//     );


// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 3000);
//   });

//   myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
//   });


// const fetchData = async () => {
//     try {
//         console.log(11111111111)
//         const response = await fetch("https://fakestoreapiadsjahsdkjhaskjdhk.com/products").then(res => res.json())
//         console.log(response)
//         console.log(222222222)
//     } catch (error) {
//         console.log("error", error)
//     }


// }

// fetchData()


// import { collection,db,addDoc,getDocs, } from "./data";






// sumbitBtn.addEventListener("click", async ()=>{

// // console.log('hello')

// const userData = {
//             message : 'Hello World'
//         }





// })




// const formSubmit = await ()=>{

//     


// }











// console.log(addDoc,collection,getDocs,db)


// const sumbitBtn = document.getElementById("sumbitBtn")
// sumbitBtn.addEventListener("click", async () => {

//     const name = document.getElementById("name")
//     const email = document.getElementById("email")
//     const password = document.getElementById("pass")
//     // console.log(name.value, email.value, password.value);
//     const userObj = {
//         name: name.value,
//         email: email.value,
//         password: password.value
//     }
//     const userObj2 = {
//         name: name.value,
//         email: email.value,
//         password: password.value
//     }
//     const firstCollection = collection(db, "user")
//     // console.log(firstCollection);
//     const response = await addDoc(firstCollection, userObj)
//     console.log(response, "response");

// const secondCollection = collection(db,"user")
// const response2 = await setDoc(secondCollection,userObj2)
// console.log(response);


// })

// const sumbitBtn = document.getElementById("sumbitBtn");
// sumbitBtn.addEventListener("click", async (event) => {
//   event.preventDefault(); // Add this line to prevent the default form behavior

//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const password = document.getElementById("pass");

//   const userObj = {
//     name: name.value,
//     email: email.value,
//     password: password.value
//   };

//   const firstCollection = collection(db, "user");
//   try {
//     const response = await addDoc(firstCollection, userObj);
//     console.log(response, "response");
//   } catch (error) {
//     console.error(error);
//   }

// });


// import { addDoc, app, collection, db, getDocs, } from "./data.js";

// const sumbitBtn = document.getElementById("sumbitBtn")
// sumbitBtn.addEventListener("click", async (event)=>{
//     event.preventDefault()


// const name = document.getElementById("name")
// const email = document.getElementById("email")
// const pass = document.getElementById("pass")
// const month = document.getElementById("month")

// const obj = {
//     userName : name.value ,
//     userEmail : email.value,
//     userPass : pass.value,
//     userMonth : month.value,

// }


// const collectionOfUser = collection(db, "userDataCollection")

// try {
//     const response = await addDoc(collectionOfUser,obj)
// } catch (error) {
//     console.log("error")
// }


// })

// setTimeout(()=>{
// console.log("Hello world");
// }, 2000)

// const foo = setInterval(()=>{
//     console.log("Hello world")
// },3000)

// clearInterval(foo)



// const obj = {
//     firstName : "shaheer",
// lastName : "Khan",
// rollNo : 174746,
// email : undefined,
// result : null,
// course : ["html","css",'js'],
// numbers :  {
//     html : 90,
//     css : 80,
//     js : 95
// },
// final : ()=>{
//     let total = this.numbers.html + this.numbers.css + this.numbers.js
//     this.result = total
// return result

// }
// }


// console.log(obj);
// console.log(this.final());

// obj.final()
// console.log(obj);


// const arr1 = ["karachi","lahore","quetta"]
// const [firstCity,secCity,thirdCity] = arr1

// console.log(secCity);

// console.log("Hello world");


// const myPromise = new Promise((resolve, reject) => {
//     let userPass = true
//     if (!userPass) {
//         resolve("Your Password is correct")
//     } else {
//         reject("Kia hai bhai sahi password daalo")
//     }
// })
// .then((success)=>{
// console.log(success, "success");
// })
// .catch((error)=>{
// console.log(error,"error");
// })

// import {userAge,userEmail,userName} from "./data.js"

// console.log(`My name is ${userName} my age is ${userAge} and for any query you can send me an email at ${userEmail}`)

// import userName from "./data.js";

// console.log(userName);

// console.log('Hello');



// const arr = ["karachi","lahore","quetta","peshawar"]
// const arrDhoond = arr.find((value,index,array)=>{

// for(var i of arr){
//     console.log(arr[i]);
//     if(arr[i] === "lahore"){

//         console.log(value,index);
//     }

//     break
// }


// })



// const arr = [

//     { name: "Shaheer" },
//     { name: "Hadi" },
//     { name: "Saad" },
//     { name: 'Ahmed' }

// ]

// const arrFind = arr.findIndex((value, index) => {
//     console.log(value, index);

//     if (value.name === "Saad") {

//         return true
//     }



// })
// console.log(arrFind);


// const fruitArr = [2,4,6,5,4,8]
// const mapping = fruitArr.map((value,index)=>{

// console.log(value,index);

// return value * 2

// })


// console.log(mapping);
// console.log(fruitArr);

// const fruitArr = [2,4,,9,1,7,19,236,5,6,4,6,8,6]
// const filterThing = fruitArr.filter((value,index)=>{



// console.log(value,index);




// })

// console.log(fruitArr)
// console.log(filterThing);

// var arr = [1, 11, 113, 8, 2, 4, 8, 6, 8, 8, 10]
// var tempArr = []
// const value = arr.forEach((value, index) => {
//     console.log(value, index)
//     // arr[index] = value  * 2
//     if (value % 2 !== 0) {
//         tempArr.push(value)
//     }
// })


// console.log("value", value)
// console.log("arr", arr)
// console.log("tempArr", tempArr)



// const myPromise = new Promise((myResolve,myReject)=>{

//     let isLogin = false
// if(isLogin){
//     myResolve("Login Succsfully")
// }else{
//     myReject("Incorrect password or email")
// }
// })
// .then((success)=>{
//     console.log(success,"success");
// })
// .catch((error)=>{
//     console.log(error,"error");
// })


// const foo = (name,email,age, ...restThing)=>{

//     console.log(name,email,age,restThing);
// }

// foo("ahad","ahad@gmail.com",15,"designer","student","Unmarried")


// const foo = (num1,num2,...num3)=>{

// // return num1 + num2, num3

// console.log(num1+num2,num3);

// }

// foo(10,10,"shaheer","khan")

// const fetchData = async () => {
//     try {
//         const response = await fetch("https://fakestoredsffrfeapi.com/products").then(res => res.json());
//         console.log(response);
//         console.log("something wrong");
//     } catch (error) {
//         console.log("error", error);
//     }
// }

// fetchData()





// import {addDoc, app, collection} from "./data.js"


// const formSubmit = async () =>{
// console.log('Hello');

// const obj = {
//     firstName : 'shaheer',
//     lastName : "khan",
//     rollNo : 174746
// }

// try {

//     const res = await addDoc(collection(db,"user"))
// console.log(res, "response");

// } catch (error) {
//     console.log("error",error.message);
// }



// }

// window.formSubmit = formSubmit






// import { auth, createUserWithEmailAndPassword,db ,doc, setDoc } from "./data.js"


// const signIN = async () => {
//     try {
//         const email = document.getElementById("email")
//         const pass = document.getElementById("password")
//         // const fullName = document.getElementById("fullName")
//         const gen =  document.getElementById("gen")

// const userObj = {
//     email : email.value,
//     // name : fullName.vlaue,
//     gender : gen.value
// }

// console.log("userObj" ,userObj);

//         const response = await createUserWithEmailAndPassword(
//             auth,
//             email.value,
//             pass.value
//         );

// const uid = response.user.uid

// const res = await setDoc(doc(db,"todo",uid), userObj )


// window.location.href = "./login.html"

//         console.log(response);
//     } catch (error) {
//         console.log("error", error.message);
//     }

// }




// window.signIN = signIN





// var arr = ["bar","baz","boo"]
// arr.length = 1

// arr.push("egg")

// console.log(arr);




// function myfunc (a=9){

// return 2 * a

// }

// var func = myfunc();
// console.log(func);



// var para = document.createElement("p")
// para.innerHTML = "Hello world"

// console.log(para);



// const myArr = ["karachi","lahore","multan","pindi","qietta"]

// const filterArr = myArr.map((value,index)=>{


// if(value === "karachi"){
// console.log(index);
// }else{
//     console.log("Ghalt value");

// }

// // console.log(value,index);

// })
// console.log(filterArr)


//  var obj = {
//     name : "Shaheer",
//     age : 21,
//     email : undefined,
//     bike : true,
//     job : undefined
//  }

//  var {name,age} = obj

//  console.log(`His name is ${name} and he is ${age} years old `);


// var arr = ["shaheer",21,"karachi"]
// var [name,age,city] = arr
// console.log(name,age,city);


// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const fullYear = [...q1,...q2,...q3,...q4]
// console.log(fullYear);



// function foo(name, ...args){

// // console.log(name,args);
// return name , args


// }

// var tempFunc = foo("shaheer", 21,"karachi","brown")
// console.log(tempFunc);


// const arr = ['karachi',"lahore","multan","quetta"]

// for(const value of arr){
//     if(value === 'karachi'){

//         console.log("Values: " , value );
//     }else{
// console.log("Didn't have any");

//     }

// }



// function foo(name, ...args){
//     var arr = []


// console.log(name,args);

// arr.push(args)
// console.log(arr);
// }

// foo("shaheer",21,"karachi","web Development")

// var [age,city,passion] = arr

// console.log(city,passion);


// const arr = ['karachi',"lahore","multan","quetta"]
// let text = ""

// for(let value of arr){

// text += value + " "

// }

// console.log(text)

// let str = "Hello wolrd" 
//  console.log(str.charAt(10  ))


// const fakePromise = new Promise((resolve,reject)=>{

// isTrue = false

// if(!isTrue){
// resolve("You are good to go")
// }else{
//     reject("You are stopped here")
// }


// })
// .then((value)=>{
// console.log("You promised are successful: ",value);

// })
// .catch((error)=>{
// console.log("You promised are not successful: ",error);

// })

// console.log(fakePromise);


// const pre = setTimeout(() => {

// console.log("Hello worl");


// }, 3000);

// const stop = setInterval((pre) => {
//     console.log("hello world");

// }, 2000);
// clearInterval(stop)

// arr.from("ABCDEFG")

// let arr = []
// console.log(arr.from('ABCDEFG'));


//  let age = 21;
//  const result = (age >= 18) ? "Your'e eligible" : "Ypur'e not eligible"
//  console.log(result);


// function foo(a,b=2){
//     return a * b
// }
// const temp = foo(3)
// console.log(temp);


// const cityObj = {
//     city1 : "karachi",
//     city2 : "Lahore",
//     city3 : "Multan",
//     city4 : "Quetta",
// }

// cityObj.city5 = "Islamabad"
// console.log(cityObj);


// delete cityObj.city3
// console.log(cityObj);


// const arr = [ "karachi","Lahore","Multan","Quetta"]
// console.log(arr);

// arr.pop()
// arr.push("Pindi")
// arr.shift()
// arr.unshift("Dubai","Indina")
// arr[0] = "Delhi"
// let len = arr.length
// console.log(arr);
// let len = arr.toString()
// console.log(len);


// const fakePromise = new Promise((resolve,reject)=>{

//     let theyLikeSomeoneElse = true

// if(theyLikeSomeoneElse){

//     resolve("Everyone is alright worth beleiving")
// }else{

//     reject('Mai kitna massom hu is duniya ke lye')
// }

// })
// .then((result)=>{
// console.log("result: " , result);

// })
// .catch((error)=>{
// alert(error)
// })



// const fetchData = async () =>{
//     try {
//         await fetch("Hello everyone here's nothing to fetch")
//         console.log("Kia bawaseer hai");
//     } catch (error) {
//         alert(error)
//     }
// }

// fetchData()



// const arr = ["karachi","lahore","Multan","quetta"]
// let newArr = arr.find((value,index)=>{


// if(value){

// return true
// }

// })


// console.log(arr);
// console.log(newArr);



// const arr = ["karachi","lahore","Multan","quetta"]
// let newArr  = arr.findIndex((value,index)=>{

//     console.log(index);

//     if(value === "lahore"){
//         return value
//     }



// })


// console.log(arr);
// console.log(newArr);

// const arr = [2,6,7,5,1,9,15,65,45,12,52,80]
// let newArr = arr.map((value,index)=>{

// console.log(value);

// if(value % 2 == 1)
// return value

// })

// console.log(newArr);
// console.log(newArr.toString());


// const arr = [2,6,7,5,1,15,65,45,12,52,80]
// let newArr = arr.filter((value)=>{
//     console.log(value);

// if(value == 9){

//     return true
// }
// })

// console.log(newArr);


// class Person {
//     constructor(fName,lName){


//         this.first = fName,
//         this. last = lName
//     }


// personData(){
//     return "My name is " + this.first + this.last 
// }

// }

// const person = new Person("Shaheer","Khan")
// document.write(person.personData())

// console.log(person);




// signIN = () => {

//     const email = document.getElementById("email")
//     const pass = document.getElementById("password")
//     const name = document.getElementById("fullName")
//     const gender = document.getElementById("gen")


//     localStorage.setItem("userEmail",email.value)
//     localStorage.setItem("userPass",pass.value)
//     localStorage.setItem("userName",name.value)
//     localStorage.setItem("userGender",gender.value)

//     if(localStorage.getItem("userEmail")){

//         window.location.href = "./login.html"
//     }



// }


// let x;

// for(x = 0; x<20; x++){

//     if(x % 3 == 0){

//         console.log(x);
//     }
//     // console.log(x);

// }


// const obj = [
//     {firstName : "Shaheer"},
//     {lastName : "Khan"},
// ]

// console.log(obj);


// const [firstN,lastN] = obj

// console.log(firstN,lastN);



// const userData = [{
//     name : "John",
//     fullName : "John Doe",
//     age : 20,
//     country : "Berlin",
//     qualification : "bachelour"
// }]

// const {name,fullName,age,...args} = userData

// for(value in userData){

//     console.log(value,userData[value]);

// }



// class Aura {


//     constructor(name,fullName,age,country,email) {

//         this.name = name,
//         this.fullName = fullName,
//         this.age = age,
//         this.country = country,
//         this.email = email

//     }
// }

// const aura = new Aura("Ali","Ali khan",15,"Pakistan","ali@gmail.com")
// const aura1 = new Aura("Saad","Saad Shaheer",25,"Pakistan","saad@gmail.com")
// const aura2 = new Aura("khan","khan baba",18,"india","khan@gmail.com")

// console.log(aura);
// console.log(aura1);
// console.log(aura2);


// var firstNum = +prompt("enter first num")
// var secNum = +prompt("enter sec num")
// var finalNum = firstNum + secNum
// document.write(`Sum of ${firstNum} and ${secNum} is ${finalNum}`);

// var firstNum = +prompt("enter first num")
// var secNum = +prompt("enter sec num")
// var finalNum = firstNum * secNum
// document.write(`multiply of ${firstNum} and ${secNum} is ${finalNum}`);

// var firstNum = +prompt("enter first num")
// var secNum = +prompt("enter sec num")
// var finalNum = firstNum / secNum
// document.write(`division of ${firstNum} and ${secNum} is ${finalNum}`);

// var firstNum = +prompt("enter first num")
// var secNum = +prompt("enter sec num")
// var finalNum = firstNum - secNum
// document.write(`sub of ${firstNum} and ${secNum} is ${finalNum}`);

// var firstNum = +prompt("enter first num")
// var secNum = +prompt("enter sec num")
// var finalNum = firstNum % secNum
// document.write(`modulus of ${firstNum} and ${secNum} is ${finalNum}`);


// var val;
// val = 5;
// document.write(`initial value: ${val}`)
// val++    
// document.write(`value after increment: ${val}`)
// val += 7
// document.write(`value after addition: ${val}`)
// val--
// document.write(`value after decrement: ${val}`)
// var divide = val / 3
// document.write(`value after division: ${divide}`)

// const ticketPrice = 600
// document.write(`total cost to buy 5 tickets to a movie is ${ticketPrice * 5} PKR`)


// var table = +prompt("enter table number")
// var lengthOfTable = +prompt("enter table length")


// for (var i = 1; i <= lengthOfTable; i++) {
//     document.write(`${table} x ${i} = ${table * i} <br /> `);
// }


// const checker = (char) => {

//     let ascii = char.charCodeAt(0)

//     if (ascii >= 47 && ascii <= 57) {
//         console.log("this is a number")
//     }else if(ascii >= 65 && ascii <= 90){
//         console.log("this is a Uppercase letter")
//     }else if(ascii >= 95 && ascii <= 122){
//         console.log("this is a Lowercase letter")
//     }else{
//         console.log("this is not a proper number")
//     }


// }

// const input = prompt("Enter anything")
// checker(input)



// const numberChecker = (num1, num2) => {

//     if (num1 > num2) {
//         console.log(`${num1} is greater than ${num2}`);
//     } else if (num2 > num1) {
//         console.log(`${num2} is greater than ${num1}`);
//     } else {
//         console.log(`${num1} and ${num2} are eqauls`);
//     }

// }

// const numberOne = +prompt('Enter first number')
// const numberTwo = +prompt('Enter second number')
// numberChecker(numberOne, numberTwo)


// const pnz = (num) => {

//     if (num >= 0) {
//         console.log("This is a postive integer");
//     } else if (num <= 0) {
//         console.log("This is a negative integer");
//     } else if (num === 0) {
//         console.log("This is a zero integer");
//     } else {
//         console.log("Enetr again");

//     }

// }

// let number = +prompt("Enter any number to show that your number is positve, neagative or zero")
// pnz(number)



// const vowels = prompt("Enter any string value length should be 1")

// if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
//     console.log("This is a vowel");
// } else {
//     console.log("This is not a vowel");
// }


// const userPastPass = 'user***90'
// const userPass = prompt("Enter your password")

// if (!userPass) {
//     console.log("Please enter your password");
// } else if (userPass === userPastPass) {
//     console.log("Correct! The password you entered matches the original password");
// } else {
//     console.log("incorrect Password");
// }


// var greeting;
// var hour = 20;

// if (hour < 18) {
//     document.write("Good day");
// } else {
//     document.write("Good evening");
// }



// var arr = [[],[],[],[],[]]
// console.log(arr);



// var multiArr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// console.log(multiArr);


// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// var userNumber = +prompt("Enter any table number")
// var lengthOfTable = +prompt("Enter any table length")

// for (var i = 1; i <= lengthOfTable; i++) {
//     console.log(`${userNumber} x ${i} = ${userNumber * i}`);
// }

// var fruits = ["apple","banana","mango","orange",'strawberry']

// for(var i = 0; i <= fruits.length; i++){
// console.log(`Element at index is ${i} is ${fruits[i]} `);

// }


// for(var i=15; i >= 1; i--){
// console.log(i);

// }


// for(var i =2; i < 100; i++){
// if(i % 2 == 0){
//     console.log(`${i} is even number`);   
// }else{
//     console.log(`${i} is an odd number`);
// }
// }

// for(var i =2; i < 100; i++){
// if(i % 2 !== 0){
//     console.log(`${i} odd nukber`);   
// }
// }


// var bakery = ["cake", "biscuit", "cookie", "pastry", "fudge"]

// var user = prompt("Enter any item")

// for (var i = 0; i < bakery.length; i++) {
//     if (user === bakery[i]) {
//         alert(`${bakery[i]} is available at index ${i} in our bakery`)
//     }else{
//         alert("We are sorry. " + user + " is not available in our bakery")
//     }
// }



// var A =  [24, 53, 78, 91, 12];

// var findLargest = Math.max(...A)

// console.log(findLargest);


// var A =  [24, 53, 78, 91, 12];
// var findSmallest = Math.min(...A)
// console.log(findSmallest);
