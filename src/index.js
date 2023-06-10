import loadHome from "./home";

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

  let home = document.createElement("a");
  home.textContent = "Home";
  home.href = "#";
  home.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActive(home);
    loadHome();
  });
  nav.appendChild(home);

  let menu = document.createElement("a");
  menu.textContent = "Menu";
  menu.href = "#";
  menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActive(menu);
    //load contact
  });
  nav.appendChild(menu);

  let contact = document.createElement("a");
  contact.textContent = "Contact";
  contact.href = "#";
  contact.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActive(contact);
    //load contact
  });
  nav.appendChild(contact);

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
  const content = document.querySelector("div#content");

  body.appendChild(createHeader());

  setActive(document.querySelector("a"));
  loadHome();
}

load();
