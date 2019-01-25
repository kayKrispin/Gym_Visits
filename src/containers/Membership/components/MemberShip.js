import React from 'react';
import Header from '../../../components/Header';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';

const MemberShip = ({
    
}) => (
    <div>
        <Header member={true}/>
            <section className='membershipMain'>
                <h1>Membership</h1>
                <p><Link to='/'>Home</Link>/Membership</p>
             </section>
        <section className='memberShipSection'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Вибери свій тип абонемента!</h2>
                        <hr className=' divider bg-danger '></hr>
                        <p>Ви можете брати будь-який типа абонемента,проте ми рекомендуєм відвідати безплатне заняття для початку.</p>
                        <button className='freeBtn'> Отримати безкоштовне тренування</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='priceSection'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>8 занять</h2>
                        <p><i className="fas fa-hryvnia"></i> <strong>200</strong> /місяць</p>
                            <hr className=' divider bg-danger '></hr>
                        <p>Найкращий варіант якщо ви тільки починаєте займатись фізичними вправами</p>
                        <ul>
                            <li className='black'>Качалочка</li>
                            <li className='black'>Турніки</li>
                            <li className='lightGrey'>Воркавт</li>
                            <li className='lightGrey'>Кросфіт</li>
                            <li className='lightGrey'>ФуллБаді</li>
                        </ul>
                        <button className='buyButton'>Купити зараз</button>
                    </div>
                    <div className="col-md-4">
                        <div className='topPrice'>
                            <h2>12 занять</h2>
                            <p><i style={{color:"red"}} className="fas fa-hryvnia"></i> <strong style={{color:"red"}}>260</strong> /місяць
                                <img className='mostPopular' src="http://blog.geektechbranding.com/wp-content/uploads/2014/09/most-popular-promotional-items.png" alt=""/>
                            </p>
                                <hr className=' divider bg-danger '></hr>
                            <p>Найбільш ходовий варіант для людей які вже в темі</p>
                            <ul>
                                <li className='black'>Качалочка</li>
                                <li className='black'>Турніки</li>
                                <li className='black'>Воркавт</li>
                                <li className='lightGrey'>Кросфіт</li>
                                <li className='lightGrey'>ФуллБаді</li>
                            </ul>
                            <button className='buyTopButton'>Купити зараз</button>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>Безлім</h2>
                        <p><i className="fas fa-hryvnia"></i> <strong>300</strong> /місяць</p>
                        <hr className=' divider bg-danger '></hr>
                        <p>Для монстрів воркаута і тих хто відчуває в собі стероїдну ярість!</p>
                        <ul>
                            <li className='black'>Качалочка</li>
                            <li className='black'>Турніки</li>
                            <li className='black'>Воркавт</li>
                            <li className='black'>Кросфіт</li>
                            <li className='black'>ФуллБаді</li>
                        </ul>
                        <button className='buyButton'>Купити зараз</button>

                    </div>
                </div>
            </div>
        </section>
        <section className='askAQuestion' >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{textAlign:'center'}} >Запитання та Відповіді</h2>
                        <hr className=' divider bg-warning '></hr>
                    </div>
                    <div className="col-md-6">
                        <h3>How does the 14-day trial work?</h3>
                        <p>After your training course begins, there are two ways of changing or canceling your membership. If you are a new member owning a Starter plan, you can switch to another plan only in half a year. Basic and Pro members can switch to the plan of their choice instantly. Canceling is accessible for all our members regardless of their training package.</p>

                    </div>
                    <div className="col-md-6">
                        <h3>Can I change/cancel plans anytime?</h3>
                        <p>After your training course begins, there are two ways of changing or canceling your membership. If you are a new member owning a Starter plan, you can switch to another plan only in half a year. Basic and Pro members can switch to the plan of their choice instantly. Canceling is accessible for all our members regardless of their training package.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>How does the 14-day trial work?</h3>
                        <p>After your training course begins, there are two ways of changing or canceling your membership. If you are a new member owning a Starter plan, you can switch to another plan only in half a year. Basic and Pro members can switch to the plan of their choice instantly. Canceling is accessible for all our members regardless of their training package.</p>

                    </div>
                    <div className="col-md-6">
                        <h3>How does the 14-day trial work?</h3>
                        <p>After your training course begins, there are two ways of changing or canceling your membership. If you are a new member owning a Starter plan, you can switch to another plan only in half a year. Basic and Pro members can switch to the plan of their choice instantly. Canceling is accessible for all our members regardless of their training package.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>How does the 14-day trial work?</h3>
                        <p>After your training course begins, there are two ways of changing or canceling your membership. If you are a new member owning a Starter plan, you can switch to another plan only in half a year. Basic and Pro members can switch to the plan of their choice instantly. Canceling is accessible for all our members regardless of their training package.</p>

                    </div>
                    <div className="col-md-6">
                        <h3>How does the 14-day trial work?</h3>
                        <p>After your training course begins, there are two ways of changing or canceling your membership. If you are a new member owning a Starter plan, you can switch to another plan only in half a year. Basic and Pro members can switch to the plan of their choice instantly. Canceling is accessible for all our members regardless of their training package.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='sendEmailSection'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Не впевнений який план тобі точно підходить?</h2>
                        <p>Ламаєте голову над тим який план найкраще підійде для вас.Не баріться надішліть нам листа!</p>
                        <button className='mailBtn'><i className="far fa-envelope"></i> Надішліть нам листа</button>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
);

export default MemberShip;