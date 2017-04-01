import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Players } from "./../imports/api/players";

const renderPlayers = function(playerList) {
  return playerList.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} points.</p>;
  });
};

const handleSubmit = function(event) {
  event.preventDefault();

  let playerName = event.target.playerName.value;

  if (playerName) {
    event.target.playerName.value = "";

    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let title = "Score Keep";
    let name = "Julian";

    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});
