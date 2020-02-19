import React from "react";
import { useParams } from "react-router-dom";
export default function SwapiPeoplePage() {
  const { id } = useParams();
  return (
    <div>
      <h3>Star Wars API: People</h3>
      <i>Add a slash and a number to the URL</i>
      <p>{id ? `show details page for ${id}` : "show list page"}</p>
    </div>
  );
}
