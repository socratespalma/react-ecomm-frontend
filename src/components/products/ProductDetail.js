import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const ProductDetail = () => {
  return (
    <div className="trick">
      <Header />
      <main className="main">
        <SidePanel />
        <section className="product-section">
          <h1>Detalle del producto</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
