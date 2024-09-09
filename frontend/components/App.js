import React from 'react'
import Form from './Form'
import TodoList from './TodoList'



let id = 0
let getId = () => ++id

const initialTodos = [
  {
    name: 'Organize Garage',
    id: getId(), 
    completed: false
  },
  {
    name: 'Walk Dog',
    id: getId(), 
    completed: false
  },
  {
    name: 'Do Laundry',
    id: getId(), 
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: getId(),
    completed: false
  }
];

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: initialTodos
    }
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if(id == td.id) return {...td, completed: !td.completed}
        return td
      })
    })
  }
 
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        
        <Form addTodo={this.addTodo}/>
        
      </div>
    )
  }
}
