// console.log('hello, world') //first javascript program yeheeeyy :)

const todos = [
    {
        id: 1,
        text: 'Drink water',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Water the plant',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Check emails',
        isCompleted: false
    }
];

// traditional way
for(let i = 0; i < todos.length; i++) {
    console.log(`for loop: ${todos[i].text}`);
}

// new way (cleaner, readable)
for(let todo of todos) {
    console.log(`for loop: ${todo.isCompleted}`);
}