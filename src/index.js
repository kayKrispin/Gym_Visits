import  React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { store } from './redux/store';
import { Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Router>
     <Provider store={store}>
        <Route component={App}/>
        </Provider>
    </Router>
, document.getElementById('root')
);