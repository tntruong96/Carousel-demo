import { useState } from "react";
import Carousel from "./component/Carousel";
import "./styles.css";

export default function App() {
  const [autoplay, setAutoplay] = useState(true);
  const [infinity, setInfinity] = useState(true);

  const autoFunc = (e) => {
    e.preventDefault();
      setAutoplay(!autoplay);
    
};

  const infiFunc = (e) => {
    e.preventDefault();
    setInfinity(!infinity)
  }

  return (
    <div className="App">
      <Carousel
        autoplay= {autoplay} // boolean true/false
        autoplaySpeed={1500} // number miliseconds
        infinity={infinity} // boolean true/false
      >
        <img src="https://images.pexels.com/photos/2728766/pexels-photo-2728766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="600x300" />
        <img src="https://images.pexels.com/photos/3601502/pexels-photo-3601502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="600x300" />
        <div>Text</div>
      </Carousel>
      <button onClick={autoFunc}>auto</button>
      <button onClick={infiFunc}>infiFunc</button>


      {/* <img src="https://images.pexels.com/photos/6920117/pexels-photo-6920117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=600" alt="600x300" />
        <img src="https://via.placeholder.com/400x200" alt="600x300" /> */}
    </div>
  );
}
