
//Необходимо вывести на экран числа от 1 до 5.

for(var a = 1; a <= 5; a++){
    console.log(a);
}

//Необходимо вывести на экран числа от 5 до 1.

for(var b = 5; b >= 1; b--){
    console.log(b);
}

//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

var myArr = ["a", "b", "c"];

myArr.push(1, 2, 3);

console.log(myArr);

//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. (Используйте concat).

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

console.log(array1.concat(array2));

//Напишите программу, где пользователь вводит любое целое положительное число. 
// А программа суммирует все числа от 1 до введенного пользователем числа.

//рекурсивный способ решения

function sumTo(n){
    if(n > 1){
        return n + sumTo(n - 1);
    }
    else{
        return n;
    }
}
sumTo(4);

// способ решения через цикл

function sumTo(n){
 var result = 1;
 for(n; n > 1; n--){
     result+= n;
 }
 return result;
}
sumTo(4);

//решение по формуле арифметической прогрессии

function sumTo(n){
    return (n*(n + 1))/2;
}
sumTo(4);

//Вычислить факториал

function factorial(n){
    if(n > 1){
        return n * factorial(n - 1);
    }
    else {
        return n;
    }
}
factorial(5);

// Фибоначчи
// рекурсия


function fib(n) {
    if (n <= 1){
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}
fib(3);

//цикл

    function fib(n) {
        var a = 1, b = 1;
        for (var i = 3; i <= n; i++){
            var c = a + b;
            a = b;
            b = c;
        }
        return b;
    }