export default function header() {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const h1 = document.createElement("h1");
  h1.textContent = "Pizza Restaurant";

  const nav = document.createElement("nav");
  nav.setAttribute("id", "nav");

  const ul = document.createElement("ul");

  const homeLI = document.createElement("li");
  homeLI.classList.add("nav-link");
  const homeLink = document.createElement("a");
  homeLink.setAttribute("id", "home");
  homeLink.textContent = "Home";
  homeLI.appendChild(homeLink);

  const menuLI = document.createElement("li");
  menuLI.classList.add("nav-link");
  const menuLink = document.createElement("a");
  menuLI.setAttribute("id", "menu");
  menuLink.textContent = "Menu";
  menuLI.appendChild(menuLink);

  const contactLI = document.createElement("li");
  contactLI.classList.add("nav-link");
  const contactLink = document.createElement("a");
  contactLink.setAttribute("id", "contact");
  contactLink.textContent = "Contact";
  contactLI.appendChild(contactLink);

  ul.appendChild(homeLI);
  ul.appendChild(menuLI);
  ul.appendChild(contactLI);

  nav.appendChild(ul);

  header.appendChild(h1);
  header.appendChild(nav);

  content.appendChild(header);
}
