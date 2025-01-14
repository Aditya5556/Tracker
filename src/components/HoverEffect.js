import React, { useEffect } from "react";
import gsap from "gsap";

const HoverEffect = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hover-element",
      { scale: 1, opacity: 0.8 },
      { scale: 1.1, opacity: 1, duration: 0.3, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div
      className="hover-element"
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "#3498db",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      Hover Over Me!
    </div>
  );
};

export default HoverEffect;
