import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyReviewTable from "../MyReviewTable/MyReviewTable";

const MyReviewsPage = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const [myReviewsData, setMyReviewsData] = useState(data);

  useEffect(() => {
    const matchEmailData = data.filter((fil) => fil.email === user?.email);
    setMyReviewsData(matchEmailData);
  }, [data]);

  return (
    <div className="my-12">
      <h3 className="text-4xl text-center text-white font-bold mb-6">
        My Reviews
      </h3>
      <div className="bg-[#F4F3F0] rounded-xl py-6 lg:w-10/12 mx-auto">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-black text-lg">Photo</th>
                <th className="text-black text-lg hidden lg:flex">Title</th>
                <th className="text-black text-lg">genres</th>
                <th className="text-black text-lg hidden lg:flex">Email</th>
                <th className="text-black text-lg">Rating</th>
                <th className="text-black text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {myReviewsData?.map((reviewData) => (
                <MyReviewTable
                  key={reviewData._id}
                  reviewData={reviewData}
                  myReviewsData={myReviewsData}
                  setMyReviewsData={setMyReviewsData}
                ></MyReviewTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsPage;
