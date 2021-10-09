import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

   // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () =>{
       //setCategories( [...categories, 'Hero Academia'])
       
       setCategories( (categ) => [...categories, 'Hero Academia'])
    }
    
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <button onClick={handleAdd}>Añadir</button>

        <ol>
            {
                categories.map( category => (
                    <GifGrid category={ category }
                             key={ category }
                    />
                ))
            }
        </ol>
        </>
    )
    
    
}




export default GifExpertApp

