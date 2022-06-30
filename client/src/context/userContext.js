import { createContext, useContext, useEffect, useState } from "react";
import { updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../firebase";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    useEffect(() =>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (res) =>{
            res ? setUser(res) : setUser(null);
            setError("");
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signInUser = (email, password) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
            console.log(error)
    };

    const logoutUser = () =>{
        console.log(auth)
        signOut(auth);
    };

    const forgotPassword = (email) =>{
        return sendPasswordResetEmail(auth, email);
    };

    const contextValue = {
        user,
        loading,
        error,
        signInUser,
        logoutUser,
        forgotPassword
    };

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
}