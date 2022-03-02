import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import baseDeDatos from './dataBase.json'
import { Counter } from '../Counter/Counter';
import { Button } from "react-bootstrap";




export const ItemList = () => {
    
      const {id} = useParams()
      const addItem = ()=>{
        return(
            <div>
                <Button onClick={()=> endingBuy(alert("compra exitosa"))}>Finalizar compra</Button>
            </div>
        )
      }
      const endingBuy = (endingBuy)=>{
        console.log(endingBuy)
    }


    
     
            return (
                <div className="container mt-5" id="product-detail">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={baseDeDatos[id].img} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="product-info">
                                <h1>{baseDeDatos[id].name}</h1>
                                <h3>${baseDeDatos[id].price}</h3>
                                <hr />
                                
                                <Counter></Counter>
                                <Button onClick={()=>addItem} >Agregar al carrito</Button>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
  