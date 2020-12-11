import React from 'react';
import shortid from 'shortid';

class TodoForm extends React.Component{
	constructor(props){
	  super(props);
      this.state = {
      	userInput: '',
	  };
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			userInput: event.target.value,
		});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onSubmit({
			userInput: this.state.userInput,
			id: shortid.generate(),
		});
		this.setState({
			userInput: ''
		});
	}
	render(){
		return(
			<div>
			  <form onSubmit = {this.handleSubmit}>
			  <input name = "text" value = {this.state.userInput} onChange = {this.handleChange}/>
			  <button onClick = {this.handleSubmit}> Add</button>
			  </form>
			</div>
		);
	}
	
}
export default TodoForm;