import axios from 'axios';

console.log('index in project1');
const url ='https://jsonplaceholder.typicode.com/todos';

axios.get(url)
  .then( (response) => {
    const todos = response.data;
    console.log(`todos.length : ${todos.length}`);
  })
  .catch( (err) => {
    console.error(err);
  })
