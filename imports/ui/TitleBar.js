import React from "react";

export default class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titleProp}</h1>
        <h3>{this.props.subtitleProp}</h3>
      </div>
    );
  }
}

TitleBar.propTypes = {
  titleProp: React.PropTypes.string.isRequired,
  subtitleProp: React.PropTypes.string.isRequired
};
