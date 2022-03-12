import React, { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users)
      })
      .catch();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().indexOf(searchField) > -1;
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder={'Search a monster'}
        className='monsters-search-box'
        value={searchField}
        id='search'
        name='search'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
