import React from "react";
import '../NavBar/NavBar.css';
import logo from "../../assets/img/logo.png";



const Footer = () => {

  
  

    return(
        <>
            <footer>
            <div className="containerFooter">
					<form className="containerFooter__form" action="#" method="#">
						<fieldset className="containerFooter__form__field">

							<a className="containerFooter__form__field__a" href={logo} target="_blank">
                            <img
          alt=""
          src={logo}
          width="45"
          height="60"
          className="d-inline-block align-top"
        />
							</a>
							<label className="containerFooter__form__field__label" for="info-personal">Email</label>
							
							<input className="containerFooter__form__field__label" type="email" name="info-personal" id="" placeholder="Ingrese su email"/>
							<label className="containerFooter__form__field__label" for="info-personal"></label>
							<input type="checkbox" name="newsletter" id=""/>¿Quieres suscribirte a nuestro newsletter? <input className="labelFormFooter containerFooter__form__field__label" type="submit" value="Enviar formulario"/>
						</fieldset>
					</form>
                    </div>
            </footer>


</>
    )
}


export default Footer;