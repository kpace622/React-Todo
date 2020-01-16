import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    handleChanges = e => {
        this.setState({ ...this.state, newTodo: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
        this.setState({...this.state, newTodo: ''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                required
                onChange={this.handleChanges}
                type='text'
                name='todo'
                value={this.state.newTodo}
                placeholder='Enter your todos'
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;