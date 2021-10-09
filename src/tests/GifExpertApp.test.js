import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp'
import React from 'react';

describe('Testing GifExpertApp', () => {
    

    test('should create component correctly', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();


    })

    test('should create component with categories', () => {
        
        const list = ["a","b"]

        const wrapper = shallow(<GifExpertApp defuaultCategories={list} />);


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(list.length)


    })
    


})
