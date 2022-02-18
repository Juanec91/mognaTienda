import React, {useState, useEffect} from "react";
import './NavBar.css'
import { Container, Card, CardProps, CardImg, CardBody, ListGroup, ListGroupItem, Button,  } from "react-bootstrap";

function ItemListContainer()  {
  const [contador, setContador] = useState(0);
  const incremetar =() => {
    setContador(contador +1)
  }
  const disminuir =() => {
    setContador(contador - 1)
  }


  
  const [prodcuts, setProducts] = useState([])
  const [productDetail, setProductDetail] = useState({})

  useEffect(() => {
    
    db().then(res=> setProducts(res))
    
  }, []);

  const text = 'Productos'
  const db = () =>{
    const products = [
      {
          id: 1,
          name: 'Riñonera',
          img: '../img/rinoDos.jpg',
          price: 1000,
          stock: 50
      },
      {
          id: 2,
          name: 'Buff',
          img: '../img/buffDos.jpg',
          price: 500,
          stock: 10
      },
      {
          id: 3,
          name: 'Magnesiera',
          img: '../img/magnesierasUno.jpg',
          price: 1200,
          stock: 7
      },
      {
          id: 4,
          name: 'Cuellitos',
          img: '../img/cuellitoDos.jpg',
          price: 400,
          stock: 15
      },
      {
          id: 5,
          name: 'Magnesiera',
          img: '../img/magnesierasDos.jpg',
          price: 1200,
          stock: 7
      },
      {
          id: 6,
          name: 'Buff',
          img: '../img/buffUno.jpg',
          price: 500,
          stock: 10
      },
      {
          id: 7,
          name: 'Cuellitos',
          img: '../img/cuellitoUno.jpg',
          price: 400,
          stock: 15
      },
      {
          id: 8,
          name: 'Riñonera',
          img: '../img/rinoUno.jpg',
          price: 1000,
          stock: 50
      },
      {
          id: 9,
          name: 'Magnesiera',
          img: '../img/magnesierasTres.jpg',
          price: 1200,
          stock: 7
      },
      {
          id: 10,
          name: 'Buff',
          img: '../img/buffTres.jpg',
          price: 500,
          stock: 10
      },
      {
          id: 11,
          name: 'Cuellitos',
          img: '../img/cuellitoTres.jpg',
          price: 400,
          stock: 15
      },
      {
          id: 12,
          name: 'Riñonera',
          img: '../img/rinoTres.jpg',
          price: 1000,
          stock: 50
      }
  ];
    return new Promise((res, rej)=>{
      setTimeout(()=>{res(products)},3000)
    })
  }

    return(
      <>
      <h1>{text}</h1>
      <Container>
      <div>
     
     <ListGroup as="ol" numbered>
     {prodcuts?.length === 0 ? <p>Cargando</p> : <>{prodcuts.map(product =>(<>
      <ListGroupItem as="li">{product.name}</ListGroupItem>
     <ListGroupItem>{product.price}</ListGroupItem>
     </>
     ))}
    </>}
     
 
</ListGroup>
    </div>
<section className="container">
     <br></br>
     <br></br>
     <br></br>
     <div>
     <h2 className="title">{contador}</h2>
     </div>
    <Button onClick={incremetar} className="button-test">+</Button>
    
    <Button onClick={disminuir} className="button-test"> -</Button>
        </section>
        </Container>

      
        
 
      </>
      

    )
}


export default ItemListContainer;