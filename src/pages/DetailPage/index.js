import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";

const DetailPage = () => {
  //http://localhost:3000/1482 => useParams
  // http://localhost:3000/search?q=joker => useLocation

  //상세 영화에 대한 데이터 받아오기

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(
        `https://api.themoviedb.org/3/movie/${movieId}`
      );
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>loading...</div>;

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="detailed movie"
      />
    </section>
  );
};

export default DetailPage;
