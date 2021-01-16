import React from "react";
import Poster from "../poster/poster.component";
import "./display.styles.css";

const DisplayResult = ({ results }) => {
  // const myAns = results.map((res) => res);

  console.log(results);

  return (
    <div className="display-result">
      {results.map((res, index) => (
        <Poster
          title={res.Title}
          year={res.Year}
          poster={res.Poster}
          imdb={res.imdbID}
          res={res}
          key={index}
        />
        // <div>{res.Title}</div>
      ))}
    </div>
  );
};

export default DisplayResult;
