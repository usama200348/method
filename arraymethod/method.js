//Q1

var first_name =prompt("Enter your First Name")
var Last_name =prompt("Enter your Second Name")
var fullName = first_name+" "+Last_name
console.log("Hello "+fullName)


//Q2

var fav_phone =prompt("Enter your Favourite Phone")
console.log("My Fvourite Phone Is: "+fav_phone)
console.log("The Length Of The Given String Is: "+fav_phone.length) 

//Q3

var hello ="Hello World"
var index = hello.lastIndexOf("l")
console.log(hello)
console.log("The Last Index Of Hello World 'l' Is: "+index)

//Q4

var hello ="Hello World"
var index = hello.charAt()
console.log(hello)
console.log("The Last Index Of Hello World 'l' Is: "+index)

//Q5

var citizen ="Pakistani"
var index = citizen.charAt()
console.log(index)

//Q7
//First Method
var city ="Hyderabad"
city.replace("Hyder","Islam")

//Second Method

var city ="Hyderbad"
for(i=0; i<city.length; i=i+5){
var extract=city.slice(i,i+5)
    if (extract=="Hyder") {
        city=city.slice(0,i)+"Islam"+city.slice(i+5)
    }
}
console.log(city)

//Q8

//First Method

var message = "Ali and Sami are best friends. They play cricket and football together."
message.replace("and","&")


//Q9

var num = "472"
var convert(Number(num))
console.log("Value: "+convert)
console.log("Typeof: "+typeof convert)//In String

//Converting In Number
var num = "472"
var convert=Number(num)
console.log("Value: "+convert)
console.log("Typeof: "+typeof convert)


//10




//11

var dry_fruits = "peaunts"
dry_fruits.toUpperCase()

//12

var network= prompt("Enter Your Favourite Net Work")
alert(network.toLowerCase())


//13

var network= prompt("Enter Your Favourite Net Work")
var Upper=network.toUpperCase()
alert(Upper)


//Q14




//Q15
a="3"
b="3"
x=a+b
console.log("a is: "+a)
console.log("b is: "+b)
console.log("a + b is "+x)

//Q16

a="3"
b="3"
x=a-b
console.log("a is: "+a)
console.log("b is: "+b)
console.log("a + b is "+x)

//Q17




//Q18

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput=prompt("What Do You Want to eat")
var found =false
for(i=0; i<items.length; i++){
    if (items[i]===userInput) {
        found=true
    }
}
if (found == true) {
    console.log("Your Item "+userInput+" Is Found")
}else{
    console.log("Your Item "+userInput+" Can not be Found")
}

//Q19

var first = prompt("Enter YOur First String")
var second = prompt("Enter Your Second String")
if (first > second) {
    alert(first+" Is Greater Than "+second)
}else{
    alert(second+" Is Greater Than "+first)
}


//Q20



//Q21

var university = "University of Karachi";
var array = university.split("");

for (var i = 0; i < array.length; i++) {
  console.log(array[i] );
}

//Q22

var country=prompt("Enter Your Country You Lived In")
    var last_character = country.charAt(country.length -1)
console.log(country)
console.log("The Last Character Of the User Input is "+last_character)