import { useForm } from "react-hook-form"
import { RxAvatar } from 'react-icons/rx';
import { TbCameraPlus } from 'react-icons/tb';
import { RegisterFormData } from '../utils/types/types';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Register: React.FC = () => {

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET_NAME;

    const { register, formState: { errors, isSubmitting }, watch, handleSubmit } = useForm<RegisterFormData>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            bio: "",
            profilePicture: "",
        }
    });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageBase64, setImageBase64] = useState<string>("");
    const navigate = useNavigate();

    const { signup, loading, error } = useSignup();

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

    const setFileToBase64 = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageBase64(reader.result as string);
        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size exceeds 10MB. Select a smaller image", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                return;
            }
            const imageUrl = URL.createObjectURL(file);//Create a URL for selected image
            setSelectedImage(imageUrl);//set image preview
            setFileToBase64(file);
        }
    }

    const handleFormSubmit = async (data: RegisterFormData) => {
        try {
            let profilePictureUrl: string | undefined = undefined;

            if (imageBase64) {
                const formData = new FormData();
                formData.append("file", imageBase64);
                formData.append("upload_preset", uploadPreset)

                const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
                profilePictureUrl = cloudinaryResponse.data.secure_url;
            }
            const formDataToSend = { ...data, profilePicture: profilePictureUrl };

            console.log("Form Data:", formDataToSend);

            await signup(formDataToSend);
            navigate("/");
        } catch (error) {
            console.log("error during signup: ", error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-2 ">
            <div className="w-full bg-zinc-800 rounded-lg shadow border border-zinc-600 md:mt-0  max-w-xs sm:max-w-sm md:max-w-md xl:p-0">
                <div className="flex items-center gap-3 justify-center">
                    <img className="w-12 h-12 mt-4" src="chat-icon.svg" alt="logo" />
                    <img className="w-224 h-12 mt-4" src="chit-chat.svg" alt="chit-chat" />

                </div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                        Register
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit(handleFormSubmit)} >
                        {/* Profile Picture */}
                        <div className="flex justify-center ">
                            <div className="relative w-16 h-16 flex justify-center items-center bg-gray-100 rounded-full dark:bg-gray-600">
                                <div className="w-full h-full flex justify-center items-center rounded-full overflow-hidden">
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Selected" className="h-full w-full object-cover" />
                                    ) : (
                                        <RxAvatar className="h-full w-full text-slate-300" />

                                    )}
                                </div>
                                <label
                                    htmlFor="file-input"
                                    className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-zinc-800  rounded-full p-1 cursor-pointer">
                                    <TbCameraPlus className="text-white w-6 h-6 " />
                                    <input
                                        id="file-input"
                                        type="file"
                                        accept="image/*" //allow only images
                                        onChange={(event) => {
                                            handleImageChange(event);
                                        }}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                                Enter Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                {...register("name", {
                                    required: "name is required",
                                    minLength: {
                                        value: 3,
                                        message: "name must be at least 3 characters"
                                    }
                                })}
                                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                placeholder="jhon doe"

                            />
                            {errors.name && (
                                <p className="text-sm text-red-500">{errors.name.message}</p>
                            )
                            }
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                Enter Your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email", {
                                    required: "Email is requird",
                                    pattern: {
                                        value: /^\S+@\S+$/i, message: "Invalid email address"
                                    },

                                })}

                                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                placeholder="name@company.com"

                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">{errors.email.message}</p>
                            )}

                        </div>
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                Enter Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long",
                                    },
                                    maxLength: {
                                        value: 125,
                                        message: "Password must not exceed 125 characters",
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,125}$/,
                                        message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
                                    },

                                })}

                                placeholder="••••••••"
                                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500">{errors.password.message}</p>
                            )}
                        </div>
                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">
                                Confirm Your Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) => value === watch('password') || "Passwords do not match"
                                })}
                                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                placeholder="••••••••"
                            />
                            {errors.confirmPassword && (
                                <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        {/* Bio */}
                        <div>
                            <label htmlFor="bio" className="block mb-2 text-sm font-medium text-white">
                                Enter Bio
                            </label>
                            <textarea
                                id="bio"
                                {...register("bio")}
                                placeholder="about.. "
                                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                rows={2}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm text-blue-500 font-medium text-primary-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting || loading}
                            className="w-full text-slate-950 text-md bg-primary-600 bg-cyan-200 hover:bg-primary-700 focus:ring-4 border border-zinc-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center"
                        >
                            {isSubmitting || loading ? 'Submitting...' : 'Register'}
                        </button>
                        <p className="text-sm font-light text-gray-400">
                            Already have an account?{' '}
                            <button className="font-medium text-blue-500 text-primary-600 hover:underline"
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </button>
                        </p>
                    </form>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}
export default Register;