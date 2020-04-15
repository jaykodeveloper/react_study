import React from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

class App extends React.Component{
  id = 2
  state = {
    information : [
      {
        id: 0,
        name: 'Jay',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'sarah',
        phone: '010-1111-1111'
      }
    ],
    keyword: ''
  }

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(info => id === info.id ? { ...info, ...data} : data)
    })
  }

  handleChange = e => {
    this.setState({
      keyword: e.target.value,
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(info => info.name.indexOf(keyword) !== -1)

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate} 
          />
        <p>
          <input
            placeholder='Search'
            onChange={this.handleChange}
            value={keyword}
          />
        </p>

        <hr />
        <PhoneInfoList
          data={filteredList} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          />
      </div>
    )
  }
}

export default App;
