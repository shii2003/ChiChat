import { useState } from 'react';
import { RegisterFormData } from '../utils/types/types';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';



const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { authUser, setAuthUser } = useAuthContext()

    const signup = async (data: RegisterFormData) => {
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("confirmPassword", data.confirmPassword);
            if (data.bio) formData.append("bio", data.bio);


            const response = await axios.post("http://localhost:5000/api/auth/signup", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            const userData = response.data;
            console.log("localStorageDAta:", userData)
            localStorage.setItem("chat-user", JSON.stringify(userData))
            setAuthUser(userData);
        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An unknown error during registration");
            }
            console.error("Error during registration:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading, error };
};

export default useSignup;