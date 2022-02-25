import { Card, Button, Container } from "react-bootstrap"
import baseDeDatos from '../ItemList/dataBase.json';
import React,{useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = ()=>{
  const [product, setProducts] = useState({})
  const{id} = useParams();
  const getProduct =(nameProduct)=>{
    return new Promise((resolve, reject)=>{
      const db = baseDeDatos
      const findProduct = db.find((element)=>element.id === nameProduct)
      setTimeout(()=>{
        resolve(findProduct)
      }, 2000)
    });
  }
  useEffect(()=>{
   const obtenerProducto = async(id)=>{
    const responsePromise = await getProduct(id)
    setProducts(responsePromise)
   }
   obtenerProducto(id);
  },[id])

  return(
    
    <ItemDetail productProp={product}>
  <Card>
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
    </Card.Body>
    <div>
    
      </div>
      <Link to={`/itemDetail/${product.id}`}>
      <Button>Ver mas</Button>
      </Link>
     
    </Card>

  
     </ItemDetail>
  )
}