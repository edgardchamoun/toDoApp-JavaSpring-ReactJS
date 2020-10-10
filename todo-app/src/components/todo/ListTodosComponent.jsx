import React, {Component} from 'react'
import ToDoDataService from '../../api/todo/ToDoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentDidMount() {
        this.refreshTodos();
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
                    </div>
                </div>
            </div>)
    }

    deleteTodo(id) {
        ToDoDataService.deleteTodo(AuthenticationService.getUserLoggedIn(), id)
        .then(response => {
            this.setState({message: `Delete of todo ${id} Successful`});
            this.refreshTodos();
        })
    }

    addTodo() {
        this.props.history.push(`/todos/-1`);
    }

    updateTodo(id) {
        this.props.history.push(`/todos/${id}`);
        //ToDoDataService.deleteTodo(AuthenticationService.getUserLoggedIn(), id)
        //.then(response => {
        //    this.setState({message: `Delete of todo ${id} Successful`});
        //    this.refreshTodos();
        //})
    }

    refreshTodos() {
        ToDoDataService.retrieveAllTodos(AuthenticationService.getUserLoggedIn())
        .then(
            //response => console.log(response)
            response => this.setState({
                todos: response.data
            })
        )
    }
}

export default ListTodosComponent