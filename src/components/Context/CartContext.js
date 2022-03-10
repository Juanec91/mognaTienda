import React,{createContext, useState, useContext} from "react";


export const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addItems = (item, amount)=>{
        setCartItems([...cartItems,{...item, amount}])
        setCartCount(prev => prev + amount)
    }
    
  
    return(
        <CartContext.Provider value={{cartCount, cartItems, addItems}}>
            {children} 
            </CartContext.Provider>
    )
}