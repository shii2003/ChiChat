import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post("http://localhost:5000/api/auth/logout",
                {},
                {
                    withCredentials: true,
                }
            );

            localStorage.removeItem("chat-user");
            setAuthUser(null);

            toast.success(response.data.message || "Logged out successfully");
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.error);
                toast.error(error.response.data.error);
            } else {
                setError("Unknown error occured during logout")
                toast.error("Unknown error occured during logout");
            }
            console.log("Error during logout:", error)
        } finally {
            setLoading(false)
        }
    };
    return { logout, loading, error }
}
export default useLogout;