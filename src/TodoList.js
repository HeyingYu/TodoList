import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
		};
		this.addTask = this.addTask.bind(this);
		this.handleDelte = this.handleDelte.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	addTask(task){
		this.setState({
			tasks: [...this.state.tasks, task],
		});
	}
	handleEdit(id, newText){
		this.setState({
			tasks: this.state.tasks.map((task) => {
				if(task.id == id){
					return{
						id: task.id,
						userInput: newText,
					} 
				}else{
					return task;
				}
			})
		});
	}
	handleDelte(id){
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== id)
		});
	}
	render(){
		return(
			<div>
			  <TodoForm onSubmit = {this.addTask}/>
			  {this.state.tasks.map(task => (
			  	<TodoItem 
			  	key = {task.id} 
			  	deleteTask = {()=>this.handleDelte(task.id)} 
			  	editTask = {()=> this.handleEdit(task.id, task.userInput)}
			  	task={task}  />
			  	))}
			</div>
		);
	}
}

export default TodoList;