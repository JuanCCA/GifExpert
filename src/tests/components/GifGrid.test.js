import {shallow} from 'enzyme';
import {GifGrid} from '../../components/GifGrid'
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/FetchGifs')


describe('Tests for GifGrid', () => {
    

    test('should create the component correctly', () => {
        


        const wrapper = shallow( <GifGrid category="Coñaroo"/>);

        expect(wrapper).toMatchSnapshot();


    })

    test('should show items when images ar loaded by useFetchGifs', () => {
        
        
       

        const wrapper = shallow( <GifGrid category="Coñaroo"/>);



    })
    



})
