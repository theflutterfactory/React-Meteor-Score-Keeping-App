import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Players } from "./../imports/api/players";
import App from "./../imports/ui/App";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = "Score Keep";
    let subtitle = "The king of scorekeeping apps";
    ReactDOM.render(
      <App title={title} players={players} subtitle={subtitle} />,
      document.getElementById("app")
    );
  });
});
