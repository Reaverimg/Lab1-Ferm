import { redirect, useParams } from "react-router-dom";
import { Films } from "../shared/ListOfFilms";
import { useState } from "react";
import ModalCase from "./ModalCase";
import {
  Icon,
  CardTitle,
  Row,
  Col,
  Card,
  Container,
  Section,
  CardPanel,
} from "react-materialize";
// {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useParams();
  const film = Films.find((obj) => {
    return obj.id == userName.id;
  });
  let cost = film.cost.toLocaleString();
  return (
    <Container>
      <Row>
        <Col m={12} s={12}>
          <Card>
            <div className="card-image">
              <img src={`../${film.img}`} alt={film.img} />
              <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab">
                  <Icon class="large material-icons">ondemand_video</Icon>
              </a>
            </div>
            <CardPanel className="teal">
                <p className="card-title white-text">{film.name}</p>
                <p className="card-title white-text">{film.title}</p>
                <p className="card-title white-text">Ticket cost : $ {film.cost}</p>
                <p className="white-text card-action">{film.info}</p>
            </CardPanel>
          </Card>
        </Col>
      </Row>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film}/>}
    </Container>
  );
}
export default Detail;
