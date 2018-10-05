const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const first = document.querySelector(".first");
const state_read_more = document.querySelector("#state_analysis_read");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

state_read_more.addEventListener("onmouseclick",()=>{

});