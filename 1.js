let a = [];
let b = [];

let c = a.concat(b);

c = [...a, ...b];

c = [10, ...a, 20, ...b];

for (let i = 0; i <= 5; i++) {
    let value = parseInt(prompt("Enter value"));
    a.push(value);
}

console.log(a);