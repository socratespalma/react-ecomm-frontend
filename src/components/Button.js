import PropTypes from "prop-types";

const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className && className}`}>
      {/* {Icon} */}
      <label htmlFor="btn" className="btn__label">
        {label}
      </label>
    </button>
  );
};

Button.defaultProps = {
  label: "Iniciar Sesión",
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
