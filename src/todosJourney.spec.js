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
        // user type a todo
        setTodoInputValue(rootWrapper, 'my first todo');

        // user click the add todo button
        // user see the added todo in the list
        // user click on todo to mark it as completed
        // user see the todo marked as completed
    });

    it('visibility filters', () => {
        // user type a todo (todo one)
        // user click the add todo button
        // user type another todo (todo two)
        // user click the add todo button
        // user click on (todo one) to mark it as completed
        // user click on active filter
        // user only see (todo two)
        // user click on completed filter
        // user only see (todo one)
        // user click on all filter
        // user see all todos
    });
});

function setTodoInputValue(wrapper, value) {
    const input = wrapper.find('input');
    input.instance().value = value;
}
