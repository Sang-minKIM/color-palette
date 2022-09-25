import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";

import styled from "styled-components";
import { categoryState, colorState, optionState } from "./atom";
import Categories from "./Categories";
import DraggableOption from "./DraggableOptions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const GridContainer = styled.div`
  width: 100vw;
  height: calc(100% - 100px);

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "b c c c c c"
    "e e e e e e";
`;
const gridItem = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 50px !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  background-color: black;
  color: white;
  width: 260px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
`;

const Options = styled(gridItem)`
  grid-area: c;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: 100%;
  height: 100%;
`;

const Selected = styled(gridItem)`
  background-color: #ecf0f1;
  grid-area: e;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColorDraggable = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;
const Color = styled.div`
  width: 80px;
  height: 40px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColorMenu = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Copy = styled.button`
  width: 40px;
  height: 40px;
  font-size: larger;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const Delete = styled.button`
  width: 40px;
  height: 40px;
  font-size: larger;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 5px;
`;

const Footer = styled(gridItem)`
  background-color: #ffffff;
  width: 100vw;
  height: 50px !important;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  font-weight: 500;
`;
function App() {
  const options = useRecoilValue(optionState);
  const categoryIndex = useRecoilValue(categoryState);
  const [colors, setColors] = useRecoilState(colorState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (
      source.droppableId === "selected" &&
      destination.droppableId === "selected"
    ) {
      console.log(draggableId);
      setColors((allColors) => {
        const selectedColors = [...allColors];
        const selectedColor = draggableId;
        selectedColors.splice(source.index, 1);
        selectedColors.splice(destination.index, 0, selectedColor);
        return selectedColors;
      });
      console.log(colors);
    }
    if (
      destination.droppableId === "selected" &&
      source.droppableId === "option"
    ) {
      setColors((allColors) => {
        const selectedColor = draggableId;
        const selectedColors = [...allColors];
        if (!selectedColors.includes(selectedColor)) {
          selectedColors.splice(destination.index, 0, selectedColor);
        }
        return selectedColors;
      });
    }
  };
  const colorRef = useRef<any>();
  const [copy, setCopy] = useState(false);
  const copyColor = () => {
    const text = colorRef.current.innerText;
    navigator.clipboard.writeText(text);
    setCopy(true);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Header>
          <Title>All Colors You Like</Title>
        </Header>
        <GridContainer>
          <Categories />
          <Droppable direction="horizontal" droppableId="option">
            {(provided) => (
              <Options ref={provided.innerRef} {...provided.droppableProps}>
                {options[categoryIndex].colors.map((option, index) => (
                  <DraggableOption
                    option={option}
                    index={index}
                    key={index + ""}
                  />
                ))}
                {provided.placeholder}
              </Options>
            )}
          </Droppable>
          <Droppable direction="horizontal" droppableId="selected">
            {(provided) => (
              <Selected ref={provided.innerRef} {...provided.droppableProps}>
                {colors.length === 0
                  ? "drag your colors"
                  : colors.map((color, index) => (
                      <Draggable
                        key={color}
                        index={index}
                        draggableId={color + "a"}
                      >
                        {(provided) => (
                          <ColorDraggable
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            key={index}
                            color={color}
                          >
                            <ColorMenu>
                              <Copy onClick={copyColor}>
                                <FontAwesomeIcon icon={faCopy} />
                              </Copy>
                              <Delete>
                                <FontAwesomeIcon icon={faTrash} />
                              </Delete>
                              <Color ref={colorRef} color={color}>
                                {copy ? "copied!" : color}
                              </Color>
                            </ColorMenu>
                          </ColorDraggable>
                        )}
                      </Draggable>
                    ))}
                {provided.placeholder}
              </Selected>
            )}
          </Droppable>
        </GridContainer>
        <Footer>Color Palette by Sang Min✌🏻 </Footer>
      </DragDropContext>
    </Container>
  );
}

export default App;
