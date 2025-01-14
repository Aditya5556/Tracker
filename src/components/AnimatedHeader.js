import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedHeader = () => {
  const headerRef = useRef();
  const subHeaderRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      subHeaderRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <header style={{ textAlign: "center", padding: "50px" }}>
      <h1 ref={headerRef} style={{ fontSize: "3rem", color: "#3b3b3b" }}>
        Welcome to My Modern App
      </h1>
      <p
        ref={subHeaderRef}
        style={{
          fontSize: "1.5rem",
          color: "#a1a1a1",
          fontWeight: "300",
          marginTop: "10px",
        }}
      >
        Discover the best way to organize and track your habits!
      </p>
    </header>
  );
};

export default AnimatedHeader;
