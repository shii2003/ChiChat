import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


type ProtectRouteProps = {

    user: boolean,
    // user: User,
    redirect?: string,
    children?: React.ReactNode;
};

const ProtectRoute: React.FC<ProtectRouteProps> = ({ user, redirect = "/login", children }) => {

    if (!user) return <Navigate to={redirect} />;

    return <>{children || <Outlet />}</>;
}
export default ProtectRoute;