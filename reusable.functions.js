// REUSABLE FUNTIONS

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function averageArray(numbers) {
    return numbers.length === 0 ? 0 : sumArray(numbers) / numbers.length;
}

function longestString(strings) {
    return strings.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}

function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}


// part 2 


function sortByAge(people) {
    return people.sort((a, b) => a.age - b.age);
}

function filterByAge(people) {
    return people.filter(person => person.age <= 50);
}

function transformPeople(people) {
    return people.map(person => ({
        ...person,
        age: person.age + 1,
        job: person.occupation,
    }));
}
function sumAges(people) {
    return people.reduce((sum, person) => sum + person.age, 0);
}

function averageAge(people) {
    const totalAge = sumAges(people);
    return people.length === 0 ? 0 : totalAge / people.length;
}