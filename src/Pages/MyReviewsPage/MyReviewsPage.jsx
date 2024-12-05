import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyReviewsPage = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData()

    const [myReviewsData, setMyReviewsData] = useState(null)

    console.log(data)
    // console.log(user.email)

    // useEffect(()=> {
    //     const matchEmailData = myReviewsData.filter(fil => fil.email === user?.email)
    //     console.log(matchEmailData)
    // }, [])
    return (
        <div>
            my reviews page
        </div>
    );
};

export default MyReviewsPage;