import React from 'react';


export const LayoutLoader: React.FC = () => {

    return (
        <div className="flex flex-col h-screen animate-pulse bg-zinc-900">
            {/* Navbar Loader */}
            <div className="h-16 bg-zinc-800 border border-zinc-700 mb-4"></div>
            {/* Main Layout Loader */}
            <div className="flex flex-1">
                {/* Chatlogs Column Loader */}
                <div className="hidden md:block md:w-1/3 lg:w-1/5 bg-zinc-800 p-4 space-y-4">
                    <div className="h-6 bg-zinc-700 rounded"></div>
                    <div className="h-6 bg-zinc-700 rounded"></div>
                    <div className="h-6 bg-zinc-700 rounded"></div>
                </div>
                {/* WrappedComponent Column Loader */}
                <div className="w-full md:w-2/3 lg:w-3/5 bg-zinc-800 p-4 space-y-4">
                    <div className="h-8 bg-zinc-700 rounded"></div>
                    <div className="h-8 bg-zinc-700 rounded"></div>
                    <div className="h-8 bg-zinc-700 rounded"></div>
                </div>
                {/* Profile Info Column Loader */}
                <div className="hidden lg:block lg:w-1/5 bg-zinc-800 p-4 space-y-4">
                    <div className="h-8 bg-zinc-700 rounded"></div>
                    <div className="h-8 bg-zinc-700 rounded"></div>
                    <div className="h-8 bg-zinc-700 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export const Backdrop: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">

        </div>
    )
}