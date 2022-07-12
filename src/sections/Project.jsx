import React from 'react';


const Project = () => {
    
    const videoUrl = [
        {
            url : "https://drive.google.com/file/d/1Q5JbPH36EptNIpFIH9p4P5K0HzpB7M3h/preview",
            title: "Pizza Application",
            team : false
        },
        {
            url : "https://drive.google.com/file/d/1TBMb3v3T82yLjAuhSHmOdOSEez1vOgdX/preview",
            title : "5 different Screen with dark theme",
            team : true,
            teamMember : [
                {name : "Mihir Upadhyay"},
                {name : "Ravi Shayam"}
            ]
        },
        {
            url : "https://drive.google.com/file/d/1ZHtxRIOEKQe4ElJrcscziKhpqGrXNYAT/preview",
            title : "News Application",
            team : false
        },
        {
            url : "https://drive.google.com/file/d/1ZBbpF0DRvN2R0Zr2r7950ZyL2Rd3BM1d/preview",
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
                    <div className='col md-4 video'>
                        <iframe src={video.url} width="500" height="380" allow="autoplay"></iframe>
                        <h3>{video.title}</h3>
                        {video.team && video.teamMember.map((memeber) => (
                            <h4 className='text-align-left'>Team Member : {memeber.name}</h4>
                        ))}
                    </div>
                ))
            }
            
            
            </div>
            </div>
        
    )
}

export default Project;
