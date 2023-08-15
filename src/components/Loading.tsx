import React from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
    fontFamily: "Arial, sans-serif",
  },
  spinner: {
    border: "8px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    borderTop: "6px solid black",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite",
  },
  text: {
    margin: "10px",
  },
};

const Loading: React.FC = () => (
  <div style={styles.container}>
    <div style={styles.spinner}></div>
    <p style={styles.text}>Loading...</p>
  </div>
);

export default Loading;
