import React, { useState, useEffect } from "react";

const images = [
  "https://png.pngtree.com/png-clipart/20230427/original/pngtree-productivity-line-icon-png-image_9116967.png",
  "https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-quarantine-office-people-employee-manager-png-image_5913171.png",
  "https://www.reactjsindia.com/blog/wp-content/uploads/2023/11/Employee-Management-affilate-page-1536x1038-1.png",
  "https://cdni.iconscout.com/illustration/premium/thumb/admin-lady-managing-online-data-transfer-and-security-illustration-download-in-svg-png-gif-file-formats--business-startup-inforgraphic-graph-ui-pack-illustrations-1782204.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt="carousel-slide"
          style={styles.image}
        />
      </div>
      <button onClick={prevSlide} style={styles.buttonLeft}>
        &#9664;
      </button>
      <button onClick={nextSlide} style={styles.buttonRight}>
        &#9654;
      </button>
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? "#fff" : "#aaa",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: "relative",
    width: "97%",
    height: "600px",
    margin: "auto",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    margin: "10px",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "70%",
    objectFit: "cover",
    transition: "transform 0.5s ease-in-out",
    objectFit: "contain",
  },
  buttonLeft: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    fontSize: "24px",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "2px",
  },
  buttonRight: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    fontSize: "24px",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "2px",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "5px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#aaa",
    cursor: "pointer",
  },
};

export default Carousel;
