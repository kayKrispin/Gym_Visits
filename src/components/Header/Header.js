import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({
faq,
    member,
                    contact,
    calc,
                }) => (
    <header>
        <div id='preNavbar' className='background'>
            <div className='row rowUpperHeader'>
                <div className='col-md-4'>
                    <div>
                        <address>
                            <i className="fas fa-mobile-alt mobile"></i>
                            <span className='mobileP'>+38-095-0053-294 </span>
                        </address>
                    </div>
                </div>
                <div className='col-md-4'>
                    <p className='addressP'><i className="fas fa-map-marker"></i> <span className='location'>ІФ вул.Незалежності 164</span>
                    </p>
                </div>
                <div className='col-md-4 '>
                    <div className='lastUpper'>
                        <i className="fab fa-facebook-f mobile"></i>
                        <i className="fab fa-instagram mobile"></i>
                        <i className="fab fa-youtube mobile"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id='mainNavbar'>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark  static-top navMain">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <p className='logo'><span className='amber'>Amber</span> <span className='gym'>GYM</span></p>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className={faq || member || contact || calc ?  "nav-link ":"nav-link active"} to='/'>Домашня
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className={calc ?  "nav-link active ":"nav-link "} to='/calculate'>Адмінка
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={member ?  "nav-link active ":"nav-link "} to='/membership'>Абонементи</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={contact ?  "nav-link active ":"nav-link "} to='/contact'>Контакти</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={faq ?  "nav-link active ":"nav-link "} to='/faq'>Часті питання</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>

);

export default Header;
