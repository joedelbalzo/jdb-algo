import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      {" "}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",

          fontSize: "calc(4px + 1vw)",
        }}
      >
        © Copyright 2023 JDB Ent., and built by{" "}
        <a
          href="https://www.joedelbalzo.com"
          style={{ color: "inherit", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Joe Del Balzo
        </a>
      </footer>
    </div>
  );
};

export default Footer;
