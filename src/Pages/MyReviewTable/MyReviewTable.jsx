
const MyReviewTable = ({reviewData, myReviewsData, setMyReviewsData}) => {
    const {photo, title, genres, rating, email} = reviewData
    return (
        <>
            <tr>
              <th>
                <img className="w-10 h-10 rounded-full" src={photo} alt="" />
              </th>
              <th>{title}</th>
              <td>{genres}</td>
              <td>{rating}</td>
              <td>{email}</td>
            </tr> 
        </>
    );
};

export default MyReviewTable;