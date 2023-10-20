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