import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

describe('todos journey', () => {
    let rootWrapper;

    beforeEach(() => {
        const store = createStore(rootReducer);
        rootWrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
        );
    });

    it('basic usage flow', () => {

    });

    it('visibility filters', () => {

    });
});
