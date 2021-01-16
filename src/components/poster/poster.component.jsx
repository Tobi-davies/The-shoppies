import React from "react";
import "./poster.styles.css";

const Poster = ({ title, year, poster, imdb }) => {
  // const { Title, Year, Poster, imdbID } = result;
  // console.log(result);

  return (
    <div className="poster">
      {/* <div className="poster-img">
        <img src={poster} alt="poster" />
      </div> */}
      <div
        className="poster-img"
        style={{ backgroundImage: `url(${poster})` }}
      />

      <div className="poster-details">
        <p className="title">{title}</p>
        <p className="year">
          <span>Year:</span> {year}
        </p>
        {/* <p className="imdb">IMDB: {imdb}</p> */}
      </div>
      <button className="nominate">Nominate</button>
    </div>
  );
};

export default Poster;
