import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Details } from "../actions";
import { fetchData } from "./FetchProduits";
import { setFetchedData } from "../actions";
import "./produit.css";
import { Link } from "react-router-dom";

export default function Produit() {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchData();
        dispatch(setFetchedData(data));
      } catch {
        throw new Error("imposible de trouver les les données");
      } finally {
        setLoad(false);
      }
    }
    loadData();
  }, [dispatch]);
  const produits = useSelector((state) => state.AdingReducer.produits || []);

  if (load) return <div className="loader"></div>;
  else {
    return (
      <Container className="d-grid">
        <Row>
          {Array.isArray(produits) && produits.length > 0 ? (
            produits.map((produit, i) => (
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
                    <div className="d-flex justify-content-center">
                      <Button
                        className="w-50 mx-5 "
                        onClick={() => {
                          dispatch(Details(produit));
                        }}
                      >
                        <Link className="link" to="/produits/ProduitsDetails">
                          Details
                        </Link>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>Aucun produit disponible</p>
          )}
        </Row>
      </Container>
    );
  }
}
