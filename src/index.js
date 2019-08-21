import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import { Provider } from 'react-redux';



function* rootSaga() {
    yield takeEvery('FETCH_PETS', fetchPets);
}

function* fetchPets(action) {
    console.log('in fetchPets');
    try {
        const response = yield Axios.get('/api/pets')
        const action = { type: 'SET_PETS', payload: response.data }
        yield put(action);
    }
    catch (error) {
        alert(`Couldn't get the pets. Try again later.`);
        console.log('Error on GET', error);
    }
}

const petListReducer = (state = [], action) => {
    console.log('in petListReducer', action.payload);
    switch (action.type) {
        case 'SET_PETS':
            return action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        petListReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


