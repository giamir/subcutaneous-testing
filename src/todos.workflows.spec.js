import React from 'react';
import { mount } from 'enzyme';
import { render , fireEvent} from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

describe('todos journey (enzyme)', () => {
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
        clickAddTodoButton(rootWrapper);

        // user see the added todo in the list
        // user click on todo to mark it as completed
        // user see the todo marked as completed
    });

    function setTodoInputValue(wrapper, value) {
        const input = wrapper.find('input');
        input.instance().value = value;
    }

    function clickAddTodoButton(wrapper) {
        // start here (enzyme)
    }
});

describe('todos journey (react testing library)', () => {
    let container;

    beforeEach(() => {
        const store = createStore(rootReducer);
        container = render(
          <Provider store={store}>
              <App />
          </Provider>
        );
    });

    it('visibility filters', () => {
        // user type a todo (todo one)
        setTodoInputValue(container, 'my first todo');

        // user click the add todo button
        clickAddTodoButton(container);

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

    function setTodoInputValue(container, value) {
        const input = container.getByPlaceholderText('Add Todo');
        fireEvent.change(input, value);
    }

    function clickAddTodoButton(wrapper) {
        // start here (react-testing-library)
    }
});
