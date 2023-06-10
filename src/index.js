const body = document.querySelector("body");
const content = document.querySelector("div#content");

function header() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const menu = document.createElement("li");
  menu.textContent = "Menu";

  const contact = document.createElement("li");
  contact.textContent = "Contact";

  const home = document.createElement("li");
  home.textContent = "Home";

  ul.appendChild(menu);
  ul.appendChild(home);
  ul.appendChild(contact);
  nav.appendChild(ul);
  header.appendChild(nav);
  body.appendChild(header);
}

function menu() {}

function contact() {}

function home() {}
