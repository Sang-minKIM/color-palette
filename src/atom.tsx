import { atom } from "recoil";

export const category = atom({
  key: "categories",
  default: [
    "#eb4d4b",
    "#f0932b",
    "#f9ca24",
    "#6ab04c",
    "#686de0",
    "#30336b",
    "#833471",
    "#a4b0be",
  ],
});

export const categoryState = atom({
  key: "category",
  default: 0,
});
export const optionState = atom({
  key: "optionState",
  default: [
    {
      key: "red",
      colors: [
        "#d21a17",
        "#e6201d",
        "#e83634",
        "#eb4d4b",
        "#ee6462",
        "#f07a79",
        "#f39190",
      ],
    },
    {
      key: "orange",
      colors: [
        "#c16c0e",
        "#d97a0f",
        "#ee8713",
        "#f0932b",
        "#f29f43",
        "#f3ab5b",
        "#f5b772",
      ],
    },
    {
      key: "yellow",
      colors: [
        "#cb9f06",
        "#e4b306",
        "#f8c40b",
        "#f9ca24",
        "#fad03d",
        "#fad656",
        "#fbdc6e",
      ],
    },
    {
      key: "green",
      colors: [
        "#4a7b35",
        "#558c3d",
        "#5f9e44",
        "#6ab04c",
        "#78b85d",
        "#87c16e",
        "#96c880",
      ],
    },
    {
      key: "blue",
      colors: [
        "#2b32d1",
        "#3e44d7",
        "#5359dc",
        "#686de0",
        "#7d81e4",
        "#9296e9",
        "#a7aaed",
      ],
    },
    {
      key: "navy",
      colors: [
        "#181a36",
        "#202248",
        "#282b59",
        "#30336b",
        "#383b7d",
        "#40448e",
        "#484ca0",
      ],
    },
    {
      key: "purple",
      colors: [
        "#4c1e42",
        "#5e2652",
        "#712d61",
        "#833471",
        "#953b81",
        "#a84290",
        "#b84c9f",
      ],
    },
    {
      key: "grey",
      colors: [
        "#000000",
        "#292929",
        "#525252",
        "#7a7a7a",
        "#a3a3a3",
        "#c2c2c2",
        "#ffffff",
      ],
    },
  ],
});

export const colorState = atom<string[]>({
  key: "colorState",
  default: [],
});
