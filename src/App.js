import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import Nav from './components/Nav.jsx'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>

      <Nav>
          
      </Nav>
      <hr />

      <div>
        <Card
          onClose={() => window.alert('Emulamos que se cierra la card')}
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
        />
      </div>
      <hr />

      <div>        
        <Cards
          characters={characters}
        />
      </div>
      <hr />

      <div>        
        <SearchBar
          onSearch={(characterID) => window.alert('characterID')}
        />
      </div>
    </div>
  )
}

export default App
