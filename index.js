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

// foreach
todos.forEach(function(todo) {
    console.log(todo.id);
});

// map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);