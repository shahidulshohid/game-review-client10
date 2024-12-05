import React from "react";
import { Link } from "react-router-dom";

const HeightRatedCame = ({ reviewData }) => {
  const {_id, title, rating, photo } = reviewData;
  return (
    <div>
      <div className="card bg-base-100 border-2">
        <figure className="px-5 pt-5">
          <img src={photo} alt="" className="rounded-xl h-[280px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between mb-2">
            <p className="text-xl font-semibold">Rating: {rating}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <button className="btn btn-secondary text-lg font-semibold"><Link to={`/review/${_id}`}>
          Explore Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeightRatedCame;
