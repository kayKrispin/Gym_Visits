import  MainLayoutScreen from './MainLayoutScreen';
import React from 'react';

class MainLayoutScreenContainer extends React.Component {

constructor(props){
    super(props);
    this.myRef = null
}


    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const navbar  = document.getElementById('navbar');
        const preNavbar = document.getElementById('preNavbar')
        if(window.scrollY>20){
            navbar.classList.add('sticky');
            preNavbar.classList.add('disappear')
        } else {
            navbar.classList.remove('sticky');
            preNavbar.classList.remove('disappear')

        }
    }

    getRef = (ref) => {
        this.myRef = ref;
        console.log('was',this.myRef)
    }

    scrollToMyRef = () => {
    // run this method to execute scrolling.
        window.scrollTo({
            top: this.myRef.offsetTop,
            behavior: "smooth"  // Optional, adds animation
        })
    }



    generateProps(){
        return {
            myRef:this.myRef,
            scrollToMyRef : this.scrollToMyRef,
            getRef : this.getRef,
        }
    }


    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const props = this.generateProps();
        return <MainLayoutScreen  settings={settings} {...props} />
    }
}




export default MainLayoutScreenContainer;