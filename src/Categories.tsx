import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { category, categoryState } from "./atom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-area: b;
  display: grid;
`;

const Category = styled.input`
  border: none;
`;

function Categories() {
  const categories = useRecoilValue(category);
  const setColor = useSetRecoilState(categoryState);
  const onClick = (event: React.FormEvent<HTMLInputElement>) => {
    setColor(+event.currentTarget.value);
  };
  return (
    <Container>
      {categories.map((category, index) => (
        <Category
          type="button"
          onClick={onClick}
          style={{ backgroundColor: category, color: category }}
          key={category}
          value={index}
        />
      ))}
    </Container>
  );
}
export default Categories;
