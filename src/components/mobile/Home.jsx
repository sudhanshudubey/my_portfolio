import useWindowStore from "#store/window";
import React from "react";

const MobileHome = () => {
  const { openWindow } = useWindowStore();

  return (
    <section id="mobile-home">
      <ul>
        <li onClick={() => openWindow("resume")}>
          <img src={`${import.meta.env.BASE_URL}images/pages.png`} alt="pages" />
        </li>
        <li onClick={() => openWindow("terminal")}>
          <img src={`${import.meta.env.BASE_URL}images/terminal.png`} alt="terminal" />
        </li>
      </ul>
    </section>
  );
};

export default MobileHome;
