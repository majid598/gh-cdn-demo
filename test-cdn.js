console.log("hello world");

const style = document.getElementById("lotu");
style.style.backgroundColor = "red";
const h2 = document.createElement("h2");
h2.innerHTML = "Hello world from";
h2.style.color = 'yellow'

style.appendChild(h2);

localStorage.getItem("data");
