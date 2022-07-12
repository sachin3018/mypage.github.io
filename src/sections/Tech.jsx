import React from 'react';
import { ProgressBar } from 'react-bootstrap'

const Tech = () => {
    const [react,setReact] = React.useState(0)
    const [reactnative,setReactNative] = React.useState(0)
    const [dsa,setDSA] = React.useState(0)
    const [mysql,setMysql] = React.useState(0)
    const [angualr,setAngular] = React.useState(0)
    const [html,setHtml] = React.useState(0)
    const [python,setPython] = React.useState(0)
    const [java,setJava] = React.useState(0)


    const skills = [
        {
            name : "ReactJS",
            value : 65,
            project : true,
            varient : 'success',
            variableName : react
        },
        {
            name : "React Native",
            value : 75,
            project : true,
            varient : 'warning',
            variableName : reactnative
        },
        {
            name : "Data Structure and Algorithm",
            value : 65,
            project : true,
            varient : 'info',
            variableName : dsa
        },
        {
            name : "MySql",
            value : 65,
            project : true,
            varient : 'danger',
            variableName : mysql
        },
        {
            name : "Angular",
            value : 40,
            project : true,
            varient : 'success',
            variableName  : angualr
        },
        {
            name : "HTML",
            value : 60,
            project : true,
            varient : 'warning',
            variableName : html
        },
        {
            name : "Pyhton",
            value : 50,
            project : false,
            varient : 'info',
            variableName : python
        },
        {
            name : "Core Java",
            value : 65,
            project : true,
            varient :  'danger',
            variableName : java
        }
    ]

    React.useEffect(() => {
        if(skills[0].value !== react){
            setTimeout(() => setReact(react + 1),100)
        }
        if(skills[1].value !== reactnative){
            setTimeout(() => setReactNative(reactnative + 1),100)
        }
        if(skills[2].value !== dsa){
            setTimeout(() => setDSA(dsa + 1),100)
        }
        if(skills[3].value !== mysql){
            setTimeout(() => setMysql(mysql + 1),100)
        }
        if(skills[4].value !== angualr){
            setTimeout(() => setAngular(angualr + 1),100)
        }
        if(skills[5].value !== html){
            setTimeout(() => setHtml(html + 1),100)
        }
        if(skills[6].value !== python){
            setTimeout(() => setPython(python + 1),100)
        }
        if(skills[7].value !== java){
            setTimeout(() => setJava(java + 1),100)
        }
        console.log(45);
    },[react,reactnative,dsa,mysql,angualr,html,python,java]);

    
    

    return(
        <div className='row tech common' id="skills">
            <h3 className='skills'>Skills</h3>
            {
                skills.map((skill) => (
                    <div className=''>
                        <h3>{skill.name}</h3>
                        <ProgressBar animated label={skill.variableName} now={skill.variableName} variant={skill.varient} max="100" className='bars md-6'/>
                    </div>
                ))
            }
        </div>
    )
}

export default Tech;
