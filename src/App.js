import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import MemberShip from './containers/MemberShip';
import FAQ from './containers/FAQContainer';
import ContactUs from './containers/ContactUs';
import MainLayoutScreen from './containers/MainLayout';
import 'antd/dist/antd.css';
import ImageInput from './components/ImageInput';
import VideoInput from './components/VideoInput';




class App extends  Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/calculate' component={ Home }/>
                    <Route exact path='/membership' component={ MemberShip }/>
                    <Route exact path='/faq' component={ FAQ }/>
                    <Route exact path='/contact' component={ ContactUs }/>
                    <Route exact path='/' component={ MainLayoutScreen } />
                    <Route exact path='/image' component={ ImageInput } />
                    <Route exact path='/video' component={ VideoInput } />
                </Switch>
            </div>
        )
    }
}

export default App;