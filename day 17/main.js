/*
var itemlist = document.querySelectorAll(".items");

for (var i = 0; i < itemlist.length; i++) {
    itemlist[i].style.color = "red";
}

//parentElement

var item = document.querySelector(".items");
console.log(item.parentElement);

//nextElementSibling

var item = document.querySelector(".items");
console.log(item.nextElementSibling);

//previousElementSibling

var item = document.querySelector(".items");
console.log(item.previousElementSibling);

//childNodes

var item = document.querySelector(".items");
console.log(item.childNodes);

//children
//it will not include text/linebreak 
var item = document.querySelector(".items");
console.log(item.children);

//firstChild
//it will include text/linebreak 
var item = document.querySelector(".items");
console.log(item.firstChild);

//firstElementChild
var item = document.querySelector(".items");
console.log(item.firstElementChild);

//lastChild
//it will include text/linebreak
var item = document.querySelector(".items");
console.log(item.lastChild);

//lastElementChild
var item = document.querySelector(".items");
console.log(item.lastElementChild);

//nextSibling
var item = document.querySelector(".items");
console.log(item.nextSibling);

//nextElementSibling
var item = document.querySelector(".items");
console.log(item.nextElementSibling);

//previousSibling
var item = document.querySelector(".items");
console.log(item.previousSibling);

//previousElementSibling
var item = document.querySelector(".items");
console.log(item.previousElementSibling);
*/

//createElement

//create a new div
var newdiv = document.createElement("div");
newdiv.className = "hello";
newdiv.id = "hello1";
newdiv.setAttribute("title", "hello div");

//create text node
var newdivtext = document.createTextNode("Hello");
newdiv.appendChild(newdivtext);
// console.log(newdiv);
// console.log(newdivtext);

var item = document.querySelector(".items");
item.appendChild(newdiv);

//create a new li
var newli = document.createElement("li");
var newlitext = document.createTextNode("hello");
newli.appendChild(newlitext);
var list = document.querySelector("ul");
list.appendChild(newli);

//create a new link
var newlink = document.createElement("a");
newlink.setAttribute("href", "#");
newlink.className = "delete";
newlink.appendChild(document.createTextNode("remove"));
newli.appendChild(newlink);

//delete
var del = document.querySelector(".delete");
del.parentNode.removeChild(del);