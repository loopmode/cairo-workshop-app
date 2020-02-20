import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import SwapiPeopleSearchPage from "./SwapiPeopleSearchPage";
import SwapiPeopleResultPage from "./SwapiPeopleResultPage";
export default class SwapiPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Star Wars API pages</h2>
        <nav>
          <Link to="/swapi/planets">Planets</Link>
          <Link to="/swapi/spaceships">Spaceships</Link>
          <Link to="/swapi/vehicles">Vehicles</Link>
          <Link to="/swapi/people">People</Link>
          <Link to="/swapi/films">Films</Link>
          <Link to="/swapi/species">Species</Link>
        </nav>
        <Switch>
          <Route exact path="/swapi/people(/?)" component={SwapiPeopleSearchPage} />
          <Route exact path="/swapi/people/:id/" component={SwapiPeopleResultPage} />
        </Switch>
      </div>
    );
  }
}
