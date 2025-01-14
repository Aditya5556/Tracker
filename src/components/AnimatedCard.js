import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedCard = () => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        background: "#fff",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        width: "300px",
        padding: "20px",
        margin: "30px",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#333" }}>Start Your Journey</h3>
      <p style={{ color: "#777" }}>
        Get started by adding your first habit and track your progress!
      </p>
      <button
        style={{
          background: "#5c6bc0",
          color: "white",
          border: "none",
          padding: "15px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onMouseEnter={() =>
          gsap.to(".animated-btn", { scale: 1.1, duration: 0.3 })
        }
        onMouseLeave={() =>
          gsap.to(".animated-btn", { scale: 1, duration: 0.3 })
        }
        className="animated-btn"
      >
        Start Now
      </button>
    </div>
  );
};

export default AnimatedCard;
