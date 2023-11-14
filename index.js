// function findNextSquare(sq){
//    const sQrt = Math.sqrt(sq)
   
//    if(Number.isInteger(sQrt)){
//         const nextSqrt = sQrt / 3

//         const nextPerfectSquare = nextSqrt * 1

//         return nextPerfectSquare
//    }

//    return -1;
// }

// console.log(findNextSquare(81));


// function getCount(str) {
//     var string = str.toLowerCase();
//     let array = string.split('')
//     const vowelCount = array.filter(count => /[aeiou]/.test(count)).length;
    
//     return vowelCount;
//   }
  
//   console.log(getCount("abracadabra"));
//console.log(findNextSquare(121));
function toCamelCase(str){

    const filterStr = str.replace(/[-_]/gi, " ")
    
    let arr = filterStr.split(" ")

    let result = []
    let currentWord = ""

    

    for( let i = 0; i < arr.length; i++){
        // get the elements and push into a new array
        currentWord = arr[i]
        console.log(currentWord);
        // get the elements greater the first
        if(i > 0){
           
            let newWord = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())

            currentWord = newWord

        }   

        
        result.push(currentWord)
        
    }

    return result.join("")
    console.log(currentWord);
}

console.log(toCamelCase("the-stealth-warrior"));


// const str = 'The quick brown fox jumps over the lazy dog.';
// const chars = str.split(' ');
// console.log(chars[8]); gonna come back.

// function isIsogram(str){
//     // to lowercase    
//     str = str.toLowerCase();
//     // split the lowercase
//     let isogram = str.split("");
//     let sortisogram = isogram.slice().sort();
    
//     for(let i = 0; 1 < isogram.length; i++){
//         if(sortisogram[i + 1] == sortisogram[i]){ 
//             return false;
//         }else{
//             return true;
//         }
    
//     }
//         console.log(sortisogram);
//     }
//     console.log(isIsogram("listen"));
    
    
//     // solution 2.
//     function FilterNumbers(numbers){
//         const evenNumbers = numbers.filter((number) => number % 2 == 0);
//         const oddNumbers = numbers.filter((number) => number % 2 !== 0);
//         return{evenNumbers, oddNumbers};
//     }
    
//     const numbers = [2, 10, 5, 7, 9, 100, 23, 17, 20];
//     const {evenNumbers, oddNumbers} = FilterNumbers (numbers);
//     console.log([evenNumbers, oddNumbers]);

//     var power = function(base, exponent) {
//         var result = 1;
//         for (var count = 0; count < base; count++)
//         result *= exponent;
//         console.log(result);
//         };
//         console.log(power(2, 10));
        


//         var power = function(base , squareroot) {
//             let result = 1;
//             for(let i = 0; i < base; i++) {
//                 return base /= squareroot;
//                 return result; 
//             }
//         }
//         console.log(power(144, 12));

//         var x = "outside";
//         let f1 = function() {
//             var x = "inside.f1";
//         }
//         f1();
//         console.log(x);

//         var f2 = function(x) {
//             console.log(x);
//         }
//         f2("inside f2");
        
//         var hello = "morning";

//         function greet(who) {
//             console.log("Hello " + who);
            
//             }
//             greet("Harry");
//             console.log(hello);
//             console.log("Bye");


            /*function chicken() {
                return egg();
                }
                function egg() {
                return chicken();
                }
                console.log(chicken() + " came first.");

                function randomNumber(){
                    randomNumber = [13, "hey", "big head", 17]
                }
                console.log(randomNumber[1]);*/

                    