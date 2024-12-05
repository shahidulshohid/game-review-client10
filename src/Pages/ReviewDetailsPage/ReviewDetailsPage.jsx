import { useLoaderData } from "react-router-dom";

const ReviewDetailsPage = () => {
  const detailsData = useLoaderData();
  const { photo, title, description, rating, genres, userName, email } =
    detailsData;
  return (
    <div className="my-12">
      <div className="lg:w-1/2 mx-auto rounded-xl border-2 p-4">
        <div>
          <img className="rounded-xl" src={photo} alt="" />
        </div>
        <div>
          <h2 className="card-title my-3">{title}</h2>
          <p className="text-gray-600 mb-1">{description}</p>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Ratting: {rating}</p>
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
          <h4 className="text-lg font-semibold">Genres: {genres}</h4>
          <div>
            {
                userName && <h4 className="text-xl my-1 font-semibold">UserName: {userName}</h4> 
            }
            {
                email && <p className="text-sm mb-2">Email: {email}</p>
            }
          </div>
        </div>
        <div>
        <button className="btn btn-secondary text-lg font-semibold w-full">
          Add to WatchList
        </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsPage;
