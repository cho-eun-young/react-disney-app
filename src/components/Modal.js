import React from "react";
import "./Modal.css";

const Modal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setIsModalOpen,
}) => {
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span
            className="modal-close"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            X
          </span>
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original${backdrop_path} `}
            alt="modal-poster-img"
          />
          <div className="modal__contents">
            <p className="modal__details">
              <span>100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal_title">{title ? title : name}</h2>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
