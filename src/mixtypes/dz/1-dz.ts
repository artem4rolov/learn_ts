export {};

type Style = "none" | "dotted" | "dashed" | "solid";
type Color = "Red" | "Green" | "Blue" | "Black" | "White";

// утилита Uncapitalize делает первый символ маленьким
type BorderStyle = `${Style} ${Uncapitalize<Color>} 1px`;

let borderStyle1: BorderStyle = "dashed blue 1px";
// let borderStyle2: BorderStyle = "none blue";
