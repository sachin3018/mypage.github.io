import React from 'react';
const image = require('../Assets/sachin.png')

const Introduction = () => {
    return(
        <div className='row intro mb-3'>
            <div className='col md-6 p-3 imageDiv'>
                <img src={image.default} alt="image" className='rounded myimg'/>
            </div>
            <div className='col md-6 p-3 detail'>
                <div className='name'>
                    <h1>Sachin Singh</h1>
                </div>
                <p>
                    Self-motivated , Fast learner and hardworking B.Tech graduate in computer science and engineering. I am always ready to work in a
                    challenging environment to prove my technical skills and utilize my knowledge of my domain in 
                    the growth of the organization and I will always upskill my self.
                </p>
            </div>
        </div>
    )
}

export default Introduction;
