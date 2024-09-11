import React, { useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import useLogout from '../../hooks/useLogout';
import { toast } from 'react-toastify';
import LogoutOverlay from './LogoutOverlay';

const LogoutButton: React.FC = () => {

    const { logout, loading, error } = useLogout();

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const handleLogout = () => {
        logout();
    }
    return (
        <>
            <button
                onClick={handleLogout}
                className=" text-white px-4 py-2 rounded"
                disabled={loading}
            >
                <FiLogOut className="mr-2  text-slate-200" size={25} />
            </button>
            {loading && <LogoutOverlay />}
        </>
    )
}
export default LogoutButton;