import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import MainLayoutScreen from './containers/MainLayout';
import 'antd/dist/antd.css';



class App extends  Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/calculate' component={ Home }/>
                    <Route exact path='/' component={ MainLayoutScreen } />
                </Switch>
            </div>
        )
    }
}

export default App;