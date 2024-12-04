import React from "react";

const HeightRatedCame = () => {
  return (
    <div>
        <h2 className="text-center text-3xl font-bold mb-6">Highest Rated Game</h2>
      <div className="card bg-base-100 w-96 border-2">
        <figure className="px-5 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
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
