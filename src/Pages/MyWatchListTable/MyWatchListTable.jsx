import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyWatchListTable = ({ listData, watchListData, setWatchListData }) => {
  const { _id, photo, title, genres, newEmail, rating } = listData;

  const handleWatchList = (id) => {
    fetch(`http://localhost:8000/watchList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Deleted from your watchList.",
            icon: "success",
          });
          const remainingWatchList = watchListData.filter(fil => fil._id !== id)
          setWatchListData(remainingWatchList)
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
        <td className="hidden lg:flex">{newEmail}</td>
        <td>{rating}</td>
        <td>
          <Link>
            <button
              onClick={() => handleWatchList(_id)}
              className="bg-pink-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg"
            >
              <MdDeleteOutline />
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MyWatchListTable;
