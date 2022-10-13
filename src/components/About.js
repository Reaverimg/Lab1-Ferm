import React from "react";
import { Collapsible, Container } from "react-materialize";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <Container>
      <Collapsible>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">movie_filter</i>The film is playing
          </div>
          <div class="collapsible-body">
            <span>
              Better call Saul
              <br />
              Breaking Bad
              <br />
              Bates Motel
              <br />
              Don't Breathe 2
              <br />
              Game of Throne
              <br />
              House of Dragon
              <br />
              Stranger Things
              <br />
              The Boys
              <br />
              The Walking Dead
              <br />
            </span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">place</i>Nations
          </div>
          <div class="collapsible-body">
            <span>
              Vietnam
              <br />
              Thailand
              <br />
              China
            </span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">whatshot</i>Daily news
          </div>
          <div class="collapsible-body">
            <span>
              <Link to="/news">News</Link>{" "}
            </span>
          </div>
        </li>
      </Collapsible>
    </Container>
  );
}
