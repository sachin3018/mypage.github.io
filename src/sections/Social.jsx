import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
   

    return(
        <div className='row tech common' id="social">
            <h3 className='skills'>Social Media</h3>
            <div className='row'>
                <div className='col md-3 icons'>
                    <SocialIcon url="https://www.linkedin.com/in/sachin-singh-66642b106/" className='icon'/>
                </div>
                <div className='col md-3 icons'>
                    <SocialIcon url="https://api.whatsapp.com/send?phone=917749806554&text=Hey%2C%20I%20am%20reaching%20out%20to%20you.%20Please%20revert%20when%20available.%0AThanks" className='icon'/>
                </div>
                <div className='col md-3 icons'>
                    <SocialIcon url="https://github.com/sachin3018" className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Social;
