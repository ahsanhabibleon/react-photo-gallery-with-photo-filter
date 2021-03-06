import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const setUp = (props = {}) => {
    const component = shallow(<App />);
    return component
}

describe('leftSideBar component test', () => {
    let component;

    beforeEach(() => {
        component = setUp()
    })

    it('It should render without error', () => {
        const wrapper = component.find(`[data-test="App"]`);
        expect(wrapper.length).toBe(1)
    })
})