import React from 'react';
import styles from './styles.scss';

const Footer = ({

                }) => (
    <footer>
        <div className='container footerContainer'>
            <div className='row'>
                <div className='col-md-3'>
                    <p className='logo logoFooter'><span className='amber'>Amber</span> <span className='gym'>Gym</span>
                    </p>
                    <div className='socCont'>
                        <div style={{paddingLeft: '20px'}} className='socialContFooter facebook '><i
                            className="fab fa-facebook-f"></i></div>
                        <div className='socialContFooter insta  ml'><i className="fab fa-instagram"></i></div>
                        <div className='socialContFooter google  ml'><i className="fab fa-google"></i></div>
                    </div>
                    <p className='rights'>Amber Gym © 2018 . Всі права захищені</p>
                </div>
                <div className='col-md-3'>
                    <p>Стрічка Фейсбука</p>
                    <div className='row faceRow'>
                        <div className='col-md-12 mb '>
                            <span><i className="fab fa-facebook-f"></i>Dec/21/2018</span>
                            <p>Display Posts in Lists, Tiles, Grid, Slider, Carousel, Ticker, and more with Elementor
                                Plugins… </p>
                            <strong>twitter.com/i/web/status/1…@templatemonster</strong>
                        </div>
                        <div className='col-md-12'>
                            <span><i className="fab fa-facebook-f"></i>Dec/21/2018</span>
                            <p>Display Posts in Lists, Tiles, Grid, Slider, Carousel, Ticker, and more with Elementor
                                Plugins… </p>
                            <strong>twitter.com/i/web/status/1…@templatemonster</strong>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <p>Галерея</p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='imageFooter'></div>
                        </div>
                        <div className='col-md-6'>
                            <div className='imageFooter'></div>
                        </div>
                        <div className='col-md-6'>
                            <div className='imageFooter'></div>
                        </div>
                        <div className='col-md-6'>
                            <div className='imageFooter'></div>
                        </div>
                    </div>

                </div>
                <div className='col-md-3 newsRow'>
                    <p> Новини</p>
                    <p className='newsP'>Keep up with our always upcoming product features and technologies. Enter your
                        e-mail and subscribe to our newsletter.</p>
                    <div className='subscribeContainer'><span className='footerSpan'><i className="far fa-envelope"></i></span><input
                        className='footerInput'/>
                        <button className='subscribe'>Підписка</button>
                    </div>

                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

