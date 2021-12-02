import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import ProductsList from "../../components/products/ProductsList";

const Products = () => {
  const products = [
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
    {
      img: "../../assets/images/Calcetas.jpg",
      name: "Calcetas Arcoiris",
      price: "$12.00",
    },
  ];
  return (
    <div className="trick">
      <Header />
      <main className="main">
        <SidePanel />
        <section className="product-section">
          <ProductsList products={products} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
