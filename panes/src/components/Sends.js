import React, { Component } from 'react';
import {useSample} from '../contexts/sample'

class Sends extends Component {
    state = {
        input: ''
    }

    componentDidMount() {
        this.setState({
            input: this.props.value,
        })
    }

    handleChange = e => {
        this.setState({
            input: e.target.value,
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input 
                value={this.state.input}
                onChange={this.handleChange}
                />
              <button
                type="submit">Confiure</button>
            </form>
        )
    }
}

export default useSample(Sends);
