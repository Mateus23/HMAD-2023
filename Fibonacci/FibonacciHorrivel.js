const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number:', num => {
    console.log(`Fibonacci of ${num} is ${fibonacci(Number(num))}!`);
    readline.close();
  });

// let totalCalls = 0;

const fibonacci = (number) => {
    // totalCalls += 1
    if (number < 3) {
        return 1;
    }
    return fibonacci(number-1) + fibonacci(number -2)
}



// for (let i = 10; i <= 20; i++){
//     console.log(`fibonacci de ${i} = ${fibonacci(i)}`)
//     console.log("Total de chamadas: ", totalCalls)
//     totalCalls = 0;
// }