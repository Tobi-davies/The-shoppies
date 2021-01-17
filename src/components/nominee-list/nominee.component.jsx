import React from "react";
import { connect } from "react-redux";
import List from "../list/list.component";
import "./nominee.styles.css";

const NomineeList = ({ list }) => {
  console.log(list);

  return (
    <div className="nominees-list">
      {list.map((listItem, index) => (
        <List key={index} item={listItem} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.nominee.list,
});

export default connect(mapStateToProps)(NomineeList);
