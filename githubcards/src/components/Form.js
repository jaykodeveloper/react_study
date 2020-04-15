import React from 'react';
import '../App.scss';
import axios from 'axios';

class Form extends React.Component {
    state = {
        username: ''
    }
    handleChange = e => {
        this.setState({
            username: e.target.value,
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://api.github.com/users/${this.state.username}`)
        // console.log(res.data);
        this.props.onSubmit(res.data);
        this.setState({ username: ''})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                  type='text'
                  placeholder="Github Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  />
                  <button>
                      Add card
                  </button>
            </form>
        )
    }
}

export default Form;