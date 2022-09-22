import React from 'react';


const Loader = () => {
    return (
        <div className='LoaderContent'>
            <svg width="100vw" height="20">
                <rect width="100%" height="100%" fill="#46237a" />
            </svg>
        </div>
    );
};

export default Loader;