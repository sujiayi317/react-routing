import { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Shop = () => {

  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    // https://fakestoreapi.com/docs#p-all
    const data = await fetch('https://fakestoreapi.com/products?limit=50')
    
    const items = await data.json()
    console.log(items)
    setItems(items)
  }

  return (
    <div>
      {items.map(item => (
        <h6 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
          
        </h6>
      ))}
    </div>
  );
}

export default Shop;
