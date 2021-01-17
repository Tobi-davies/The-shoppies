import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.css";
import { selectNomineesCount } from "../../redux/nominated/nominated.selctors";

const Header = ({ nomineeCount }) => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <h1>The Shoppies</h1>
        </Link>
        <div className="nomination">
          <Link to="/nominees">
            <p>
              View Nominees: <span>{nomineeCount}</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nomineeCount: selectNomineesCount(state),
});

export default connect(mapStateToProps)(Header);
