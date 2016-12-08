///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES
var myString = "Hello";
var myInteger = 1;
var myDictionary = {name: 'Lorenzo'};
var temperature = 98.6;
temperature += 5;
temperature *= 3;
temperature -=20;
alert(temperature);

///2. DATA STRUCTURES
var Days_of_the_Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
Days_of_the_Week[0] = "domingo";
Days_of_the_Week[1] = "lunes";
Days_of_the_Week[2] = "martes";
Days_of_the_Week[3] = "miercoles";
Days_of_the_Week[4] = "Jueves";
Days_of_the_Week[5] = "viernes";
Days_of_the_Week[6] = "sabado";
var price_ice_cream = {Vanilla: "$1.99", Chocolate: "$2.49", Strawberry: "$2.25"};
price_ice_cream["Chocolate"]= "$0.99";
price_ice_cream["Pistacio"]="$1000";
delete price_ice_cream["Strawberry"];
console.log(price_ice_cream);

///3. FUNCTIONS & CONDITIONAL STATEMENTS
var Days_of_the_Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
function DoIHaveToGoToSchoolToday(index){
 if (index==5||index==6){
   alert("No, today is " + Days_of_the_Week[index] + ". You don't have to go to school.")
 } else {
 	alert("Yes, today is " + Days_of_the_Week[index] + ". You have to go to school.")
 }
}
DoIHaveToGoToSchoolToday(6);
DoIHaveToGoToSchoolToday(3);

///4.  LOOPS
price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52]
for (var i =1; i<13; i++){
	alert("At mounth "+ i +" you spent "+ (price_of_Gasoline[(i-1)]*40) + "$ for gas.");
}

///Part 2
The "your email address" disapear.


