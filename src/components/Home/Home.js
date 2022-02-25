import React from "react";
import '../NavBar/NavBar.css';
import car2 from "../../assets/img/logoCaro.jpg";
import car3 from "../../assets/img/caroUno.jpg";
import car1 from "../../assets/img/mognaCarr.jpg";

import { Carousel } from "react-bootstrap";

const Home = () => {

  
  

    return(
        <>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={car1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={car2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Explora</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Acompañando Aventuras</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</>
    )
}


export default Home;