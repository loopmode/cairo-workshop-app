import React from "react";

export default class SwapiPeopleResultPage extends React.Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <h3>Star Wars API: Result {id}</h3>
      </div>
    );
  }
}


