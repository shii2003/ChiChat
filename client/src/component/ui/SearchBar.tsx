import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar: React.FC = () => {
    return (
        <form className='m-1 mx-auto max-w-md border border-zinc-600 rounded-md p-2 bg bg-zinc-700 focus-within:ring focus-within:ring-cyan-200 text-white' >
            <div className='flex items-center justify-between gap-2'>
                <div>
                    <MdSearch className='text-slate-200' size={25} />
                </div>
                <input
                    type="search"
                    id="default-search"
                    className='bg-zinc-700 focus:outline-none flex-grow'
                    placeholder="Search using emails..."
                    required
                />
                <div>
                    <button
                        type='submit'
                        className='text-slate-900 font-semibold  bg-cyan-200 rounded-md p-1 border-1 border-cyan-100'
                    >
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
