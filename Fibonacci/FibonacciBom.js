const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Enter a number:', num => {
    console.log(`Fibonacci of ${num} is ${fibonacci(Number(num))}!`);
    readline.close();
});

const fibonacciSolution = {}

const fibonacci = (number) => {
    if (number < 3) {
        return 1;
    }
    if (fibonacciSolution[number]){
        return fibonacciSolution[number]
    }
    fibonacciSolution[number] = fibonacci(number-1) + fibonacci(number -2)
    return fibonacciSolution[number]
}