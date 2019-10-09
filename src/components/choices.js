import React from 'react'
import rock from '../img/rock.png'
import paper from '../img/paper.png'
import scissors from '../img/scissors.png'
import lizard from '../img/lizard.png'
import spock from '../img/spock.png'

const Choices = ({ choices }) => {
  
  function getImage(name) {
    switch(name) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissors":
        return scissors;
      case "lizard":
        return lizard;
      case "spock":
        return spock;  
      default:
        return ""
    }
  }
  
  return (
    <div>
      <center><h1>Click a below choice to play against the computer:</h1></center>
      {choices.map((choice) => (
        <div style={{ display: 'inline-block' }}>
            <h5 style={{textTransform: 'capitalize'}}>{choice.name}</h5>
            <button id={choice.id}><img src={getImage(choice.name)} alt="" /></button>
        </div>
      ))}
    </div>
  )
};

export default Choices