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

let i = 0;
while(i < todos.length) {
    console.log(`while loop: ${todos[i].text}`);
    i++;
}