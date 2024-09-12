import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

export interface LoginFormData {
    email: string,
    password: string,
}

const Login: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const { signIn, loading, error } = useLogin();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        try {
            await signIn(data);
            navigate("/")
        } catch (error) {
            console.log("Login failed:", error)
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div className="w-full bg-zinc-800 rounded-lg shadow border border-zinc-600 md:mt-0  max-w-xs sm:max-w-sm md:max-w-md xl:p-0">
                <div className="flex items-center gap-3 justify-center">
                    <img className="w-12 h-12 mt-4" src="chat-icon.svg" alt="logo" />
                    <img className="w-224 h-12 mt-4" src="chit-chat.svg" alt="chit-chat" />

                </div>


                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                Your email
                            </label>
                            <input
                                type="email"
                                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                placeholder="name@company.com"
                                {...register("email")}
                                required
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                {...register("password")}
                                required
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm text-blue-500 font-medium text-primary-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-slate-950 text-md bg-primary-600 bg-cyan-200 hover:bg-primary-700 focus:ring-4 border border-zinc-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>

                        <p className="text-sm font-light text-gray-400">
                            Don’t have an account yet?{' '}
                            <button className="font-medium text-blue-500 text-primary-600 hover:underline"
                                onClick={() => navigate('/signup')}
                            >
                                Register
                            </button>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}
export default Login;

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(125, "Password must not exceed 125 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,125}$/,
            "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
        ),
})