import { useState } from 'react';
import { AddCategories, GiftFrid } from './components';
export const GiftExpertapp = () => {

    const [categories, setcategories] = useState( ['One punch'] )

    const onAddCategori = (newCategory) =>{

      if (categories.includes(newCategory) ) return;

      setcategories([newCategory, ...categories])
      //setcategories(cat =>[...categories,'Valorant'])

    }

  return (

    <>  
        <h1>GiftExpert</h1>
        
        <AddCategories 
        onNewCategory = {value => onAddCategori(value) } 
        />

            {

             categories.map((category) => ( 
              <GiftFrid 
                key={category}
                category = {category} 
              /> ) )
            
            }
    </>
  )
}
