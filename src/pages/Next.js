import React from 'react';
import Content from '../components/Content';
import BoxTitle from '../components/BoxTitle'


const titlecontent = {
    title: 'notre concept',
    content:[ <div className="ContainerP">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat
        </p>
        <p>
        Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
        </div>],
};

const Next = () => {
    return (
    
        <div>
             <BoxTitle
                title={titlecontent.title}
                content={titlecontent.content}
            />
        </div>
    );
};

export default Next;