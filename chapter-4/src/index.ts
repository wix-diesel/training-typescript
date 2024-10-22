function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

let fibonacciGenerator = createFibonacciGenerator();
console.log("Output Fibonacc")
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log("*****************************")

function* createNumbers(): Generator<number> {
    let n = 0
    while (1) {
        yield n++
    }
}

let numbers = createNumbers()
console.log("Output number increment")
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log("*****************************")

type Log = (message: string, userId?: string) => void

let log: Log = {
    message,
    userId = 'Not signed in'
} => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}