import './menu-item.styles.scss';
import React from 'react';
import {withRouter} from 'react-router-dom'

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
    <div className={`${size} menu-item`} onClick ={()=> history.push(`${match.url}${linkUrl}`)} >
            <div className='background-image' 
                style={{backgroundImage:`url(${imageUrl})`}} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <samp className='subtitle'>shop now</samp>
            </div>
    </div>
);

export default withRouter(MenuItem);