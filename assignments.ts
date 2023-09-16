//asssignment 01
// Personal Message: Store a person’s name in a variable, and print 
// a message to that person. Your message should be simple,
//  such as, “Hello Eric, would you like to learn some Python today?”
// var personsname:string= "chloe"
// var message :string ="Helo chloe would you like to learn some Python today?"
// console .log(personsname,message)

// assignment 02	Number Eight: Write addition, subtraction, multiplicatin, and division operations that each result 
// in the number 8. Be sure to enclose your operations in 
// print statements to see the results.v
// var n:number=8
// var add:number=0+n
// var sub:number=n-0
// var mul:number=1*n
// var division:number=8%1
// console.log(add,"ädd",sub,"sub", mul,"mul", division,"division")
//assignment 03Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase
// var pname:string="zainab";
// var lowercase:string="zainab";
// var uppercase:string="zainab";
// var tittlecase:string="zainab";
// console.log(pname,lowercase, uppercase,tittlecase)
// assignment 04 Favorite Number: Store your favorite number in a variable. Then, using that variable,
//  create a message that reveals your favorite number. Print that message.
// let favno:number=1
// let message1:string="my favorite no is"
// console.log(favno, message1);


// assignment05Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
//  includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.

// let guestlist=["fatima","ayeesha","tehreen"]
// guestlist.forEach((element)=>{
//     console.log(`i invited to a party"${element} !`)
// })


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
//  a new set of invitations.You’ll have to think of someone else to invite.
// var guestlist1=[("fatima"),("ayesha")]
// console.log(`new invitation`)
// for(var i=0;i<=guestlist1.length-1;i++){
//     console.log(`${guestlist1[1][0]},i hope u   will come.`)
// }
//  ASSIGNMENT 06 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should
//  look something like the following, including the quotation marks:
// var author :string="Mark Twain";
//  var quote  :string=`"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you 
//  feel that you, too, can become great."`
//console.log(`${author},"once said"${quote}`);
//ASSIGNMENT 07 Famous Quote 2: Repeat Exercise 4, but this time store the 
// famous person’s name in a variable called famous_person. Then compose your message
//  and store it in a new variable called message. Print your message.
// var famous_person :string="Mark Twain";
//  var quote  :string=`"Keep away from people who try to belittle your ambitions. Small people always do that,
//   but the really great make you feel that you, too, can become great."`
//   var result=(`("famous_person"; famous_person)"once said"(quote)`)
//  console.log(`${author},${quote}`);

 
// ASSIGNMENT 08 Names: Store the names of a few of your friends in a array called names. Print each person’s
// name by accessing each element in the list, one at a time.

// var names=["tehreen","azka","fiza"];
// names.forEach(element => {
//     console.log(`"!"${element}`)
// });
//ASSIGNMENT 09 .17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 //and you have space for only two guests.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
// name from your list, print a message to that person letting them know you’re sorry you can’t invite them 
// to dinner.

let guest=["fatima","ayeesha","tehreen"]

guest.splice(0,2)



    console.log(`"i am sorry you can’t invite themto dinner. "`)

console.log(guest)

//Print a message to each of the two people still on your list, letting them know they’re still invited. 
let guest1=["ayeesha","tehreen","fatima"]

guest1.splice(0,1)



    console.log(`" they’re still invited."`)

console.log(guest1)

//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program.
let guests=["ayeesha","tehreen","fatima"]

guest1.splice(0,2)
guests.splice(0,0)
console.log(guest1,"empty array")

// ASSIGNMENT 10.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be thesame, but each message should be
//  personalized with the person’s name.
// var names=["tehreen","azka","fiza"];
// var list=[]
// names.forEach((element)=>{
//     console.log(`"how are u?"${element}`)
// })



//  ASSIGNMENT 11 ,39.
// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
function city_country(city:string) {
    console.log(`"faisalabad","pakistan"`);
}
console.log(city_country);


// ASSIGNMENT12,19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the
//  number of people you are inviting to dinner.

let guest2=["ayeesha","tehreen","fatima"]

    console.log(`" you are  invited to dinner."`)

console.log(guest2)

//ASSIGNMENT 13,18.Seeing the World: Think of at least five places in the world you’d like to visit.
var favoriteplaces:string[]=["korea","china","turkey","england","france"];
//• Print your array in its original order.
console.log("ooriginal order",favoriteplaces)
console.log(`...............`)


//• Print your array in alphabetical order without modifying the actual list.
var alphabeticalorder:string[]=favoriteplaces;
for (let i = 0; i < alphabeticalorder.length; i++) {
    for (let a = 0; a < alphabeticalorder.length; a++) {
        const element = alphabeticalorder[a];
        if(alphabeticalorder[i]<alphabeticalorder[a]){
 let check =alphabeticalorder[i];
 alphabeticalorder[i]=alphabeticalorder[a]
 alphabeticalorder[a] =check
        }}}
console.log("alphabetical order",alphabeticalorder)
console.log("...........")
//• Print your array in its original order again .
console.log("ooriginal order",favoriteplaces)
console.log(`...............`)
//ASSIGNMENT 14,8.You should create four lines that look like this:

    var fourlines:any[]=[`"Quaid-e-Azam Leader of is our the greatest history.",
2. "He is the founder of Pakistan." ,
3. "His real Ali Jinnah. name was Muhammad"`]

console.log(fourlines)

//.Your output should simply be four lines with the number 8 appearing once on each line.
fourlines.forEach(element => {
    console.log(`"8"${element}`)})

//ASSIGNMENT 15Think of something you could store in a array. For example, you could make a list of mountains, rivers,
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing 
//these items.
var rivers:string[]=["indus river","jhelum ","kabul","chenab"]
for(let i=0;i< rivers.length;i++){
    console.log(rivers[i])
} 
 //ASSIGNMENT 16,29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
 //that check for certain fruits in your array. 
 //• Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits:string[]=["orange","grapes","mango"];
console.log("favorite fruit",favorite_fruits);
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
// in your array, the if block should print a statement, such as You really like bananas!
console.log("favorite fruit",favorite_fruits);
favorite_fruits.forEach(element=>{
    console.log(`"You really like"${element}"!"`)
})

// ASSIGNMENT 17,T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on
//  the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call
//   the function.

function make_shirt(size=25, textprint="I LOVE MY LIFE"){
    function make_shirt(size :any, textprint:any) {
        let message=`"we have available all size of t shirt ${size} and our print is ${textprint} "`
        console.log(message)
    } }

console.log(make_shirt())
console.log(make_shirt(33,"i love my life"));

//ASSIGNMENT 19,Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love 
//TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
// message.

function shirt_size(size:any) {
    if(size=="large"){
console.log(`our large size is available 45inch to 50 inch`)
    }
    else if(size=="medium"){
        console.log(`our medium size is available 30inch to 40 inch`)
    }

    if(size=="small"){
        console.log(`our small size is available 15inch to 26 inch`)
            }
            else {
                console.log(`invalid input`)
            }}
   console.log(shirt_size("medium"))   
   console.log(shirt_size("large"))   
   
//ASSIGNMENT 20,Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should
 //print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your
 // function for three different cities, at least one of which is not in the default country.



 function city_country1(city:any) {
    if(city=="KARACHI"){
console.log(`Karachi in pakistan`)
    }
    else if(city=="londan"){
        console.log(`londan in uk`)
    }

    if(city=="jaipur"){
        console.log(`jaipur in india`)
            }
            else {
                console.log(`invalid input`)
            }  return city}
   console.log(city_country1("KARACHI"))   
   console.log(city_country1("jaipur"))   
   console.log(city_country1("Hyderabad"))


//ASSIGNMENT 21
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in 
// an artist name and an album title, and it should return a Object containing these two pieces of information. Use the 
// function to make three dictionaries representing different albums. Print each return value to show that Objects are 
// the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks 
// on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at
//  least one new function call that includes the number of tracks on an album.
function make_album(artist_name:string,album_title:string,optional_parameter?:string){
    let Object={
        artist_name,
    album_title,
    optional_parameter
}
return Object}
console.log(make_album("annie","why i do not love animals",`this is my album`))

console.log(make_album("ayat","why i hate my enimies",`this is my album`))


console.log(make_album("seerat","why i love my country",`this is my album`))

//ASSIGNMENT 22
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
//let Names:string[]=["Amelia","sophia","avva","Luna"]
function show_magicians(showmagicians:string[]){
    showmagicians.map((element)=>{
console.log(element)
    })
}
show_magicians(["Amelia","sophia","avva","Luna"])
//assignment23
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
 //the array of magicians by adding the phrase the Great to each magician’s name.Call show_magicians() to see that the 
 //list has actually been modified.
//  function show_magicians1(showmagicians1:string[]){
//     showmagicians1.map((element)=>{
// console.log("the great magician ",element,"is the popular in world")
//     })}

// show_magicians1(["Amelia","sophia","avva","Luna"])

//assignment 24
function show_magicians1(showmagicians1:string[]){
         showmagicians1.map((element)=>{
     console.log("the great magician ",element,"is the popular in world")
         })}
    
     show_magicians1(["Amelia","sophia","avva","Luna"])
var make_great=(show_magicians1)
var array:string[]=["alla","maya","allice"]
make_great(array)

//ASSIGNMENT25

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one 
//parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that 
//is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(item_arr:string[]) {
    return item_arr
}
console.log(sandwich(["salad","cheese","tamato"]))
console.log(sandwich(["salad","zinger","mayo"]))

console.log(sandwich(["pizza","cheese","tamato"]))

//assignment 

function car(munfacture:string,colour:string,model:string,inventedyear:number){
    let Object={
munfacture,
model,
colour,
inventedyear,
    }
}

console.log(car("ali","black","bmw",2022))
console.log(car("hassan","blue","otti",2021))
console.log(car("daniyal","white","kia",2020))


//ASSIGNMENT 27

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals 
// in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about
//  each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals 
//  have in common.You could print a sentence such as Any of these animals would make a great pet!


function animal(name:any) {
    if(name=="Goat"){
console.log(`he give two kg milk`)
    }
    else if(name=="cow"){
        console.log(`he give 10 kg milk`)
    }

    if(name=="bufflo"){
        console.log(`he give 15 kg milk`)
            }
            else {
                console.log(`invalid input`)
            }}
   console.log(animal("goat"))   
   console.log(animal("cow"))   





//assignment28
// Pizzas: Think of at least three kinds of your favorite pizza.
//  Store these pizza names in a array, and then use a for loop to print the name of each pizza.

var pizza:string[]=["pepronic pizza","greek pizza","vegetarian pizza"]

// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statementlike I like pepperoni pizza.
     for (let i = 0; i < pizza.length; i++) {
        const element = pizza[i];
        console.log (element)

        if(element=="pepronic pizza"){
            console.log(`i eat pepronic pizza`)
                }
                else if(element=="greek pizza"){
                    console.log(`i like greek pizza`)
                }
            
                if(element=="vegetarian pizza"){
                                    console.log(`i do not like vegearian pizza`)
                        }
                        else {
                            console.log(`invalid input`)
                        }}
               console.log(animal("pepronic pizza"))   
               console.log(animal("greek"))  


//assignment29
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these 
//items.
var student={
    name:"zainab",
    class:"seven",
rollno:50
}
console.log(student.rollno,student.name);
console.log(student["name"]);
console.log(student);
//assignment29
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var list=["ali","hassan","shakeela","zainab"]

console.log(list)
//• If the list is empty, print the message We need to find some users!

if(list.length==0){
    console.log( "we need to some user")
}
//Remove all of the usernames from your array, and make sure the correct message is printed.

list.splice(0,list.length)
console.log("my arraynis empty")


//ASSIGNMENT 31
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique 
//username.
//• Make a list of five or more usernames called current_users.

let current_users:any=["ali","hassan","shakeela","zainab"]
let new_users1:any=["ali","hassan","shakeela","malaika","zainab"]
for (let index = 0; index < current_users.length; index++) {
    new_users1.map((element:any)=>{
if(element==current_users){
    console.log(`${element}we have need to user`)
}
if(element!=current_users){
    console.log(`user is available`)
}
    })}

//assignment32
// //Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th,
//  except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 
// 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let num4:number[]=[ 1 , 2 ,3, 4, 5, 6,7]
for (let index = 0; index < num4.length; index++) {
    const element = num4[index];
    if(index==0){
        console.log(1) }
        else if (index==1) {
            console.log(2)
        }
        if(index==2){
            console.log(3) }
            else if (index==3) {
                console.log(4)
            }
            if(index==4){
                console.log(5) }
                else if (index==5) {
                    console.log(6)
                } 
                if(index==6){
                    console.log(7) }
                    else   {
                        console.log(`invaild input`)
                    }
}



















