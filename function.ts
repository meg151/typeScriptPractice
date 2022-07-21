function printResult(num: number): void { 
    console.log('Result: '+ num);
    
}

function printResult1(num: number): void {
    console.log('Result: ' + num);
    
}

printResult(add(5,12));

let combineValues: (a:number, b:number) => number;

combineValues = add;
// combineValues = printResult1
// combineValues = 5;

console.log(combineValues(8,8));



// let somevalue : undefined;