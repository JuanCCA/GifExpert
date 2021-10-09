import {getGifs} from '../../helpers/getGifs'

describe('Testing getGifs Fetch', () => {


    test('should return 3 elements', async() => {

        const gifs = await getGifs('Sapo')
        
        expect(gifs.length).toBe(3)
        
    })

    test('should return [] when 0', async() => {

        const gifs = await getGifs('')
        
        expect(gifs.length).toBe(0)
        
    })
    
    
})
