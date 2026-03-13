import React from 'react'
import { Link } from 'react-router-dom'



import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


import "../styles/footer.css"

const Footer = () => {






  return (

    <>
     


      <footer>
 

        <div className="Social-links">

          <li> <Link to={`https://web.facebook.com/saajnaa.456` } target='_blank'> <FaFacebook /> </Link></li>
          <li><Link to={`https://www.linkedin.com/in/saajnaa123` } target='_blank'> <FaLinkedin /> </Link></li>
          <li> <Link to={`https://github.com/saajnaa` } target='_blank'> <BsGithub /> </Link></li>
          <li>  <Link to={`https://tiktok.com/saajnaa.123` } target='_blank'>  <FaTiktok /> </Link></li>
          <li> <Link to={`https://twitter.com/milkywayk218b` } target='_blank'>  <BsTwitterX/></Link> </li>



        </div>


        <div className="developer"> ©2026 All Right Reserved. 
         

        </div>

      </footer>





    </>


  )
}

export default Footer