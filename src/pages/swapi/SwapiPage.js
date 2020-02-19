import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import PeopleListPage from "./SwapiPeoplePage";
export default function SwapiPage() {
  return (
    <div>
      <h2>Star Wars API</h2>

      <nav>
        <Link to="/swapi/planets">Planets</Link>
        <Link to="/swapi/spaceships">Spaceships</Link>
        <Link to="/swapi/vehicles">Vehicles</Link>
        <Link to="/swapi/people">People</Link>
        <Link to="/swapi/films">Films</Link>
        <Link to="/swapi/species">Species</Link>
      </nav>
      <Switch>
        <Route path="/swapi/people/:id?" component={PeopleListPage} />
      </Switch>
    </div>
  );
}
