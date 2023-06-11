import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

function createHeader() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.classList.add("restaurant-name");
  h1.textContent = "Breakfast at Bryant";
  header.appendChild(h1);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  let contact = document.createElement("a");
  contact.textContent = "Contact";
  contact.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActive(contact);
    loadContact();
  });
  nav.appendChild(contact);

  let menu = document.createElement("a");
  menu.textContent = "Menu";
  menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActive(menu);
    loadMenu();
  });
  nav.appendChild(menu);

  let home = document.createElement("a");
  home.textContent = "Home";
  home.classList.add("home");
  home.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActive(home);
    loadHome();
  });
  nav.appendChild(home);

  return nav;
}

function setActive(a) {
  const allATags = document.querySelectorAll("a");

  allATags.forEach((a) => {
    if (a !== this) {
      a.classList.remove("active");
    }
  });

  a.classList.add("active");
}

function load() {
  const body = document.querySelector("body");

  body.insertBefore(createHeader(), body.firstChild);

  setActive(document.querySelector("a.home"));
  loadHome();
}

load();
