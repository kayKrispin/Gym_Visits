import React from 'react';
import styles from './styles.scss';
import { BackTop } from 'antd';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../../../../components/Header';



const MainLayoutScreen = ({
                              scrollToMyRef,
                              myRef,
                              getRef,settings
}) => (
    <div>
       <Header/>

    <section className='startSection'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 animatePhrase'>
                    <h1 className='noPain w3-center w3-animate-bottom'>Нема болю нема росту!</h1>
                    <h4 className='niceBody w3-center w3-animate-bottom'> Мати гарне тіло результат копіткої роботи над собою.Власне наше завдання є допомогти вам поєднати потужний органзім та гарне тіло</h4>
                    <div className='centerBtnWrapper w3-center w3-animate-bottom'><a onClick={scrollToMyRef}><span></span>Почати</a></div>
                </div>
            </div>
        </div>
    </section>

    <section className='container wellcomSection'>
    <div  ref={ (ref) => { return getRef(ref)} }  className='row wellcomeRow'>
        <div className='col-md-12 wellcomeSection'>
            <div  id="wellcomeUp" className='wellcomeUp'>
                <p >Вітаємо</p>
                <hr className=' divider bg-danger '></hr>
                <span className='spanGreet'>Вітаємо на нашому сайті.Сподвіаюсь ви будете задоволені нашим сервісом!Який ми надаємо нашим слабоумним клієнтам</span>
            </div>
        </div>
        <div className='col-md-4 box textCenter box-icon box-icon-bordered'>
            <div  className='innerBox'>
                <span className='wellcomeIcons'><i className="fas fa-users"></i></span>
            <h4 className='wellcomeHeaders'>Кваліфіковані Тренери</h4>
            <span>Every client of Intense has a personalized program of training and nutrition.</span>
            </div>
          </div>
    <div className='col-md-4 box textCenter marginLeft'>
    <div  className='innerBox'>
            <span className='wellcomeIcons'><i className="fas fa-thumbs-up"></i></span>
        <h4 className='wellcomeHeaders'>Індивідуальний Підхід</h4>
        <span>Every client of Intense has a personalized program of training and nutrition.</span>
    </div>
    </div>
    <div  className='col-md-4 box textCenter marginLeft'>
    <div className='innerBox'>
    <span className='wellcomeIcons'><i className="fas fa-dumbbell"></i></span>
<h4 className='wellcomeHeaders'>Спортивне Обладнання</h4>
<span>Every client of Intense has a personalized program of training and nutrition.</span>
    </div>

        <BackTop />
</div>
    </div>
    </section>
        <section className='mainSlider'>
            <Carousel
{...settings}

            >
        <div className='upperSlider'>
        <img className='upperSliderImg' src='https://img.freepik.com/free-photo/screaming-bald-man-lifting-dumbbell_23-2147687629.jpg?size=338&ext=jpg' />
        <h4 className='slidesH'>Бодібілдінг</h4>
        <button>Перше заняття безкоштовне</button>
    </div>
    <div className='upperSlider'>
    <img className='upperSliderImg' src='https://www.greatestphysiques.com/wp-content/uploads/2016/12/xhJZHiJA.jpg' />
    <h4  className='slidesH'>Калістетіка</h4>
    <button>Перше заняття безкоштовне</button>
</div>
    <div className='upperSlider'>       <img className='upperSliderImg' src='https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg' />
    <h4   className='slidesH martial'>Фітнес</h4>
    <button>Перше заняття безкоштовне</button>
</div>
    <div className='upperSlider'>        <img className='upperSliderImg' src='https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2015/04/ThinkstockPhotos-463625399.jpg?fit=720%2C487' />
    <h4  className='slidesH martialL' >Маршл Артс</h4>
<button>Перше заняття безкоштовне</button>
</div>
    <div className='upperSlider'>        <img  className='upperSliderImg' src='https://www.meme-arsenal.com/memes/92f1d920ea1339f93cb550496f17f2ba.jpg' />
    <h4  className='slidesH'>Дібілдінг</h4>
    <button>Перше заняття безкоштовне</button>
</div>
</Carousel>
    </section>

    <section className='couches'>
    <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
            <h2>Тренери</h2>
    <hr className=' divider bg-danger '></hr></div>
        <div className='col-md-3 col-sm-6'>
        <div className='trainersContainerD'>
                <div className='socialCont left'><i className="fab fa-facebook-f"></i></div>
                <div className='socialCont center' ><i className="fab fa-instagram"></i></div>
                <div className='socialCont right'><i className="fab fa-google"></i></div>
        </div>
    <h3>Дмітрій <span>Бодібілдінг</span></h3>
<p>Мощний бодібілдер.Секретна техніка смальця буде вам розказана</p>
        </div>
<div className='col-md-3 col-sm-6'>
    <div className='trainersContainerT'>
        <div className='socialCont left'><i className="fab fa-facebook-f"></i></div>
        <div className='socialCont center' ><i className="fab fa-instagram"></i></div>
        <div className='socialCont right'><i className="fab fa-google"></i></div>
    </div>
    <h3>Циган <span>Турнікмен</span></h3>
<p>Ви зможете опанувати палташок на 10 стійку ворона та інше</p>
</div>

<div className='col-md-3 col-sm-6 vladislavPhoto'>
    <div className='trainersContainer'>
    <div className='socialCont left'><i className="fab fa-facebook-f"></i></div>
<div className='socialCont center' ><i className="fab fa-instagram"></i></div>
<div className='socialCont right'><i className="fab fa-google"></i></div>
    </div>
    <h3>Бладислав <span>Паверліфтер</span></h3>
<p>Бладислав завітав до нас з самої Росії і поділиться секретами спражнього Грубого Москаля</p>
</div>
<div className='col-md-3 col-sm-6'>
    <div className='trainersContainerV'>
    <div className='socialCont left'><i className="fab fa-facebook-f"></i></div>
<div className='socialCont center' ><i className="fab fa-instagram"></i></div>
<div className='socialCont right'><i className="fab fa-google"></i></div>
    </div>
    <h3>Брат <span>Бойові Мистецтва</span></h3>
<p>Бем-бем </p>
</div>


</div>
    </div>
        </section>
    <section className='blogSection'>
        <div className='container'>
         <div className='row'>
            <div className='col-md-12'>
                <h2>Останні блог пости</h2>
                 <hr className=' divider bg-danger '></hr>
            </div>
            <div className='col-md-6 '>
                <div className='blogPost'>
                    <span className='blogRef'>Бодібілдінг</span>
                    <span className='blogRef1'>Естетика</span>
                    <h3 className='blogTitle'> Помпуй бітку </h3>
                    <span className='blogFrom'>від <strong>Братів</strong></span>
                    <span className='blogDate'> <i className="fas fa-clock"></i><strong>2 дня назад</strong></span>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='blogPostLift'>
                    <span className='blogRef'>Бодібілдінг</span>
                    <span className='blogRef1'>Естетика</span>
                    <h3 className='blogTitle'> Стиль срущого пса</h3>
                    <span className='blogFrom'>від <strong>Блади</strong></span>
                    <span style={{marginLeft:"10px"}} className='blogDate'> <i className="fas fa-clock"></i><strong>2 дня назад</strong></span>
                </div>
            </div>
            <div className='col-md-6 '>
                <div className='blogPostCali'>
                    <span className='blogRef'>Бодібілдінг</span>
                    <span className='blogRef1'>Естетика</span>
                    <h3 className='blogTitle'> Калестетика як вона є</h3>
                    <span className='blogFrom'>від <strong>Цигана</strong></span>
                    <span className='blogDate'> <i className="fas fa-clock"></i><strong>2 дня назад</strong></span>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='blogPostRonnie'>
                    <span className='blogRef'>Бодібілдінг</span>
                    <span className='blogRef1'>Естетика</span>
                    <h3 className='blogTitle'> Поради Лайт-Вейт Ронні</h3>
                    <span className='blogFrom'>від <strong>Дмітрія</strong></span>
                    <span className='blogDate'> <i className="fas fa-clock"></i><strong>2 дня назад</strong></span>
                </div>
            </div>
            <div className='col-md-12'>
                <button className="viewAllBlog"> Переглянути усі блоги</button>
            </div>
          </div>
        </div>
    </section>

    <section className='reviewSection'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>Відгуки</h2>
                     <hr className=' divider bg-danger '></hr>
    <div className="reviewSlider">
                        <Carousel
                    dots={false}
                    slidesToShow={1}
                    arrows={true}
                        >
                        <div>
                        <p className='reviewP'>Пацани внатурі прийшов сюда навіть не думав шо то можна так качатись.Але братва всьо пояснила показал і вафлі тупо пробило на плюс двадцять до жиму</p>
                        <img src ='data:image/jpeg;base64,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'  />

                        <p>Колєга</p>
                        <p>З майзлів</p>
                    </div>
                        <div>
                        <p className='reviewP'>Нема слів .... до сліз </p>
                            <img src='https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg'/>
                            <p>Колєга</p>
                            <p>З Микитинців</p>
                        </div>
                            <div>
                            <p className='reviewP'>Навкурат</p>
                                <img src='https://son-o.ru/images/logos/%D0%91%D0%BE%D0%BC%D0%B6.jpg' />
                                <p>Колєга</p>
                                <p>З Братів</p>
                            </div>
                        </Carousel>
    </div>
                </div>
            </div>
        </div>
    </section>


    <footer>
        <div className='container footerContainer'>
            <div className='row'>
                <div className='col-md-3'>
                    <p className='logo logoFooter'><span className='amber'>Amber</span> <span className='gym'>Gym</span></p>
                    <div className='socCont'>
                            <div style={{paddingLeft:'20px'}} className='socialContFooter facebook '><i className="fab fa-facebook-f"></i></div>
                            <div className='socialContFooter insta  ml' ><i className="fab fa-instagram"></i></div>
                            <div className='socialContFooter google  ml'><i className="fab fa-google"></i></div>
                    </div>
                    <p className='rights'>Amber Gym © 2018 . Всі права захищені</p>
                </div>
                    <div className='col-md-3'>
                         <p>Стрічка Фейсбука</p>
                        <div className='row faceRow'>
                            <div className='col-md-12 mb '>
                                <span><i className="fab fa-facebook-f"></i>Dec/21/2018</span>
                                <p>Display Posts in Lists, Tiles, Grid, Slider, Carousel, Ticker, and more with Elementor Plugins… </p>
                                <strong>twitter.com/i/web/status/1…@templatemonster</strong>
                            </div>
                            <div className='col-md-12'>
                                <span><i className="fab fa-facebook-f"></i>Dec/21/2018</span>
                                <p>Display Posts in Lists, Tiles, Grid, Slider, Carousel, Ticker, and more with Elementor Plugins… </p>
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
                        <div className='col-md-6'>                        <div className='imageFooter'></div>
    </div>
                        <div className='col-md-6'>                        <div className='imageFooter'></div>
    </div>
                        <div className='col-md-6'>                        <div className='imageFooter'></div>
    </div>
    </div>

                    </div>
                    <div className='col-md-3 newsRow'>
                        <p> Новини</p>
    <p className='newsP'>Keep up with our always upcoming product features and technologies. Enter your e-mail and subscribe to our newsletter.</p>
                        <div className='subscribeContainer'> <span className='footerSpan'><i className="far fa-envelope"></i></span><input className='footerInput' /><button className='subscribe'>Підписка</button></div>

</div>
            </div>
        </div>
    </footer>
</div>
);


export default MainLayoutScreen;