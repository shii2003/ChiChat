import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type User = {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
}

type ProtectRouteProps = {

    user: User | null,
    // user: User,
    redirect?: string,
    isAuthRoute?: boolean;
    children?: React.ReactNode;
};

const ProtectRoute: React.FC<ProtectRouteProps> = ({ user, isAuthRoute = false, redirect = "/login", children }) => {

    // If no user and route is protected, redirect to login
    if (!user && !isAuthRoute) { return <Navigate to={redirect} /> }

    return <>{children || <Outlet />}</>;
}
export default ProtectRoute;