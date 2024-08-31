import { FaPaperPlane, FaImage, FaSmile } from 'react-icons/fa';

const MessageInputContainer: React.FC = () => {

    return (
        <form className=" m-2 w-full h-16  flex px-4 py-2 border bg-zinc-800 border-zinc-600 justify-between  gap-3 rounded-lg ">
            <div className='flex gap-2'>
                <button type="button" className="text-gray-400 hover:text-white mr-2">
                    <FaImage size={20} />
                </button>
                <button type="button" className="text-gray-400 hover:text-white mr-2">
                    <FaSmile size={20} />
                </button>
            </div>

            <textarea
                placeholder="Type a message..."
                className="flex-grow px-4 py-2 text-white bg-zinc-900 rounded-md border-none outline-none"
            />
            <button type="submit" className="text-gray-400 hover:text-white ml-2   ">
                <FaPaperPlane size={20} className='text-cyan-200 hover:text-cyan-300' />
            </button>

        </form>
    );
};

export default MessageInputContainer;