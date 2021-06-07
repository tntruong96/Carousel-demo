import { useEffect, useState } from "react";
import "./carousel.css";

const Carousel = (props) => {
  const [idx, setIdx] = useState(0);
  const [infinityAuto, setInfinityAuto] = useState(true);
  const images = props.children
    .filter((item) => item.type === "img")
    .map((item) => {
      item.props["className"] = "active";
      return item;
    });
  const { autoplay, autoplaySpeed, infinity } = props;
  console.log(autoplaySpeed);
  const text = props.children.filter((item) => item.type === "div");

  const next = (e) => {
    e.preventDefault();
    if (idx >= images.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }
  };

  const prev = (e) => {
    e.preventDefault();
    if (idx === 0) {
      setIdx(images.length - 1);
    } else {
      setIdx((prev) => prev - 1);
    }
  };

  const autoSlide = () => {
    return  setInterval(() => {
      if(idx  >= images.length-1){
          setIdx(0);    
      } else {
        setIdx(prev => prev+1);
      }
    }, autoplaySpeed);
  };

  
  
  useEffect(() => {
    console.log(idx);
    const interval = autoplay ? infinity && idx === images.length-1 ? null : autoSlide() : null ;   
    return () => {clearInterval(interval)}
  }, [ idx,autoplay, infinity]);

  return (
    <div className="container">
      <div className="container-img">
        <button className="prev-btn" onClick={prev}>
          prev
        </button>
        {images.map((item, index) => (
          <div
            key={index}
            className={`${index === idx ? "active" : " disactive"}`}
          >
            {item}
          </div>
        ))}
        <button className="next-btn" onClick={next}>
          next
        </button>
      </div>
      {text.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Carousel;
