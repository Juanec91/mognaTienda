import {Link} from 'react-router-dom'
import { Button   } from "react-bootstrap";
import React, {useState} from 'react';
import baseDeDatos from './dataBase.json'
export const ItemList = ({ productProp }) => {
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
      productProp = baseDeDatos
    
      const {contador, incremetar, disminuir} = useContador();
            return (
                <div className="container mt-5" id="product-detail">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={productProp.img} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="product-info">
                                <h1>{productProp.name}</h1>
                                <h3>${productProp.price}</h3>
                                <hr />
                                <p>{productProp.description}</p>
                                <Button onClick={disminuir} className="button-test"> -</Button>
      <Button onClick={incremetar} className="button-test">+</Button>
      <p>{contador}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
  