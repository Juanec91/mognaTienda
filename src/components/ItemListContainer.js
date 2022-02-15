import React, {useState} from "react";
import './NavBar.css'

function ItemListContainer()  {
  const [contador, setContador] = useState(0);
  const incremetar =() => {
    setContador(contador +1)
  }
  const disminuir =() => {
    setContador(contador - 1)
  }


    return(
      <section className="container">
     <br></br>
     <br></br>
     <br></br>
     <div>
     <h2 className="title">{contador}</h2>
     </div>
    <button onClick={incremetar} className="button-test">+</button>
    
    <button onClick={disminuir} className="button-test"> -</button>
        </section>
 

    )
}


export default ItemListContainer;