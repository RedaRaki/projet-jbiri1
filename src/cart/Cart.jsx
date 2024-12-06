import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { compteurZero, suprimerProduit } from "../actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Cart() {
  const ids = useSelector((state) => state.IdsReducer.ids);
  const dispatch = useDispatch();
  let total = 0;
  if (ids.length > 0) {
    const arrPrix = ids.map((ele) => {
      return parseInt(ele.width + "0");
    });
    total = arrPrix.reduce((acc, ele) => {
      return acc + ele;
    });
  }
  return (
    <>
      <Container className="d-grid">
        <Row>
          {ids.map((produit, i) => (
            <Col sm={4} key={produit.id}>
              <Card className={`carta ${i > 2 ? "add-margin" : ""}`}>
                <Card.Img
                  className="img-carta"
                  variant="top"
                  src={produit.url}
                />
                <Card.Body className="carta-body">
                  <Card.Title>Cat Number {i + 1}</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates exercitationem id dolorum aliquam dicta
                    repudiandae. Prix: {produit.width + "0"}$
                  </Card.Text>
                  <Button
                    onClick={() => dispatch(suprimerProduit(produit))}
                    className="w-100 my-2 bg-danger"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="mx-1"
                      size="1x"
                      color="#f8f9fa"
                    />
                    Suprimer de la cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {ids.length > 0 ? (
            <>
              <h1>Total à Payer : {total}</h1>
              <Link className="link w-100" to="../">
                <Button
                  onClick={() => {
                    dispatch(compteurZero());
                  }}
                  className="w-100 my-2"
                >
                  Aller pour Payer
                </Button>
              </Link>
            </>
          ) : (
            <p>Aucun produit n'est acheté </p>
          )}
        </Row>
      </Container>
    </>
  );
}
