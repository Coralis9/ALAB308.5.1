// REUSABLE FUNTIONS
// psuedo code then 
// create funtions then add examples ! 


function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function Array(numbers) {
    return numbers.length === 0 ? 0 : sumArray(numbers) / numbers.length;
}

function str.length(strings) {
    return strings.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}

function str.length(strings, length) {
    return strings.filter(str => str.length > length);
}

function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}


// part 2 psuedo code !
// create code then add examples !

// creating a chart 

function (people) {
    return people.sort((a, b) => a.age - b.age);
}

function (people) {
    return people.sort(person => person.age <= 50);
}

function (people) {
    return people.reduce((sum, person) => sum + person.age, 0);
}

function averageAge(people) {
    const totalAge = sumAges(people);
    return people.length === 0 ? 0 : totalAge / people.length;
}