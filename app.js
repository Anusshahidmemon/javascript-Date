let mention = new Date()
mention =mention.toString()
console.log(mention)
console.log(mention.slice(0,3))
console.log(mention.slice(16,24))
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; // January is 0!
let yyyy = today.getFullYear();
console.log(`${dd}-${mm}-${yyyy}`)
console.log(`${mm}-${dd}-${yyyy}`)

for(let i=2024; i<=2050; i++){
    let sundate =new Date(i,0,1)
    
    if(sundate.getDay() === 0){
        console.log(sundate)
    }
}
let userInput =5;
let userInputMatch =Math.round(Math.random()*10)
if(userInput === userInputMatch){
    console.log("you guess the write number")
}else{
    console.log("not found")
}
let currentDates = new Date()
let augDates = new Date(2024,7,14)
let remaindays = augDates -  currentDates
console.log(remaindays/(1000*60*60*24))

let givenNum = 21
if(givenNum % 3 === 0 || givenNum % 7 === 0){
    console.log("divide y 3 or 7")
} else if(givenNum % 3 === 0 ){
    console.log("divide y 3 ")
}
 else if(givenNum % 7 === 0 ){
    console.log("divide y 7")
}
else{
console.log("not found")
}
let program ="javascript"
if(program.slice(0,4)=== "java"){
    console.log("java found")
}
let num1 = 55; 
let num2 = 105;


if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
    console.log("At least one of the numbers is in the range 50 to 99 (inclusive).");
} else {
    console.log("Neither of the numbers is in the range 50 to 99 (inclusive).");
}
let num3 = 55; 
let num4 = 105;
let num5 = 105;
if ((num3 >= 50 && num3 <= 99) || (num4 >= 50 && num4 <= 99) || (num5 >= 50 && num5 <= 99)) {
    console.log("At least one of the numbers is in the range 50 to 99 (inclusive).");
} else {
    console.log("Neither of the numbers is in the range 50 to 99 (inclusive).");
}