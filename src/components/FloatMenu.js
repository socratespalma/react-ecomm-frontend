import { Link, useHistory } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoPower } from "react-icons/io5";
import axios from "axios";
import Notiflix from "notiflix";

const FloatMenu = ({ active }) => {
  const history = useHistory();
  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        Notiflix.Notify.success(res.data.message);
        history.push("/");
      }
    });
  };

  return (
    <div className={`float-menu ${active ? "is-active" : null}`}>
      <h3 className="float-menu__title">User name</h3>
      <a className="float-menu__link">
        <BiUserCircle className="float-menu__icon" />
        My Profile
      </a>
      <a className="float-menu__link" onClick={logoutSubmit}>
        <IoPower className="float-menu__icon" />
        Logout
      </a>
    </div>
  );
};

export default FloatMenu;
