import axios from'axios';
const TodoApi=axios.create({
    baseURL:'https://todoapp-b8c9f.firebaseio.com',
    timeout:5000
})
export default TodoApi;