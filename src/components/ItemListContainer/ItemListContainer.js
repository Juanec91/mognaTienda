import React, {useState, useEffect} from "react";

import './ItemListContainer.css'
import { Card, Button, Container  } from "react-bootstrap";
import baseDeDatos from '../ItemList/dataBase.json';
import {Link} from 'react-router-dom';
import { Counter } from "../Counter/Counter";



function ItemListContainer()  {
  

 
  
  
  const [products, setProducts] = useState([])


  useEffect(() => {
    
    db().then(res=> setProducts(res))
    
  }, []);

  const text = 'Productos'
  const db = () =>{
    const products = baseDeDatos;
    return new Promise((res, rej)=>{
      setTimeout(()=>{res(products)},2000)
    })
  }

    return(
      <>
      <Container>
        <h1>{text}</h1>
      </Container>
      
      <Container className="containerPro">
  
    
       {products?.length === 0 ? <p>Cargando</p> : <>{products.map(product =>(<>
    
  <Card>
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
    </Card.Body>
    <Counter></Counter>
      <Link to={`/itemList/${product.id}`}>
        <Button>Ver mas</Button>
      </Link>
     
    </Card>

  
     </>
     ))}
    </>}
     
  

 
        </Container>

      
        
 
      </>
      

    )
}


export default ItemListContainer;