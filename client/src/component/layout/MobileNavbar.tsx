import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';

// type MobileNavbarProps = {

// };

const MobileNavbar: React.FC = () => {

    return (
        <button
            className="text-white px-4 py-2 rounded"
        >
            <IoMenuSharp size={30} />
        </button>
    )
}
export default MobileNavbar;