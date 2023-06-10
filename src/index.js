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

  let menu = document.createElement("a");
  menu.textContent = "Menu";
  menu.href = "#";
  nav.appendChild(menu);

  let contact = document.createElement("a");
  contact.textContent = "Contact";
  contact.href = "#";
  nav.appendChild(contact);

  let home = document.createElement("a");
  home.textContent = "Home";
  home.href = "#";
  nav.appendChild(home);

  return nav;
}

function load() {
  const body = document.querySelector("body");
  const content = document.querySelector("div#content");

  body.appendChild(createHeader());
}

function menu() {}

function contact() {}

function home() {}
