//Using the provided peopleArray (bottom of this article), write a function that:
//Returns a list of everyone older than 18 -use filter-, which is
//sorted alphabetically by last name -use sort-, and where
//each name and age is embedded in a string that looks like an HTML <li> element -use map(tag).



var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function result(peopleArray) {
    const older = peopleArray.filter(person => person.age > 18).sort((a, b) => a.lastName[0] < b.lastName[0] ? -1 : 1).map((tag) => `<li> ${tag.lastName + " " + tag.firstName} is ${tag.age} years old </li>`)
    return older
}

console.log(result(peopleArray))
