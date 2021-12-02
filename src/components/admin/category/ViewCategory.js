import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewCategory = () => {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get(`/api/view-category`).then((res) => {
      if (res.status === 200) {
        setCategoryList(res.data.category);
      }
      setLoading(false);
    });
  }, []);

  var viewcategory_HTMLTABLE = "";
  if (loading) {
    return <h3>Loading Category...</h3>;
  } else {
    let catStatus = "";
    viewcategory_HTMLTABLE = categoryList.map((item) => {
      if (item.status === 0) {
        catStatus = "Visible";
      } else if (item.status === 1) {
        catStatus = "Oculto";
      }
      return (
        <tr key={item.id}>
          <td>{item.slug}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>
            <div className="control">
              <Link to={`edit-category/${item.id}`} className="btn-link">
                Editar
              </Link>
            </div>
          </td>
          <td>{catStatus}</td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <div className="header-bar">
        <h3 className="header-bar__title">Lista de Categorías</h3>
        <Link to="/admin/add-category" className="header-bar__button">
          Crear
        </Link>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Slug</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{viewcategory_HTMLTABLE}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCategory;
