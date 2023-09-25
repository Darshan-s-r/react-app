import { Children } from 'react'
import './Resume.css'

function Resume(){
    let detail = {
        name:'Emily',
        Interests: ['Drawing', 'Photography', 'Design', 'Programming', 'Computer Science'],
        Skills: ['Web Design with HTML &amp; CSS' ],
        Education: [{link:"http://www.wiltonhighschool.org/pages/Wilton_High_School",
        edDetail: 'Wilton High School'},
        {link:"https://www.silvermineart.org/",
        edDetail: 'Silvermine School of Arts'}
     ],
     Experience:  ['Student Technology Intern for Wilton School District', 'Babysitter'],
     Extracurriculars:['Recycling Club', 'Gardening Club', 'Book Club']
         
     }
     function handleClick(){
        window.print()
     }
    
     const {name, Interests, Skills, Education,Experience, Extracurriculars} = detail
    return(
        <>
        <NameComponent2 name={name}>
        <InterestsComponent Interests={Interests} />
        <SkillsComponent Skills={Skills} /> 
        <EducationComponent Education={Education} />
        <ExperienceComponent Experience={Experience} />
        <ExtracurricularsComponent Extracurriculars={Extracurriculars} />
        <button onClick={handleClick}>print</button>
        </NameComponent2>

        </>
    )
}

function NameComponent({name, Interests, Skills, Education,Experience, Extracurriculars}) {

    function handleClick(){
        window.print()
     }
    return (
        <>
            <div id="header" />
            <div className="left" />
            <div className="stuff">
                <br />
                <br />
                <h1>Resume</h1>
                <h2>{name}</h2>
                <hr />
                <br />
                
                <p className="head">Interests</p>
            <ul>
                {Interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>

            <p className="head">Skills</p>
            <ul>{
                Skills.map((Skills, index) => (
                    <li key={index}>{Skills}</li>
                ))
            }

            </ul>

            <p className="head">Education</p>
            <ul>
                {
                    Education.map((education, index)=>(
                        <a key={index} href={education.link}>
                    <li>{education.edDetail}</li>
                </a>
                    ))
                }
            </ul>

            <p className="head">Experience</p>
            <ul>
               {
                Experience.map((experiance, index)=>(
                    <li key={index}>{experiance}</li>
                ))
               } 
            </ul>

            <p className="head">Extracurriculars</p>
            <ul>
                {
                    Extracurriculars.map((extra, index)=>(
                        <li key={index}>{extra}</li>
                    ))
                }
            </ul>

            <button onClick={handleClick}>print</button>
            </div>
            <div className="right" />
            <div id="footer">
                <h2 id="name">{name}</h2>
            </div>
            
        </>

    )
}

function NameComponent2({Children, name}) {

    return (
        <>
            <div id="header" />
            <div className="left" />
            <div className="stuff">
                <br />
                <br />
                <h1>Resume</h1>
                <h2>{name}</h2>
                <hr />
                <br />
                {Children}
            </div>
            <div className="right" />
            <div id="footer">
                <h2 id="name">{name}</h2>
            </div>
        </>

    )
}


function InterestsComponent({ Interests }) {
    return (
        <>
            <p className="head">Interests</p>
            <ul>
                {Interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </>
    );
}

  

function SkillsComponent({ Skills }) {
    return (
        <>
            <p className="head">Skills</p>
            <ul>{
                Skills.map((Skills, index) => (
                    <li key={index}>{Skills}</li>
                ))
            }

            </ul>
        </>
    )
}
function EducationComponent({Education}) {

    return (
        <>
            <p className="head">Education</p>
            <ul>
                {
                    Education.map((education, index)=>(
                        <a key={index} href={education.link}>
                    <li>{education.edDetail}</li>
                </a>
                    ))
                }
            </ul>
        </>
    )
}
function ExperienceComponent({Experience}) {
    return (
        <>
            <p className="head">Experience</p>
            <ul>
               {
                Experience.map((experiance, index)=>(
                    <li key={index}>{experiance}</li>
                ))
               } 
            </ul>
        </>
    )
}
function ExtracurricularsComponent({Extracurriculars}) {
    return (
        <>
            <p className="head">Extracurriculars</p>
            <ul>
                {
                    Extracurriculars.map((extra, index)=>(
                        <li>{extra}</li>
                    ))
                }
            </ul>
        </>
    )
}

export {Resume, NameComponent, NameComponent2, InterestsComponent, SkillsComponent, EducationComponent, ExperienceComponent, ExtracurricularsComponent };