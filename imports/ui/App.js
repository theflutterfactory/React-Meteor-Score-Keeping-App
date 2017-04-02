import React from "react";
import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar
          titleProp={this.props.title}
          subtitleProp={this.props.subtitle}
        />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  players: React.PropTypes.array.isRequired
};
