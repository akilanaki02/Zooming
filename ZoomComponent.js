import React, { useState, useRef } from "react";

const ZoomComponent = () => {
  const [zoom, setZoom] = useState(1); // ✅ Hook inside a function component
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    let newZoom = zoom + (e.deltaY < 0 ? 0.1 : -0.1);
    newZoom = Math.max(1, Math.min(newZoom, 5)); // Restrict zoom range
    setZoom(newZoom);
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      style={{
        width: "600px",
        height: "400px",
        border: "2px solid #ccc",
        overflow: "auto",
      }}
    >
      <div
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
          width: "1000px",
          height: "800px",
          background: "lightblue",
        }}
      >
        <p style={{ padding: "20px", fontSize: "24px" }}>ZoomContent</p>
      </div>
    </div>
  );
};

export default ZoomComponent;
