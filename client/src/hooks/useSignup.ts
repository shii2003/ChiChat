import { useState } from 'react';
import { RegisterFormData } from '../utils/types/types';
import axios from 'axios';



const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


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

            if (response.status === 201) {
                return;
            } else {
                setError("Registration failed.");
                throw new Error("Registraion failed");
            }
        } catch (err) {
            setError("An error occurred during registration.");
            console.error("Error during registration:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading, error };
};

export default useSignup;