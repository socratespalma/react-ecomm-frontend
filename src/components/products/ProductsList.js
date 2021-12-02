import Product from "./Product";
const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
