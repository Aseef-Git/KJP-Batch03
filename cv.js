var resume = {
    'firstname': 'Aseef',
    'lastname': 'Ahmed',
    'date of birth': '01/01/1999',
    'description': 'Hey there, my name is Aseef Ahmed and I am awesome developer',
    'current position': {
        'title': 'Back-end engineer',
        'company': 'My company is the best Inc',
        'City': 'Lahore',
        'description' : 'I am the best developer in our city.'
    }
}

console.log(resume.firstname);
console.log(resume.lastname);
console.log(resume["date of birth"]);
console.log(resume.description);
console.log(resume["current position"]);
console.log(resume["current position"].title);
console.log(resume["current position"].company);
console.log(resume["current position"].City);
console.log(resume["current position"].description);