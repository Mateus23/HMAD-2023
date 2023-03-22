const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Enter a number:', num => {
    console.log(`Fibonacci of ${num} is ${fibonacci(Number(num))}`);
    readline.close();
});

const fibonacci = (number) => {
    if (number < 3) {
        return 1;
    }
    let solution = [1, 1]
    for (let i = 2; i < number; i++){
        solution.push(solution[i-2] + solution[i-1])
    }
    return solution[number - 1]
}