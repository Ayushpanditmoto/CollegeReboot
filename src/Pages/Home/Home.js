import React, { useRef, useState } from "react";
import styled from "styled-components";
import Headers from "../../Components/Header";
import useClickOutside from "../../helpers/clickOutside";

function Home() {
  const [show, setShow] = useState(true);
  const el = useRef(null);

  useClickOutside(el, () => {
    // el.current.style.display = "none";
    setShow(false);
    console.log("u clicked outside");
  });

  return (
    <>
      <Headers />

      {show && <Card ref={el}></Card>}
    </>
  );
}

export default Home;

//directly target .card

const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  position: absolute;
  top: 10vh;
  left: 0;
  transform: translate(-50%, -50%);
`;
