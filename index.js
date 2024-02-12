//question1
let num = 10;
const result = num % 2 === 0 ? "Number is even" : "Number is odd";
console.log(result);
//question2
const fruits = ["mango", "apple", "banana", "orange"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
//question3
let str = "selorm"
console.log(str.toUpperCase());
//question4
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
const testWord = "level";
const results = isPalindrome(testWord);
console.log(results ? `"${testWord}" is a palindrome.` : `"${testWord}" is not a palindrome.`);
//question5
const myAge = 23
console.log(`I am ${myAge} years old.`);
//ques6
for (let i = 1; i < 11; i++) {
    console.log(i);
}
//ques7
let number = 30;
const ans = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(ans);
//ques8
const originalString = "Hello World!";
const lowercaseString = originalString.toLowerCase();
//ques9
const arr = [1, 2, 3, 4]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);
//ques10
let year = 365
const leap = year === 366 ? "it is a leap year" : "It is not a leap year"
//ques11
let num1 = 23;
let num2 = 32;
console.log(num1 + num2);
//ques12
const dayOfWeek = "Monday"; // Replace with the actual day of the week

switch (dayOfWeek.toLowerCase()) {
    case "monday":
        console.log("It's Monday!");
        break;
    case "tuesday":
        console.log("It's Tuesday!");
        break;
    case "wednesday":
        console.log("It's Wednesday!");
        break;
    case "thursday":
        console.log("It's Thursday!");
        break;
    case "friday":
        console.log("It's Friday!");
        break;
    case "saturday":
        console.log("It's Saturday!");
        break;
    case "sunday":
        console.log("It's Sunday!");
        break;
    default:
        console.log("Invalid day of the week.");
}
//ques 13
let width = 12;
let length = 18
const areaOfrectangle = length * width;
//ques 14
const numericString = "123";
const integerValue = parseInt(numericString);
console.log(integerValue);
//ques 15
let input = "Selorm"
const names = ["lormy", "Selorm", "Ayornu"]
for (i = 0; i < names.length; i++) {
    if (input === names[i]) {
        console.log(`${input} is in list`);
        break;
    }
    else {
        console.log(`${input} is noy in list`);
        break;
    }
}
//ques 16
//ques 17
const isHarmattan = false;
if (!isHarmattan) {
    console.log("It's raining!");
}
//ques 18
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//ques19
//ques 20
const numb = 42;
const stringNumber = numb.toString();

//ques21
const colors = ["red", "yellow", "blue"]
console.log(colors.length);
//ques22
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const emailAddress = "lormy@example.com";
const res = isValidEmail(emailAddress);

if (result) {
    console.log(`${emailAddress} is a valid email address.`);
} else {
    console.log(`${emailAddress} is not a valid email address.`);
}
//ques23
const nums1 = 25;
const nums2 = 42;
const nums3 = 18;

const largestNumber = Math.max(nums1, nums2, nums3);
console.log(`The largest number is: ${largestNumber}`);
//ques 24
const givenNumber = 15;
const initialNum = 10;
const finalNum = 20;
const isBetween = givenNumber > initialNum && givenNumber < finalNum;
//ques25
let celsiusTemperature = 25;
const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
//ques26
const stringValue = "10";
const numericValue = parseInt(stringValue);
//ques27
let age;
//ques28
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//ques29
const yourAge = 25;
const isStudent = false;
if ((yourAge >= 18 && yourAge <= 30) || isStudent) {
    console.log("You qualify for a special offer!");
} else {
    console.log("You do not qualify for the special offer.");
}
//ques30

const day = "monday"
switch (day.toLocaleLowerCase()) {
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is saturday");
        break;
    case "sunday":
        console.log("Today is Sunday");
        break;

    default:
        console.log("this is not part of the days of the week");
        break;
}

//ques31
let int = 3;
const checker = int > 0 ? console.log("number is positive") : int < 0 ? console.log("number is negative") : console.log("number is zero");
//ques32
const nums = 5;
const numsToStr = nums.toString()
//ques33
if (num1 > num2) {
    console.log("num1 is greater");
}
else {
    console.log("num1 might be lesser or equal to");

}
//ques 34
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//ques35
const isLoggedOut = true;
const isGuest = true;
if (!isLoggedOut && isGuest) {
    console.log("Welcome, guest!");
} else {
    console.log("You are either logged in or not a guest.");
}

//ques36
let month= "december"
switch (month.toLowerCase()) {
    case "january":
        console.log("this is January");
        break;
    case "february":
        console.log("this is Feb");
        break;
    case "march":
        console.log("this is march");
        break;
    case "april":
        console.log("this is april");
        break;
    case "may":
        console.log("this is may");
        break;
    case "june":
        console.log("this is June");
        break;
    case "july":
        console.log("this is July");
        break;
    case "august":
        console.log("this is august");
        break;
    case "september":
        console.log("this is sept");
        break;
    case "october":
        console.log("this is oct");
        break;
    case "november":
        console.log("this is nov");
        break;
    case "december":
        console.log("this is dec");
        break;
    default:
        console.log("wrong input");
        break;
}

//ques37
let digit = 3;
if(digit%3===0){
    console.log(`${digit} divisible by 3`);
    
}
else{
    console.log(`${digit} is not divisible by 3`);
    
}
//ques38
for(let i =10; i>=1; i--){
    console.log(i);
    
}