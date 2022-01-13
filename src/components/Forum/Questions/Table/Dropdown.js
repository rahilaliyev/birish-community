import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Table.scss";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div
        className={isActive ? "active dropdown-button" : "dropdown-button"}
        onClick={() => setIsActive(!isActive)}
      >
        Filtrlə
        <ExpandMoreIcon />
      </div>
      {isActive && (
        <ul className="dropdown-content">
          <li className="dropdown-item">Ən son </li>
          <li className="dropdown-item">Ən son cavab verilən</li>
          <li className="dropdown-item">Ən çox baxılan</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
