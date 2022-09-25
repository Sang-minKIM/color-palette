import React from "react";
import { Draggable } from "react-beautiful-dnd";

import styled from "styled-components";

const Option = styled.div`
  background-color: ${(props) => props.color};
`;

interface IOptionProps {
  index: number;
  option: string;
}

function DraggableOption({ index, option }: IOptionProps) {
  console.log(option, "has been rendered");
  return (
    <Draggable index={index} draggableId={option}>
      {(provided) => (
        <Option
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          color={option}
        ></Option>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableOption);
