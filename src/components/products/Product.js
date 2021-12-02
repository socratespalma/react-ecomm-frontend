import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";

const Product = ({ product }) => {
  const onClick = (e) => {
    return;
  };

  return (
    <div className="product">
      <Link to="/product-detail">
        <img src="" alt={product.name} className="product__img" />
        <h4 className="product__name">{product.name}</h4>
      </Link>
      <p className="product__price">{product.price}</p>
      <button onClick={onClick} className="btn">
        <IoBagAddOutline id="btn" className="btn__icon" />
        <label htmlFor="btn" className="btn__label">
          Agregar
        </label>
      </button>
    </div>
  );
};

export default Product;
