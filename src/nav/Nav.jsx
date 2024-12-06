import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./nav.css";
export default function MyNav() {
  const compteur = useSelector((state) => state.IdsReducer.compteur);
  return (
    <div className="d-flex justify-content-around  align-items-center bg-light fixed-top text-dark">
      <Navbar.Brand className="  fs-5">Cat Store</Navbar.Brand>
      <Nav className="h-100 d-flex align-items-center ">
        <Link className="text-muted mx-2 router-link" to="/">
          Homme
        </Link>

        <Link className="text-muted mx-2 router-link" to="../produits/Produit">
          Produits
        </Link>

        <Link className="text-muted mx-2 router-link" to="../cart/Cart">
          Cart
        </Link>
        <button type="button">
          <Link className="text-muted mx-4 router-link" to="../cart/Cart">
            <FontAwesomeIcon icon={faShoppingCart} size="1x" color="black" />
          </Link>
          <span className="compteur">{compteur}</span>
        </button>
      </Nav>
    </div>
  );
}
