import { Meteor } from "meteor/meteor";
import { Players } from "./../imports/api/players";

Meteor.startup(function() {
  Players.insert({
    name: "Julian",
    score: 100
  });

  console.log(Players.find().fetch());
});
