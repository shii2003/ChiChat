import { z } from "zod";

export const signupSchema = z.object({
    name: z.string({
        required_error: "Name is required.",
    })
        .min(1, { message: "Name must be at least 1 character long." })
        .max(20, { message: "Name must be at most 20 characters long." }),


    password: z.string({
        required_error: "Password is required.",
    })
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
        .regex(/\d/, { message: "Password must contain at least one number." })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character." }),

    confirmPassword: z.string({
        required_error: "Confirm Password is required.",
    }),

    email: z.string({
        required_error: "Email is required.",
    }).email({ message: "Invalid email format." }),

    bio: z.string().max(150, { message: "Bio must be at most 150 characters long." }).optional(),

    profilePicture: z.string().url({ message: "Invalid URL format." }).optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
});

export const loginSchema = z.object({
    email: z.string()
        .min(1, "Email is required")
        .email("Invalid Email format"),

    password: z.string().min(1, "Password is required"),
})