import React from 'react'
import './footer.css'
import Whatsapp from '../../assests/watsapp.png';
import Instagram from '../../assests/instagram.png';
import Facebook from '../../assests/facebook.png';
import Linkdin from '../../assests/Linkedin.png';

function Footer() {
  return (
    <div id="Footer" className='Footer'>
      <div className="links">
        <a href="https://wa.me/+917701958311" target='_blank'><img src={Whatsapp} className='link' alt="Whatsapp" /></a>
        <a href="https://www.instagram.com/nitesh_kumaaaar/" target='_blank'><img src={Instagram} className='link' alt="Instagram" /></a>
        <a href="https://www.facebook.com/profile.php?id=100026515833512" target='_blank'><img src={Facebook} className='link' alt="facebook" /></a>
        <a href="https://www.linkedin.com/in/nitesh-kumar-993b70290/" target='_blank'><img src={Linkdin} className='link' alt="linkdin" /></a>
      </div>
      <h1 className="footerh1"> &copy; Nitesh Kumar . All Copyright Reserved .</h1>
    </div>
  )
}

export default Footer