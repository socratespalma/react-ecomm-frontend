import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Iniciar Sesión",
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
