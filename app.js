const left = document.querySelector(".left");
const right = document.querySelector(".right");
const all_state = document.querySelector(".all_states");
const one_state = document.querySelector(".one_state");
const container = document.querySelector(".first");
const second = document.querySelector(".second");
const state_read_more = document.querySelector("#state_analysis_read");
const india_read_more = document.querySelector("#india_analysis_read");

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

all_state.addEventListener("mouseenter", () => {
  second.classList.add("hover-left");
});

all_state.addEventListener("mouseleave", () => {
  second.classList.remove("hover-left");
});

one_state.addEventListener("mouseenter", () => {
  second.classList.add("hover-right");
});

one_state.addEventListener("mouseleave", () => {
  second.classList.remove("hover-right");
});
state_read_more.addEventListener("click",()=>{
	second.classList.add("uncover");
});

india_read_more.addEventListener("click",()=>{
	container.classList.add("uncover");
});

$(document).ready(function(){
	$(".grid_box").on("click",function(){
		$(".modal-title").html($(this).prop("id").split(".")[0]);
		$("#modal_image").prop("src", `images/${$(this).prop("id")}`);
	});
});