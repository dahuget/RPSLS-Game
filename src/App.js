import React, { Component } from 'react'
import Choices from './components/choices';
import Results from './components/results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [],
      results: [], //{results: "win", player: 2, computer: 1}
      playerScore: 0,
      computerScore: 0
    };
    this.updateResults = this.updateResults.bind(this)
    this.win = this.win.bind(this)
    this.lose = this.lose.bind(this)
  }

  updateResults(results) {
    this.setState({results});
    if (results === "win") this.win()
      else this.lose()
  }
  
  win() {
    this.setState({
      playerScore: this.state.playerScore + 1
    });
  }
  lose() {
    this.setState({
      computerScore: this.state.computerScore + 1
    });
  }

  componentDidMount() {
    fetch('https://codechallenge.boohma.com/choices')
    .then(res => res.json())
    .then((data) => {
      this.setState({ choices: data })
      var buttons = document.querySelectorAll( "button" );
      for ( var counter = 0; counter < buttons.length; counter++) {
        buttons[counter].addEventListener("click", function(){
          console.log(this.id)
          fetch('https://codechallenge.boohma.com/play', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              player: parseInt(this.id),
            }),
          })
          .then(res => res.json())
          .then((data) => {
            console.log(data)
            var resultsStr = "You " + data.results +"!"
            alert(resultsStr)
            // this.setState({ results: data })
          })
          .catch(console.log);
       });
      }
    })
    .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <Choices choices={this.state.choices} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
