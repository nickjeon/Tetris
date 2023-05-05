import "./styles.css";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const scale = 20;
// Set the canvas width and height
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

ctx.scale(scale, scale);
