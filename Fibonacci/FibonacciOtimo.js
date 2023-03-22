const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Enter a number:', num => {
    console.log(`Fibonacci of ${num} is ${fibonacci(Number(num))}!`);
    readline.close();
});

const fibonacci = (number, n1 = 1, n2 = 1) => {
    if (number < 3) {
        return n1;
    }
    return fibonacci(number - 1, n1 + n2, n1);
}