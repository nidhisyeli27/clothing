import React from 'react';
import './homepage.styles.scss'
const HomePage = () =>(

    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>hats</h1>
                    <samp className='subtitle'>shop now</samp>
                </div>
            </div>
             <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>jake</h1>
                    <samp className='subtitle'>shop now</samp>
                </div>
            </div>
             <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>women</h1>
                    <samp className='subtitle'>shop now</samp>
                </div>
            </div>
             <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>men</h1>
                    <samp className='subtitle'>shop now</samp>
                </div>
            </div>
        </div>
    </div>

);

export default HomePage;