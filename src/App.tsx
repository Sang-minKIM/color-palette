import React from "react";
import { arrayBuffer } from "stream/consumers";
import styled from "styled-components";
import { Reset } from "styled-reset";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border: solid;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(19, 1fr);
  grid-template-areas:
    "a a a a a a"
    "b c c c c c"
    "b c c c c c"
    "b c c c c c"
    "b c c c c c"
    "b c c c c c"
    "b c c c c c"
    "b c c c c c"
    "b c c c c c"
    "d d d d d d"
    "d d d d d d"
    "e e e e e e"
    "e e e e e e"
    "e e e e e e"
    "e e e e e e"
    "e e e e e e"
    "e e e e e e"
    "e e e e e e"
    "e e e e e e"
    
}
`;
const gridItem = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled(gridItem)`
  background-color: tomato;
  grid-area: a;
`;
const Categories = styled(gridItem)`
  background-color: aqua;
  grid-area: b;
  display: grid;
`;
const Options = styled(gridItem)`
  background-color: yellow;
  grid-area: c;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
const Menubar = styled(gridItem)`
  background-color: purple;
  grid-area: d;
`;
const Selected = styled(gridItem)`
  background-color: turquoise;
  grid-area: e;
  display: flex;
`;

function App() {
  const array = new Array(12);
  const options = [...array];
  const array2 = new Array(8);
  const categories = [...array2];
  const array3 = new Array(6);
  const colors = [...array3];
  return (
    <>
      <Reset />
      <Container>
        <Title>All Colors You Like</Title>
        <Categories>
          {categories.map((category, index) => (
            <div
              style={{ border: "1px solid", width: "100%", height: "100%" }}
              key={index}
            ></div>
          ))}
        </Categories>
        <Options>
          {options.map((option, index) => (
            <div
              key={index}
              style={{ border: "1px solid", width: "100%", height: "100%" }}
            ></div>
          ))}
        </Options>
        <Menubar></Menubar>
        <Selected>
          {colors.map((color, index) => (
            <div
              style={{ border: "1px solid", width: "100%", height: "100%" }}
              key={index}
            ></div>
          ))}
        </Selected>
      </Container>
    </>
  );
}

export default App;
