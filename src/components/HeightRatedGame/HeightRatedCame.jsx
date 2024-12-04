import React from "react";

const HeightRatedCame = ({reviewData}) => {
  console.log(reviewData)
  return (
    <div>
      <div className="card bg-base-100 border-2">
        <figure className="px-5 pt-5">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <p className="card-title">Rating</p>
          <button className="btn btn-secondary text-lg font-semibold">Explore Details</button>
        </div>
      </div>
    </div>
  );
};

export default HeightRatedCame;
