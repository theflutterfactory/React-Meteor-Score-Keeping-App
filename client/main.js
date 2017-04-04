import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Players, calculatePlayerPosition } from "./../imports/api/players";
import App from "./../imports/ui/App";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, { sort: { score: -1 } }).fetch();
    let positionedPlayers = calculatePlayerPosition(players);
    let title = "Score Keep";
    let subtitle = "The king of scorekeeping apps";
    ReactDOM.render(
      <App title={title} players={positionedPlayers} subtitle={subtitle} />,
      document.getElementById("app")
    );
  });
});
