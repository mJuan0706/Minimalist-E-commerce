import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("todo");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("Todo")}>
              <button>Todo</button>
            </Link>
            <Link to="furnitures">
              <button onClick={() => handleBtnName("muebles")}>
              Muebles
              </button>
            </Link>
            <Link to="electronics">
              <button onClick={() => handleBtnName("Tecnología")}>
              Tecnología
              </button>
            </Link>
            <Link to="lamps">
              <button onClick={() => handleBtnName("Lámparas")}>Lámparas</button>
            </Link>
            <Link to="kitchen">
              <button onClick={() => handleBtnName("Cocina")}>Cocina</button>
            </Link>
            <Link to="chairs">
              <button onClick={() => handleBtnName("Sillas")}>Sillas</button>
            </Link>
            <Link to="skin-care">
              <button onClick={() => handleBtnName("Protección de la piel")}>
              Protección de la piel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
