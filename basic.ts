function add(n1: number, n2:number, showResult:boolean, phrase:string){
    const result = n1 + n2
    if(showResult){
        console.log(phrase + result);    
    }else{
        return result;
    }
    
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

// let number1: number; 먼저 타입을 선언하고, 할당하는게 좋은 문법임
//number1 = '5';