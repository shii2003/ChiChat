import React, { useState } from 'react';

type ImageLoaderProps = {
    src: string,
    alt?: string,
    className?: string,
};

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    }

    return (
        <div className='relative h-16 w-16 rounded full'>
            {isLoading && (
                <div className='flex justify-center m-2.5 items-center h-10 w-full rounded-full bg-zinc-500 animate-pulse'>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`${className} ${isLoading ? 'hidden' : 'block'} h-full w-full `}
                onLoad={handleImageLoad}
            />
        </div>
    )
}
export default ImageLoader;