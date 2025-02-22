import { useEffect, useState } from 'react';
import { SlideDown } from 'react-slidedown';
import { Link, animateScroll as scroll } from 'react-scroll';

import 'react-slidedown/lib/slidedown.css';

export function Navbar() {

    const [showMobileNav, setShowMobileNav] = useState(false);
    const [isStuck, setIsStuck] = useState(false);

    function toggleMobileNav() {
        setShowMobileNav(!showMobileNav);
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
            const height = document.getElementById('site-header')!.clientHeight;

            if (window.scrollY > height-2) {
                return setIsStuck(true);
            }

            setIsStuck(false);
        });
    }, []);


    return (
        <header id='site-header'
                className={`site-header header-style-3 header-overlay header-fullwidth sticky-header`}>
            <div className='header-topbar'>
                <div className='octf-area-wrap'>
                    <div className='container-fluid'>
                        {/* social icons */}
                        <ul className='social-list'>
                            <li>
                                <Link to='#' target='_self'><i className='fab fa-discord' /></Link>
                            </li>
                            <li>
                                <Link to='#' target='_self'><i className='fab fa-twitter' /></Link>
                            </li>
                            <li>
                                <Link to='#' target='_self'><i className='fab fa-patreon' /></Link>
                            </li>
                        </ul>
                        {/* social icons close */}
                        {/* contact info */}
                        <ul className='topbar-info clearfix'>
                            <li>
                                <i className='flaticon-envelope' /> support@magmafoundation.org
                            </li>
                        </ul>
                        {/* contact info close */}
                    </div>
                </div>
            </div>
            {/* Main Header start */}
            <div className={`octf-main-header ${isStuck ? 'is-stuck': ''}`}>
                <div className='octf-area-wrap'>
                    <div className='container-fluid octf-mainbar-container'>
                        <div className='octf-mainbar'>
                            <div className='octf-mainbar-row octf-row'>
                                {/* logo start */}
                                <div className='octf-col'>
                                    <div id='site-logo' className='site-logo'>
                                        <Link to='/'>
                                            <img className='logo-static' src='images/magma-logo.png' alt='Magma' />
                                            <img className='logo-scroll' src='images/magma-logo-dark.png' alt='Magma' />
                                        </Link>
                                    </div>
                                </div>
                                {/* logo start */}
                                {/* nav start */}
                                <nav id='site-navigation' className='main-navigation'>
                                    <ul id='primary-menu' className='menu'>
                                        <li className='current-menu-item current-menu-ancestor'>
                                            <Link to='/'><i className='fas fa-home' /> Home</Link>
                                        </li>
                                        <li>
                                            <Link smooth={true} duration={500} to='about'><i
                                                className='fas fa-info' /> About</Link>
                                        </li>
                                        <li>
                                            <Link smooth={true} duration={500} to='partners'><i
                                                className='fas fa-handshake' /> Partners</Link>
                                        </li>
                                        <li>
                                            <Link smooth={true} duration={500} to='downloads'><i
                                                className='fas fa-download' /> Downloads</Link>
                                        </li>

                                    </ul>
                                </nav>
                                {/* #site-navigation */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header mobile */}
            <div className='header_mobile'>
                <div className='container'>
                    <div className='mlogo_wrapper clearfix'>
                        {/* logo mobile start */}
                        <div className='mobile_logo'>
                            <Link to='/'><img src='images/magma-logo.png' alt='Onum' /></Link>
                        </div>
                        {/* logo mobile end */}
                        <div id='mmenu_toggle' onClick={toggleMobileNav} className={`${showMobileNav ? 'active' : ''}`}>
                            <button />
                        </div>
                    </div>
                    {/* nav mobile start */}
                    <SlideDown closed={!showMobileNav}>
                        <div className='mmenu_wrapper '>
                            <div className='mobile_nav' style={{ display: 'block' }}>
                                <ul id='menu-main-menu' className='mobile_mainmenu'>
                                    <li className='current-menu-item current-menu-ancestor'>
                                        <Link to='/'><i className='fas fa-home' /> Home</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><i className='fas fa-info' /> About</Link>
                                    </li>
                                    <li>
                                        <Link to='https://discord.gg/magma'><i className='fab fa-discord' /> Discord</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><i className='fas fa-handshake' /> Partners</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><i className='fas fa-server' /> Hosts</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><i className='fas fa-download' /> Downloads</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><i className='fas fa-code' /> API</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SlideDown>
                    {/* nav mobile end */}
                </div>
            </div>
        </header>
    );
}
