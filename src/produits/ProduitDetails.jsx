import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ajouterProduit } from "../actions";
import { Button } from "react-bootstrap";
export default function ProduitDetails() {
  const [counter, setCounter] = useState(0);
  const produit = useSelector((state) => state.DetailsReducer.produit);
  const [prixTotal, setPrixTotal] = useState(parseInt(produit.width + "0"));
  const dispatch = useDispatch();
  function handelclick() {
    setCounter(counter + 1);
    dispatch(ajouterProduit(produit));
  }
  return (
    <div className=" my-5 d-flex align-items-start">
      <div className="mx-5">
        <img
          className="img-fluid img-thumbnail"
          src={produit.url}
          alt="cat image"
        />
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          corrupti reprehenderit laudantium eos aperiam suscipit optio,
          voluptatibus tempora animi non vitae inventore nostrum doloribus
          natus. Voluptas atque eligendi facere ipsam.
        </p>
        <p>prix : {produit.width + "0"}</p>
        <p>Quntité</p>
        <input
          placeholder="1"
          onChange={(e) => {
            setPrixTotal(parseInt(produit.width + "0") * e.target.value);
          }}
          type="number"
          className=" w-50 form-control"
        />
        <p>prix Totale : {prixTotal}</p>
        <Button
          disabled={counter > 0}
          className="w-100"
          onClick={() => handelclick()}
        >
          {counter > 0 ? "aller aux cart pour payer" : "Ajouter aux panier"}
        </Button>
      </div>
    </div>
  );
}
