import React from 'react';

const LogoutOverlay: React.FC = () => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="text-center">
                <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-white" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-4 text-white text-2xl">Logging out...</p>
            </div>
        </div>
    );
};

export default LogoutOverlay;