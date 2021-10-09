import { shallow } from "enzyme";
import {GifGridItem} from "../components/GifGridItem"
describe('Testing GifGridItems', () => {

    const title = 'Titulo de prueba'
    const url = 'https://api.bimi.com/aklsfk'
    const wrapper = shallow( <GifGridItem title={title} url={url} />);
    
    test('Should create component correctly', () => {
        
        expect(wrapper).toMatchSnapshot()

    })
    

    test('Should have a p with title', () => {
        
        const p = wrapper.find(`p`).text();
        expect(p).toBe(title)

    })

    test('should have image and alt same', () => {
        

        const img = wrapper.find('img');
        const src = img.prop('src');
        const alt = img.prop('alt');
        expect(src).toBe(url)
        expect(alt).toBe(title);

    })

    test('should have fade class', () => {
        
        const fade = "animate__fadeInLeftBig"

        const div = wrapper.find('div')

        const classes = div.prop('className')

        const existsClass =  classes.includes(fade)

        expect(existsClass).toBe(true)


    })
    
    
    

})
