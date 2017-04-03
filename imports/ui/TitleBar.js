import React from "react";

export default class TitleBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.titleProp}</h1>
          <h3 className="title-bar__subtitle">{this.props.subtitleProp}</h3>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  titleProp: React.PropTypes.string.isRequired,
  subtitleProp: React.PropTypes.string.isRequired
};
