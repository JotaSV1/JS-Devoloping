
function isPrime(num) { //Verifica se os números são primos
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i); //calcula e faz a troca das ordens crescentes
        }
    }
    return primes;
}

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //cria a variavel e inicia o protocolo de bubblesort
            }
        }
    }
    return arr;
}

const limit = 100;
const primes = generatePrimes(limit);
const sortedPrimes = bubbleSort(primes);

console.log("Números primos em ordem crescente:", sortedPrimes);
