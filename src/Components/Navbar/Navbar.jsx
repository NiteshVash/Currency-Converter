import React, { useState } from 'react';
import Logo4 from '../../assests/Logo4.png';
import contact from '../../assests/contact.png';
import Mobmenu from '../../assests/Mobmenu.png';
import './navbar.css';
import Contact from '../Contact/Contact';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
  };

  const navigateTo = (hash) => {
    window.location.hash = hash;
    setShowMenu(false);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const closeContact = () => {
    setShowContact(false);
  };

  return (
    <>
      <nav className="Navbar">
        <a href="https://nitesh-kumar-ten.vercel.app/">
          <img src={Logo4} alt="Logo" className='Logo' />
        </a>

        <div className="DesktopMenu">
          <div className="DesktopMenuListItem" onClick={() => navigateTo('/')}>Home</div>
          <div className="DesktopMenuListItem" onClick={() => navigateTo('/about')}>About</div>
          <div className="DesktopMenuListItem" onClick={() => navigateTo('/uses')}>Uses</div>
        </div>

        <button className='desktopbtn' onClick={toggleContact}>
          <img src={contact} alt="" className='Desktopbtnimg' />Contact me
        </button>

        <img src={Mobmenu} alt="Menu" className='Mobmenuimg' onClick={() => setShowMenu(!showMenu)} />

        <div className={`MobMenu ${showMenu ? 'show' : ''}`}>
          <div className="MobMenuListItem" onClick={() => { navigateTo('/'); setShowMenu(false); }}>Home</div>
          <div className="MobMenuListItem" onClick={() => { navigateTo('/about'); setShowMenu(false); }}>About</div>
          <div className="MobMenuListItem" onClick={() => { navigateTo('/uses'); setShowMenu(false); }}>Uses</div>
          {/* <div className="MobMenuListItem" onClick={() => { setShowContact(true); setShowMenu(false); }}>Contact me</div> */}
        </div>
      </nav>
      {showContact && <Contact onClose={closeContact} />}
    </>
  );
}

export default Navbar;
