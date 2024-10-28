import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";
const SearchPage = () => {
  /**
   * 1. spiderman
   *
   * useParam / useLocation
   * locallhost:3000/werw                     => useParam
   * locallhost:3000/search?q=spiderman       => useLocation
   *
   * 2. 요청 => 응답
   * 3. state
   * 4. 화면 순서로 됨
   *
   */
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axiosInstance.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  if (searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    <section className="no-results">
      <div className="no-result__text">
        <p>찾고자 하는 검색어 "{searchTerm}에 맞는 영화가 없습니다."</p>
      </div>
    </section>;
  }
};

export default SearchPage;
