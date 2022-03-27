
/*
En matemáticas, la sucesión o serie de Fibonacci es la siguiente sucesión infinita de números naturales:
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597...
La sucesión comienza con los números 0 y 1;2​ a partir de estos, «cada término es la suma de los dos anteriores
*/

function Fibonacci(num){
const fib = [0, 1];

for (let i = 2; i <= num; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
    
}

return fib[num]
}

console.log(Fibonacci(10))

