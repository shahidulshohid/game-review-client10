import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage"
import ALLReviewsPage from "../Pages/AllReviewsPage/AllReviewsPage"
import AddReviewsPage from "../Pages/AddReviewsPage/AddReviewsPage";
import MyReviewsPage from "../Pages/MyReviewsPage/MyReviewsPage";
import GameWatchListPage from "../Pages/GameWatchListPage/GameWatchListPage"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import ReviewDetailsPage from "../Pages/ReviewDetailsPage/ReviewDetailsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateMyReviews from "../Pages/UpdateMyReviews/UpdateMyReviews";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";
import AboutPage from "../Pages/AboutPage/AboutPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>,
                loader: ()=> fetch('https://game-review-server-umber.vercel.app/addReviews')
            },
            {
                path:'/review/:id',
                element:<ReviewDetailsPage></ReviewDetailsPage>,
                loader: ({params}) => fetch(`https://game-review-server-umber.vercel.app/addReviews/${params.id}`)
            },
            {
                path:'/allReviews',
                element:<ALLReviewsPage></ALLReviewsPage>,
                loader: ()=> fetch('https://game-review-server-umber.vercel.app/allReviews')
            },
            {
                path:'/addReviews',
                element:<PrivateRoute><AddReviewsPage></AddReviewsPage></PrivateRoute>
            },
            {
                path:'/myReviews',
                element:<PrivateRoute><MyReviewsPage></MyReviewsPage></PrivateRoute>,
                loader: ()=> fetch('https://game-review-server-umber.vercel.app/allReviews')
            },
            {
                path:'/updateMyReviews/:id',
                element:<UpdateMyReviews></UpdateMyReviews>,
                loader: ({params}) => fetch(`https://game-review-server-umber.vercel.app/allReviews/${params.id}`)

            },
            {
                path:'/gameWatchList',
                element:<PrivateRoute><GameWatchListPage></GameWatchListPage></PrivateRoute>,
                loader: () => fetch('https://game-review-server-umber.vercel.app/watchList')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/projects',
                element:<ProjectsPage></ProjectsPage>
            },
           {
            path:'/about',
            element:<AboutPage></AboutPage>
           }
        ]
    }
])

export default router