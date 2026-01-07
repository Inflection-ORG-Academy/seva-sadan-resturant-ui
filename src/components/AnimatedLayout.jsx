import React from "react";
import { useInView } from "../hooks/UseInView";

const AnimatedLayout = ({ children, direction = "up", className }) => {
  const { ref, isVisible } = useInView();

  function getTranslateClass(direction) {
    switch (direction) {
      case "left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10";

      case "right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10";
      default:
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20";
    }
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-800 ease-out ${getTranslateClass(
        direction
      )}`}
    >
      {children}
    </div>
  );
};

export default AnimatedLayout;
