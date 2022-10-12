import React from 'react';
const image = require('../Assets/sachin.png')

const Introduction = () => {
    return(
        <div className='row intro common mb-3 mt-2' id="home" >
            <div className='col-6 p-3 imageDiv'>
                <div className='row p-3'>
                    <img src={image.default} alt="image" className='myimg'/>
                </div>
            </div>
            <div className='col-6'>
                <p className="detail">
                    Self-motivated , Fast learner and hardworking B.Tech graduate in computer science and engineering. I am always ready to work in a
                    challenging environment to prove my technical skills and utilize the knowledge of my domain in 
                    the growth of the organization and I will always upskill my self.
                </p>
            </div>
        </div>
    )
}

export default Introduction;
