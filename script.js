let first_name = prompt("Tell me your first name:");
let last_name = prompt("Tell me your last name:");

function full_name(x, y) {
    console.log(x + " " + y);
}

let yourName = full_name(first_name, last_name);

function last_first(x, y) {
    console.log(y + ", " + x);
}

let your_name = last_first(first_name, last_name);

let age = prompt("Tell me your age:");
age = parseInt(age, 10);

function over18(x) {
    if (x >= 18) {
        return true;
    } else if (isNaN(x)) {
        return false;
    } else {
        return false;
    }
}

age = over18(age);
console.log(age);

function to_celcius(x = parseFloat(x)) {
    let answer = (x - 32) / 1.8;
    return answer;
}
console.log(to_celcius(32));

function to_fahrenhet(x = parseFloat(x)) {
    let answer = x * 1.8 + 32;
    return answer;
}
console.log(to_fahrenhet(32));