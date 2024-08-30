// console.log(window);
//single element selector
/*
const form = document.getElementById("my-form");
console.log(form);
const h1 = document.querySelector("h1");
console.log(h1);

//multiple element selector
console.log(document.querySelectorAll(".item"));
//for class name not used much 
console.log(document.getElementsByClassName("item"));

console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
// ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = "hello";
ul.children[1].innerText = "bye";
ul.lastElementChild.innerHTML = "<h4>hello</h4>";


const btn = document.querySelector(".btn");
btn.style.background = "red";
btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector("body").classList.add("bg-dark");
    document.querySelector(".items").lastElementChild.innerHTML = "<h4>meowww</h4>";
});

*/

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);


function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === "" || emailInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
        );
        userList.appendChild(li);
        nameInput.value = "";
        emailInput.value = "";
    }
}