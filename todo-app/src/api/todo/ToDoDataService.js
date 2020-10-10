import Axios from "axios";
import {API_URL, JPA_API_URL} from "../../Constants";

class ToDoDataService {
    retrieveAllTodos(name) {
        console.log("executed service");
        return Axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        console.log("executed service");
        return Axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        console.log("executed service");
        return Axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        console.log("executed service");
        return Axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        console.log("executed service");
        return Axios.post(`${JPA_API_URL}/users/${name}/todos`, todo);
    }
}

export default new ToDoDataService()