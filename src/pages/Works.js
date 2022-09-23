import React from 'react';
import BoxTitle from '../components/BoxTitle'

const titlecontent = {
    title: 'travaux',
    content:[ <div className='ContainerImg'>
        <img src="ex-image.jpg" alt="" />
        <div className="TitleWork">
            <div className="TitleWorkContainer">
            <h1>
                Drupal  
            </h1>
            <p>
                Site pour l'entreprise semin
            </p>
            </div>
           
        </div>
    </div>],
};

const Works = () => {
    return (
       
             <BoxTitle
                title={titlecontent.title}
                content={titlecontent.content}
            />
        
    );
};

export default Works;