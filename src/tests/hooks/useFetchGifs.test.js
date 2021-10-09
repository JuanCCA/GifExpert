import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"


describe('Testing hook', () => {
    
    test('should return initial state', async() => {
        
        //const {data:images, loading} = useFetchGifs('belen');

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('sapo'));
        const {data, loading} = result.current
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
        await waitForNextUpdate();
    })
    
    test('should return an images array and false loading', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('sapo'));
        await waitForNextUpdate();
    
        const {data, loading} = result.current

        expect(loading).toBe(false);
        expect(data.length).toBe(3);


        
    })
    
    


})
