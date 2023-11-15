/*function selectNumber(){
    const array = [13, "hello", "thick", 17];
    console.log(array.length)
    const random = Math.floor(Math.random() * array.length);
    console.log(array[random]);
}    
selectNumber();

var power = function(base, exponent) {
    var result = 2;
    for (var count = 0; count < exponent; count++)
    result *= base;
    return result;
    };
    console.log(power(2, 10));

    const array = ["boy", true, 13, "sapa"];

    const array1 = array.pop();
    console.log(array)
    console.log(array1);
    const array2 = array.push("sapa");
    console.log(array);
    console.log(array2);*/

    // const x = "outside";


    // var f1 = function() {
    // let x = "inside f1";
    // let fig = 13;
    // console.log(fig);
    // };
    // f1();
    // console.log(f1());

    // //dont really understand
    // function greet(who) {
    //     return who;
    //     }
    //     console.log("Hello " + greet("harry"));
    //     console.log(greet("harry"));

       
    //     function who(who) {
    //         console.log("i love craze " + who);
    //         }
    //         who("people");  


    //         function chicken() {
    //             return egg;
    //             }
    //             function egg() {
    //             return chicken;
                
    //             }
    //             console.log(egg() + " came first.");

    /*function func(x) { var x = 5;
    return x; }
     console.log(x)
     ;*/


    //  function solution(str, ending){
    //     var index = str.split("");
    //     var index1 = ending.split(""); 

    //     const arr = index.filter(tally => /\a-z$/ == index1);
    //     console.log(arr);
    //  }
    //  console.log(solution("abc", "bc"));



                 

    function solution( str, ending){
        return str.endsWith(ending)
    }
    console.log(solution('abc', 'io'));

    