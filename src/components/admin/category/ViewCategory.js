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
    viewcategory_HTMLTABLE = categoryList.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.slug}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>
            <div className="buttons">
              <div className="control">
                <Link to={`edit-category/${item.id}`} className="btn-link">
                  Editar
                </Link>
              </div>
              <div className="control">
                <button className="btn-link--danger">Eliminar</button>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <div className="header-bar">
        <h3 className="header-bar__title">Lista de Categorías</h3>
        {/* <button className="header-bar__button">Agregar</button> */}
        <Link to="/admin/add-category">Crear</Link>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Slug</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{viewcategory_HTMLTABLE}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCategory;
