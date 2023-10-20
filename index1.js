/* var myStrings = 'i\'m a "fun godwin" string';
console.log(myStrings.indexOf("godwin"));
var str = "he is the reason i lied"
console.log(str);
var sts = str.slice(6,16);
console.log(sts);

var myString = "i want to be a front-end developer";
console.log(myString.toUpperCase()); 

let word = "rthyms";

if( word.indexOf("a") !== -1  || word.indexOf("e") !== -1 || word.indexOf("i") !== -1 || word.indexOf("o") !== -1 || word.indexOf("u") !== -1){

    console.log("it contains a vowel");

}else{

    console.log("it has no vowel")


}*/
/*var tags = "rice, beans, garri, oil, yam"

var myCar = new Object();

myCar.maxspeed = 50;

myCar.driver = "Godwin";

console.log(myCar.maxspeed);

console.log(myCar.driver);

var array = [];
array[0] = 5;
array[1] = "gift";
array[2] = "jehovah";
console.log(array);
console.log(array[2]);


myCar.drive = function(){ console.log("now driving");};
myCar.drive();

var myCar2 = {maxspeed: 70, driver: "Godwin", drive: function(){ console.log("now driving again");}};
console.log(myCar2.maxspeed);
myCar2.drive();
myCar2.toUppercase = function(){ console.log("A-Z");};
myCar2.toUppercase();


function getAverage  (a,b){

    var average = (a + b) /2;
    console.log(average);

}
getAverage(3,5);
var fast = "come";
var fast = "bro's";
console.log(fast); 

let men = "boy";
men = "girl"
console.log(men)

var mystring ="product";

for(let myString = "#"; myString.length < 8; myString += "#"){

    console.log(myString);

}*/


for(let myNumber = 1; myNumber <= 100; myNumber++){

    if(myNumber % 3 == 0 && myNumber % 5 == 0){
        console.log("FizzBuzz");
    }else if(myNumber % 3 == 0){
        console.log("Fizz");
    }else if(myNumber % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(myNumber);
    }
    
}  

/*function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    const sortStr1 = str1.split("").sort().join("");

    const sortStr2 = str2.split("").sort().join("");
    
    return sortStr1 == sortStr2

}

console.log(anagram("listen","silent"));





function longestWord(sentence){
    const words = sentence.split(" ");
    let longWord = "";
    for (let i = 0; i < words.length; i++){

        const word = words[i].replace(/[.,!?]/g, '');
        if(word.length > longWord.length){
            longWord = word;
        }

    }
    return longWord;
}
console.log(longestWord("Godwin has a big head"));*/


function isIsogram(str){
// to lowercase    
str = str.toLowerCase();
// split the lowercase
let isogram = str.split("");
let sortisogram = isogram.slice().sort();

for(let i = 0; 1 < isogram.length; i++){
    if(sortisogram[i + 1] == sortisogram[i]){ 
        return false;
    }else{
        return true;
    }

}
    console.log(sortisogram);
}
console.log(isIsogram("listen"));


// solution 2.
function FilterNumbers(numbers){
    const evenNumbers = numbers.filter((number) => number % 2 == 0);
    const oddNumbers = numbers.filter((number) => number % 2 !== 0);
    return{evenNumbers, oddNumbers};
}

const numbers = [2, 10, 5, 7, 9, 100, 23, 17, 20];
const {evenNumbers, oddNumbers} = FilterNumbers (numbers);
console.log([evenNumbers, oddNumbers]);