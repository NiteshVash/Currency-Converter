import React, { useState } from 'react';
import Logo4 from '../../assests/Logo4.png';
import contact from '../../assests/contact.png';
import Mobmenu from '../../assests/Mobmenu.png';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
  };

  return (
    <nav className="Navbar">
      <a href="https://nitesh-kumar-ten.vercel.app/">
        <img src={Logo4} alt="Logo" className='Logo' />
      </a>

      <div className="DesktopMenu">
        <NavLink exact to="/" activeClassName="active"><div className="DesktopMenuListItem">Home</div></NavLink>
        <NavLink to="/about" activeClassName="active"><div className="DesktopMenuListItem">About</div></NavLink>
        <NavLink to="/uses" activeClassName="active"><div className="DesktopMenuListItem">Uses</div></NavLink>
      </div>

      <button className='desktopbtn' onClick={() => handleScroll('Contact')}>
        <img src={contact} alt="" className='Desktopbtnimg' />Contact me
      </button>

      <img src={Mobmenu} alt="Menu" className='Mobmenuimg' onClick={() => setShowMenu(!showMenu)} />

      <div className={`MobMenu ${showMenu ? 'show' : ''}`}>
        <NavLink exact to="/" activeClassName="active"><div className="MobMenuListItem">Home</div></NavLink>
        <NavLink to="/about" activeClassName="active"><div className="MobMenuListItem">About</div></NavLink>
        <NavLink to="/uses" activeClassName="active"><div className="MobMenuListItem">Uses</div></NavLink>
      </div>
    </nav>
  );
}

export default Navbar;