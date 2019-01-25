import React from 'react';
import Header from '../../../components/Header';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';

const ContactUs = ({
    
}) => (
  <div>
      <Header contact={true}/>
      <section className='membershipMain'>
          <h1>Contact</h1>
          <p><Link to='/'>Home</Link>/Contact</p>
      </section>
      <section className='contactUsSection'>
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                        <h2 className='contactUnderscore'>Як нас знайти?</h2>
                        <p>We are located in the city center and is easy to reach with any kind of public transport. Use our map to find the nearest gym.</p>

                      <h3>Перший наш Офіс</h3>
                      <p>9863 - 9867 MILL ROAD, CAMBRIDGE, MG09 99HT
                          <br/>

                          Telephone +1 800 603 6035
                          <br/>
                          E-mail: mail@demolink.org</p>
                      <h3>Другий наш Офіс</h3>
                      <p>9863 - 9867 MILL ROAD, CAMBRIDGE, MG09 99HT.
                          <br/>
                          Telephone +1 800 603 6035
                          <br/>
                          E-mail: mail@demolink.org</p>
                  </div>
                  <div className="col-md-9 paddingLeft">
                      <h2   className='contactUnderscore'>Звяжіться з нами!</h2>
                            <div className="row marginTop">
                                <div className="col-md-6">
                                    <input placeholder='Імя' type="text"/>
                                </div>
                                <div className="col-md-6">
                                    <input placeholder='Емейл' type="text"/>
                                </div>
                                <div className="col-md-12">
                                    <textarea className='msgTextarea' placeholder='Повідомлення' name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="col-md-12 contactsBtn">
                                    <button className='buyTopButton'>Надіслати</button>
                                    <button className='buyButton contactBtn'>Очистити</button>
                                </div>
                            </div>
                  </div>
              </div>
          </div>
      </section>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.9831974079775!2d24.733360015676475!3d48.91571237929319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1d17f4d9b21%3A0x122e8cf63d67f567!2z0JDQnNCR0JXQoCBHWU0!5e0!3m2!1sen!2sua!4v1546510304495"
          style={{width:'100%', height:'600px'}} allowFullScreen></iframe>
      <Footer/>
  </div>  
);

export default ContactUs;