function getPeople(handshake) {
    let workers = 0;

    for (let i = handshake; i > 0; i -= workers) {
        workers++;
    }

    return workers;

}

console.log(getPeople(1)); //1
console.log(getPeople(3)); //2
console.log(getPeople(6)); //3
console.log(getPeople(10)); //4
console.log(getPeople(15)); //5
console.log(getPeople(120)); //
