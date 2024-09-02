var btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#my-form").style.background = "#ccc";
});

var button = document.querySelector(".btn");
var box = document.getElementById("box");
button.addEventListener("click", runEvent);
button.addEventListener("dblclick", runEvent);
button.addEventListener("mousedown", runEvent);
button.addEventListener("mouseup", runEvent);


box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);

box.addEventListener("mousemove", runEvent);
box.addEventListener("mouseout", runEvent);
box.addEventListener("mouseover", runEvent);



function runEvent(e) {
    console.log("Event Type :" + e.type);
}