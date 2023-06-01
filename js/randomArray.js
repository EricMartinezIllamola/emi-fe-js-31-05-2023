let array = [];

for (let index = 0; index < 100; index++) {
    array.push(Math.floor(Math.random()*1000 + 1));
}

console.log(array.sort((a,b) => a-b));