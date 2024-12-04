import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext} from "react";
import { auth } from "../firebase/firebase.confige"

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    // loginWithGoogle 
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        handleGoogleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;