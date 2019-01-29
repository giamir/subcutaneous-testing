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
        setTodoInputValue(rootWrapper, 'my first todo');
        clickAddTodoButton(rootWrapper);
        expect(getFirstItemInTodoList(rootWrapper)).toBe('my first todo')
    });

    it('visibility filters', () => {
        setTodoInputValue(rootWrapper, 'my first todo');
        clickAddTodoButton(rootWrapper);
        setTodoInputValue(rootWrapper, 'my second todo');
        clickAddTodoButton(rootWrapper);
        clickOnFirstItemInTodoList(rootWrapper);
        clickOnActiveFilterButton(rootWrapper);
        expect(getFirstItemInTodoList(rootWrapper)).toBe('my second todo');
        clickOnCompletedFilterButton(rootWrapper);
        expect(getFirstItemInTodoList(rootWrapper)).toBe('my first todo');
        clickOnAllFilterButton(rootWrapper);
        expect(getFirstItemInTodoList(rootWrapper)).toBe('my first todo');
        expect(getSecondItemInTodoList(rootWrapper)).toBe('my second todo');
    });
});

function setTodoInputValue(wrapper, value) {
    const input = wrapper.find('input');
    input.instance().value = value;
}

function clickAddTodoButton(wrapper) {
    const addTodoButton = wrapper.find('button[children="Add Todo"]');
    addTodoButton.simulate('submit');
}

function getFirstItemInTodoList(wrapper) {
    return wrapper.find('li').at(0).text();
}

function getSecondItemInTodoList(wrapper) {
    return wrapper.find('li').at(1).text();
}

function clickOnFirstItemInTodoList(wrapper) {
    wrapper.find('li').at(0).simulate('click');
}

function clickOnActiveFilterButton(wrapper) {
    const activeFilterButton = wrapper.find('button[children="Active"]');
    activeFilterButton.simulate('click');
}

function clickOnCompletedFilterButton(wrapper) {
    const completedFilterButton = wrapper.find('button[children="Completed"]');
    completedFilterButton.simulate('click');
}

function clickOnAllFilterButton(wrapper) {
    const allFilterButton = wrapper.find('button[children="All"]');
    allFilterButton.simulate('click');
}
