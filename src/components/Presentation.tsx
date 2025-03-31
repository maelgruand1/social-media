import React from 'react';
import logo from './logo.svg';
import ReactImage from './images/image.png';
function Present(){
    return (
        <div className='presentation'>
            <p className='present'>This application is created using the JavaScript framework named React</p>
            <img src={ReactImage} alt="React Logo" className='image1' />
        </div>
    )
}
export default Present
