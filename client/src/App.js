import React from 'react';
import axios from 'axios'
import './App.css';
import PlayerCard from './components/PlayerCard';
import Nav from './components/Nav';

class App extends React.Component {
  state = {
    players: [],
    
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log('res', res)
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err.message));
  }



  render() {
    return (
      <div className="App">
        <Nav/>
       
        <div className="players">
           <PlayerCard players={this.state.players}/>
        </div>
      </div>
    );
  }
}

export default App;
