import React from "react";
import "./list.styles.css";

const List = ({ item }) => {
  const { Title, Year, Poster } = item;
  return (
    <div className="list">
      <div className="list-img" style={{ backgroundImage: `url(${Poster})` }} />

      <div className="list-details">
        <p className="title">{Title}</p>
        <p className="year">
          <span>Year:</span> {Year}
        </p>
        {/* <p className="imdb">IMDB: {imdb}</p> */}
      </div>
      <button className="nominate">Remove Nominee</button>
    </div>
  );
};

export default List;
