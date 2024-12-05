import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const MyReviewTable = ({reviewData, myReviewsData, setMyReviewsData}) => {
    const {photo, title, rating, email} = reviewData
    return (
        <>
            <tr>
              <th>
                <img className="w-12 h-12 rounded-lg" src={photo} alt="" />
              </th>
              <th>{title}</th>
              <td className="hidden lg:flex">{email}</td>
              <td>{rating}</td>
              <td className="flex gap-2">
              <button className="bg-pink-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg">
              <FaRegEdit />
            </button>
              <button className="bg-pink-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg">
              <MdDeleteOutline />
            </button>
              </td>
            </tr> 
        </>
    );
};

export default MyReviewTable;