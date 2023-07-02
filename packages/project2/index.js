import axios from 'axios';

console.log('index in project2');
const url ='https://jsonplaceholder.typicode.com/posts';

axios.get(url)
  .then( (response) => {
    const posts = response.data;
    console.log(`posts.length : ${posts.length}`);
  })
  .catch( (err) => {
    console.error(err);
  })
