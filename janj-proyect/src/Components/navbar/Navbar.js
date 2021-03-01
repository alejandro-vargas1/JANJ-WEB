import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
// Estilos 
import '../../styles/navbar/Navbar.css';

// Componentes
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          JANJ
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Quienes Somos?  
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/historial'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Historial <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/conversor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Conversor
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contactenos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contactenos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/iniciosesion'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Inicio de Sesión
            </Link>
          </li>
          <li>
            <Link
              to='/registrarse'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Registrarse
            </Link>
          </li>
        </ul>
        
        <Button/>
      </nav>
    </>
  );
}

export default Navbar;