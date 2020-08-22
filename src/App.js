import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

      monsters: [],

      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    console.log(e.target.value                  )
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => { console.log(monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()),searchField);return monster.name.toLowerCase().includes(searchField.toLowerCase()) }
    );
    console.log("render", filteredMonsters)
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />


      </div>
    );
  }
}
export default App;
