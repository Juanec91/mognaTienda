import { Card, Button, Container } from "react-bootstrap"
import baseDeDatos from '../ItemList/dataBase.json';
import React,{useState, useEffect} from "react";
import img from "../../assets/img/cuellitoDos.jpg"

function ItemDetails() {
  

  const useContador = () =>{
    const [contador, setContador] = useState(0);
    const incremetar =() => {
      setContador(contador +1)
    }
    const disminuir =() => {
      setContador(contador - 1)
    }
    return {contador, incremetar, disminuir}
  }

  const {contador, incremetar, disminuir} = useContador();
  
  
  const [products, setProducts] = useState([])


  useEffect(() => {
    
    db().then(res=> setProducts(res))
    
  }, []);

  const text = 'Productos'
  const db = () =>{
    const products = baseDeDatos;
    return new Promise((res, rej)=>{
      setTimeout(()=>{res(products)},3000)
    })
  }

    return(
      <>
      <h1>{text}</h1>
      <Container>
  
    
       {products?.length === 0 ? <p>Cargando</p> : <>{products.find(product => product.id === 2(<>
    
  <Card>
    
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>  
        {product.price}
      </Card.Text>
    </Card.Body>
    <div>
    <Button onClick={disminuir} className="button-test"> -</Button>
      <Button onClick={incremetar} className="button-test">+</Button>
      <p>{contador}</p>
      </div>
    </Card>

  
     </>
     ))}
    </>}
     
  

 
        </Container>

      
        
 
      </>
      

    )
}
export default ItemDetails;