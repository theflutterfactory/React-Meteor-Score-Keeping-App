import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Players } from "./../imports/api/players";
import TitleBar from "./../imports/ui//TitleBar";
import AddPlayer from "./../imports/ui//AddPlayer";
import PlayerList from "./../imports/ui/PlayerList";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = "Score Keep";
    let subtitle = "The king of scorekeeping apps";
    let jsx = (
      <div>
        <TitleBar titleProp={title} subtitleProp={subtitle} />
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});
