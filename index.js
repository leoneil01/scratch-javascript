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

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);