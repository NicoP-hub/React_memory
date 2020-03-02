const adults = []
const minors = []

people.forEach((person) => {
    if (person.age <= 18) {
        adults.push(person)
    } else {
        minors.push(person)
    }
})
people.map((person) => person.firstName)