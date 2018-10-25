import thunk from 'redux-thunk';
import { applyMiddleware,createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';



const createMiddleware =  () => {
    if(process.env.NODE_ENV==='production'){
        applyMiddleware(thunk)
    }else{
        applyMiddleware(thunk,createLogger)
    }
};

export const store  = createStore(reducer,
    composeWithDevTools(thunk)
    );