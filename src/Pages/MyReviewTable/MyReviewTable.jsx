import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyReviewTable = ({ reviewData, myReviewsData, setMyReviewsData }) => {
  const { _id, photo, title, rating, email, genres } = reviewData;

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-server-umber.vercel.app/allReviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });

              const remaining = myReviewsData.filter((fil) => fil._id !== id);
              setMyReviewsData(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <th>
          <img className="w-12 h-12 rounded-lg" src={photo} alt="" />
        </th>
        <th className="hidden lg:flex">{title}</th>
        <th>{genres}</th>
        <td className="hidden lg:flex">{email}</td>
        <td>{rating}</td>
        <td className="flex gap-2">
          <Link to={`/updateMyReviews/${_id}`}>
            <button className="bg-pink-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg">
              <FaRegEdit />
            </button>
          </Link>
          <button
            onClick={() => {
              handleDeleteBtn(_id);
            }}
            className="bg-pink-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg"
          >
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyReviewTable;
