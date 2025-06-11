import React from "react";

function Footer({ weather }) {
  const getBackgroundColor = () => {
    switch (weather) {
      case "clear":
        return "#0F408F"; 
      case "clouds":
        return "#505B60"; 
      case "rain":
        return "#395853"; 
      case "snow":
        return "#7E8DAC"; 
      default:
        return "#ffffff"; // fallback white
    }
  };

  return (
    <footer
      style={{
        backgroundColor: getBackgroundColor(),
        padding: "1rem",
        textAlign: "center",
        fontWeight: 200,
        fontFamily: "pretendard",
        color: "white"
      }}
    >
      @4444.22.4444
    </footer>
  );
}

export default Footer;
