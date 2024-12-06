import "bootstrap/dist/css/bootstrap.min.css";
import Homme from "./homme/Homme";
import MyNav from "./nav/Nav";
import Cart from "./cart/Cart";
import ProduitDetails from "./produits/ProduitDetails";
import { Container } from "react-bootstrap";
import Produit from "./produits/Produit";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Container>
      <MyNav />
      <Routes>
        <Route path="/" element={<Homme></Homme>} />
        <Route path="produits/Produit" element={<Produit></Produit>} />
        <Route
          path="produits/ProduitsDetails"
          element={<ProduitDetails></ProduitDetails>}
        />
        <Route path="cart/Cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}

export default App;
