import React from 'react'

const Results = ({
    results
  }) => {

    function getChoice(id) {
      switch (id) {
        case 1:
          return "Rock";
        case 2:
          return "Paper";
        case 3:
          return "Scissors";
        case 4:
          return "Lizard";
        case 5:
          return "Spock";
        default:
          return ""
      }
    }
  // {results: "tie", player: 5, computer: 5}
  return (
    <div>
      {results.map((result) => (
        <div style={{ display: 'inline-block' }}>
            <h5>Player chose {getChoice(result.player)} </h5>
            <h6> vs </h6>
            <h5>Computer chose {getChoice(result.computer)} </h5>
        </div>
      ))}
    </div>
  )
};

export default Results