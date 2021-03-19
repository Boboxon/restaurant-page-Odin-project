export default function homePage() {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  main.style.position = "absolute";
  main.style.top = 0;
  main.style.width = "100%";
  main.style.height = "100vh";
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  main.style.zIndex = -10;

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=977&q=80"
  );
  img.setAttribute("alt", "");
  img.style.position = "absolute";
  img.style.bottom = 0;
  img.style.width = "100vw";
  img.style.height = "100vh";
  img.style.zIndex = -10;
  main.appendChild(img);
  content.appendChild(main);
}
