import {useState, useMemo, useEffect, useRef} from 'react';
import React from 'react';
function App16(){
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [products,setProducts] =useState([]);

    //tu dong focus o input value name khi nhat add
    const nameref=useRef();

    const handleSubmit=()=>{
        setProducts([...products,{name: name, price: parseInt(price)}])
        setName('');
        setPrice('');

        nameref.current.focus();
    }
    // neu ko dung useMemo thi moi lan render no lai phai tinh toan lai 
    const total=useMemo(()=>{
        console.log('Tinh toan lai');
        const result=products.reduce((sum,product)=>{return sum+product.price},0)
        return result;
    },[products])
    // const total=

    return (
        <div style={{padding: '10px 32px'}}>
            <input ref={nameref} value={name} placeholder="Enter name..." onChange={e=>setName(e.target.value)} />
            <br/>
            <input value={price} placeholder="Enter price..." onChange={e=>setPrice(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total:{total}
            <ul>
                {products.map((product,index)=>(
                    <li key={index}>{product.name}-{product.price}</li>
                ))}
            </ul>
        </div>
        
    )
}
export default App16;