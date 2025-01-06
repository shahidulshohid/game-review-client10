import { useLoaderData } from "react-router-dom";
import ShowAllReviewsData from "../ShowAllReviewsData/ShowAllReviewsData";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const AllReviewsPage = () => {
  const allReviewsData = useLoaderData();

  const [allData, setAllData] = useState([...allReviewsData]);

  const sortedByRating = () => {
    const sortedData = [...allData].sort((a, b) => b.rating - a.rating);
    setAllData([...sortedData]);
  };

  const sortedYYear = () => {
    const sortedData = [...allData].sort((a, b) => a.sal - b.sal);
    setAllData([...sortedData]);
  };

  const handleAllData = () => {
    setAllData([...allReviewsData])
  }

  // created array for filter menu 
  const arrayForFilter = ["Action", "Adventure", "Shooter", "Sports", "Fighting", "Racing", "Puzzle", "RPG", "Simulation", "Survival"]

  const handleFilter = (gen) => {
    const filteredData = allReviewsData.filter((review) =>
      Array.isArray(review.genres)
        ? review.genres.includes(gen) 
        : review.genres === gen     
    );
    setAllData(filteredData);
  };

  return (
    <div className=" my-12">
      <div className="flex justify-center md:justify-center items-center mb-6 gap-2 md:gap-12">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-xl text-black border-2 border-green-500"
          >
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-purple-100 rounded-lg z-[1] left-0 w-52 fond-semibold text-lg p-2"
          >
            {arrayForFilter.map((gen, index) => (
              <li
                onClick={() => handleFilter(gen)}
                className="hover:bg-gray-600 px-2 rounded-lg text-green-600"
                key={index}
              >
                {gen}
              </li>
            ))}
          </ul>
        </div>
        <div>
        <button onClick={handleAllData} className="text-black bg-white btn text-xl font-semibold border-green-500 border-2">All Game </button>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-xl text-black border-2 border-green-500"
          >
            Sorted
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-lg z-[1] right-0 w-32 fond-semibold text-lg p-2 bg-purple-100"
          >
            <li>
              <button
                onClick={sortedByRating}
                className="text-lg text-semibold text-green-600 hover:bg-gray-600 px-2 rounded-lg"
              >
                By Rating
              </button>
            </li>
            <li>
              <button
                onClick={sortedYYear}
                className="text-lg text-semibold text-green-600 hover:bg-gray-600 px-2 rounded-lg"
              >
                By Year
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allData?.map((review) => (
          <ShowAllReviewsData
            key={review._id}
            review={review}
          ></ShowAllReviewsData>
        ))}
      </div>
    </div>
  );
};

export default AllReviewsPage;
