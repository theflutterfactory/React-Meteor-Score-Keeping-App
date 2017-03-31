import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

const players = [
  {
    _id: "1",
    name: "John",
    score: 99
  },
  {
    _id: "2",
    name: "Jacob",
    score: -1
  },
  {
    _id: "3",
    name: "Joe",
    score: -12
  }
];

const renderPlayers = function(playerList) {
  return playerList.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} points.</p>;
  });
};

Meteor.startup(() => {
  let title = "Score Keep";
  let name = "Julian";
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
});
