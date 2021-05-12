import './menu-item.styles.scss';
import React from 'react';
import { urlencoded } from 'body-parser';
const MenuItem = ({title,imageUrl,size}) => (
    <div className={`${size} menu-item`}>
            <div className='background-image' 
                style={{backgroundImage:`url(${imageUrl})`}} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <samp className='subtitle'>shop now</samp>
            </div>
    </div>
);

export default MenuItem;