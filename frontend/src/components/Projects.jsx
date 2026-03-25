import React, { useState } from 'react'
import { Link } from 'react-router-dom';


//=========== React Icons================================
import { DiJsBadge } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { CgLink } from "react-icons/cg";


import '../styles/projects.css'


//==================== photo============================
import cafeImg from '../assets/project-img/cafe.jpg'
import AbbsImg from '../assets/project-img/abbs.jpg'
import bycImg from '../assets/project-img/byc.png'


const Projectsdata = [


    {
        "id": 1,
        "name": "Cafe Website",
        "image": cafeImg,
        "demo": "",
        "paragraph": "Modern and visually appealing cafe website, showcasing menu, ambiance, and online reservation.",
        "sourceCode": "123"
    },
    {
        "id": 2,
        "name": "Alpha Beta Boarding School",
        "image": AbbsImg,
        "demo": "https://abbs-three.vercel.app",
        "paragraph": "Showcasing the college's academic programs, campus life, and community initiatives.",
        "sourceCode": "123"
    },
    {
        "id": 3,
        "name": "Barju Yuwa club",
        "image": bycImg,
        "demo": "https://barju-yuwa-club.vercel.app",
        "paragraph": " focused on youth empowerment, organizing events, workshops, social responsibility.",
        "sourceCode": "123"

    },


]


function Projects() {

    console.log(Projectsdata[0])

    return (


        <>


            <div className="project-section">


                <h2> Take a closer look !</h2>
                <div className="project-container">

                    {  

                        Projectsdata.map(({ id, name, image, demo, paragraph, sourceCode }) => {


                            return (<div className='project' key={id}>


                                <img src={image} alt="logo" />

                                <p id='project-name'> {name}</p>
                                <p id='project-para'>{paragraph}</p>

                                <div className='button-project'>
                                    <p> <Link to={sourceCode} target='_blank'> Source Code</Link></p>
                                    <p><Link to={demo} target='_blank'>view Demo</Link></p>
                                </div>

                            </div>

                            )

                        })
                    }


                </div>






            </div>








        </>



    )
}

export default Projects