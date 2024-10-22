import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    async function fetchMoviesData() {
      const respose = await axiosInstance.get(fetchUrl);
      console.log(respose.data.results);
      setMovies(respose.data.results);
    }
    fetchMoviesData();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => {
            <img
              key={movies.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
            />;
          })}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Row;
