import { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const ItemDetail = ({ match }) => {

  useEffect(() => {
    fetchItem()
    console.log(match)
  }, [])

  const [item, setItem] = useState({})

  const fetchItem = async () => {
    // https://fakestoreapi.com/docs#p-all
    const feItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    const item = await feItem.json()
    setItem(item)
    console.log(item)
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt="" />
    </div>
  );
}

export default ItemDetail;
