import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".scroll-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="scroll-section" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Scroll down to animate me!</h2>
      <p>Content fades in and moves up when you scroll.</p>
    </div>
  );
};

export default ScrollSection;
