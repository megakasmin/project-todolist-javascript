// const todolist = ["Write the letter", "Eat some lunch", "Run around the city"];

// const showTodos = data => {
//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];

//     console.log(`[${index + 1}] ${item}`);
//   }
// };

// showTodos(todolist);

// const textInput = prompt("What todo do you want to search ?");
// const foundTodos = searchTodos(todolist, textInput);

// showTodos(foundTodos);

// const todolist = ["Write the letter", "Eat some lunch", "Run around the city"];

// const searchTodos = (data, textToSearch) => {
//   let newTodos = [];

//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];

//     const lowerCasedItem = item.toLowerCase();
//     const lowerCasedText = textToSearch.toLowerCase();

//     if (lowerCasedItem.includes(lowerCasedText)) {
//       newTodos.push(item);
//     }
//   }
//   return newTodos;
// };
// const foundTodos = searchTodos(todolist, "THE");

// showTodos(foundTodos);

// const myTodos = [
//     {
//         id: 1,
//         text: 'Write the letter',
//         tags: ['important', 'writing'],
//         favorite: true,
//         completed:true
//     },
//     {
//         id: 2,
//         text: 'Eat some lunch',
//         tags: ['food'],
//         favorite: false,
//         completed:true,
//     },
//     {
//         id: 3,
//         text: 'Run around the city',
//         favorite: false,
//         completed: true
//     }
// ]

// const showTodos = data => {
//     for (let index = 0; index < data.length; index++){
//         const item = data[index]

//         let itemString = ``

//         itemString += item.completed ?
//         itemString += ` ${item.text}`
//         itemString += item.favorite ?

//         console.log(itemString)
//     }
// }

// showTodos(myTodos)
