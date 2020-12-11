import React from 'react';

class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.task.id,
			userInput: this.props.task.userInput,
			editting: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit(event){
		this.setState({
			id: parseInt(event.target.id),
			userInput: event.target.value,
			editting: true,
		});
		this.props.editTask(this.state.id, this.state.userInput);
	}

	handleChange(event){
		this.setState({
			userInput: event.target.value,
		});
	}


	render(){
		return (
		    <div style = {{display: "flex", justifyContent: 'center'}}>
			  {this.state.editting ? <input name = "text" value = {this.state.userInput} onChange = {this.handleChange}/>
			  : <div onChange = {this.handleChange}> {this.props.task.userInput}</div> }
			  <button onClick = {this.handleEdit}> edit</button>
			  <button onClick = {this.props.deleteTask}> delete </button>
			</div>
		);
	}
}

export default TodoItem;