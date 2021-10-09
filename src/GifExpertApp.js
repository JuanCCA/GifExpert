import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defuaultCategories = []}) => {

   // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(defuaultCategories);

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

