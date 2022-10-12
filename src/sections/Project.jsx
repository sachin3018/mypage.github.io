import React from 'react';
import ReactPlayer from 'react-player/lazy'

const Project = () => {
    
    const videoUrl = [
        {
            url : "https://youtube.com/shorts/PhBZpkzglTQ?feature=share",
            title: "Pizza Application",
            team : false
        },
        {
            url : "https://youtu.be/qQIvgvYY5yk",
            title : "5 different Screen with dark theme",
            team : true,
            teamMember : [
                {name : "Mihir Upadhyay"},
                {name : "Ravi Shayam"}
            ],
            display : "none"
        },
        {
            url : "https://youtube.com/shorts/x81e8WDqTy0?feature=share",
            title : "News Application",
            team : false
        },
        {
            url : "https://youtube.com/shorts/8oYh2mfunMc?feature=share",
            title : "Netflix Clone",
            team : false
        },
    ]

    return(
        <div className='row tech common' id="project">
            <h3 className='mb-3 skills'>Project</h3>
            <div className='row'>
            {
                videoUrl.map((video) => (
                    <div className='col md-4 video m-3 pt-3 projectdiv' style={{"backgroundColor" : "#CAD5E2"}}>
                        <ReactPlayer url={video.url} />
                        <h3 className='projectTitle'>{video.title}</h3>
                        {video.team && video.teamMember.map((memeber) => (
                            <h4 className='text-align-left' style={{"display": video.display}}>Team Member : {memeber.name}</h4>
                        ))}
                    </div>
                ))
            }
            
            
            </div>
            </div>
        
    )
}

export default Project;
