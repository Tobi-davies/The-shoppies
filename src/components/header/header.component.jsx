import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <h1>The Shoppies</h1>
        </Link>
        <div className="nomination">
          <Link to="/nominees">
            <p>
              View Nominees: <span>0</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
