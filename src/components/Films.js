import { Films } from "../shared/ListOfFilms";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import {
  Icon,
  CardTitle,
  Row,
  Col,
  Card,
  Container,
  Section,
} from "react-materialize";
export default function Film() {
  const [film, setFilm] = useState([]);
  return (
    <Section>
      <Container>
        {Films.map((film) => (
          <Row>
            <Col key={film.id} m={4} s={12}>
              <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={film.img} reveal waves="light" />}
                reveal={<p>{film.info}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={film.name}
              >
                <Link to={`detail/${film.id}`}>Detail</Link>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </Section>
  );
}
