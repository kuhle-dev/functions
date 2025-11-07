function multiply (a, b, c) {
    if(a == b || b == c || a == c) {
        return "Numbers must not be the same";
    }
    return a * b * c;
}
console.log(multiply(2, 2, 2));

const convertToSchools = function(minutes) {
    return minutes * 60;
}

console.log(convertToSchools(2));

const fahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(100));

reverseString = "";
function reverseStr(str) {
    for(let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}
console.log(reverseStr("Kuhle Vulangile"));

function countVowels(str) {
    let count = 0;
    const vowels = "AEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("AEIOU"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(1));