import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginFormData } from "../pages/Login";
import { toast } from 'react-toastify';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const signIn = async (data: LoginFormData) => {

        const { email, password } = data;
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                { email, password },
                { withCredentials: true }
            );

            const userData = response.data;
            localStorage.setItem("chat-user", JSON.stringify(userData));
            setAuthUser(userData);

            //redirect to home
            navigate("/");
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.error) {
                const backendError = error.response.data.error;
                setError(backendError);
            } else {
                setError("An unknown error occurred during login.");

            }
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
    }

    return { signIn, loading, error }
}

export default useLogin;