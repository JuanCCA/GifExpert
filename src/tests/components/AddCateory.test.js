import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory'
import React from 'react';

describe('Test for AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    })
    
    test('should create the component correctly', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('should change text box', () => {

        const input = wrapper.find('input');

        const value = 'Coñarro'

        input.simulate('change', {target:{value}});

        //expect( wrapper.find(p).text()).toBe(value) // Si ponemos un p en el template con el valor se puede testear bien

    })

    test('shouldn not post info', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();


    })


    test('should call setCategories and clean text box', () => {


        const input = wrapper.find('input');

        const value = 'Coñarro'

        input.simulate('change', {target:{value}});

        expect( wrapper.find('p').text()).toBe(value)

        wrapper.find('form').simulate('submit', { preventDefault(){}});
       
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('p').text()).toBe('')



    })
    
    


})
