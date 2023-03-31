import { useState,useEffect } from 'react';
function List({getItems}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems())
        console.log('Rendering..')
    }, [getItems])
    
    return ( 
        <ul>
           {items.map(item => <li key={item}>{item}</li>)}
             
        </ul>
     );
}

export default List;