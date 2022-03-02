import React, {useState} from "react";
import { Button } from "react-bootstrap";




export const Counter = ()=>{
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
      return (
        <div>
        <Button onClick={disminuir} className="button-test"> -</Button>
          <Button onClick={incremetar} className="button-test">+</Button>
          <p>{contador}</p>
          </div>
    )
}

