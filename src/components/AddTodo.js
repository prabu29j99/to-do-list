import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {   
        title: '',
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title!=="")
            this.props.addTodo(this.state.title);
        this.setState({title:""});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group mb-3 mt-2">
                    <input className="form-control"
                        type="text" 
                        name="title" 
                        placeholder="Add Todo..."
                        value = {this.state.title}
                        onChange = {this.onChange} />
                    <div className="input-group-append">
                    <input type="submit" value="Submit" className="btn btn-outline-secondary" />
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo
