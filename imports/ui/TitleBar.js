import React from "react";

export default class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titleProp}</h1>
      </div>
    );
  }
}
