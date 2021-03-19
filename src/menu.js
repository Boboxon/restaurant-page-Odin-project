export default function menu() {
  const content = document.querySelector("#content");

  const main = document.createElement("main");
  main.setAttribute("id", "main");
  main.style.position = "absolute";
  main.style.top = 0;
  main.style.width = "100%";
  main.style.height = "100vh";
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
  main.style.zIndex = -10;
  main.style.backgroundColor = "#252535";

  const div = document.createElement("div");
  div.style.marginTop = "100px";
  div.style.color = "rgb(255, 0, 119)";
  div.style.lineHeight = "1.7em";
  div.style.fontSize = "20px";

  div.style.padding = "20px";

  const ull = document.createElement("ul");
  const menu1 = document.createElement("li");
  const menu2 = document.createElement("li");

  menu1.textContent = " Pizza with Extra cheese and coke. Price is $15";
  menu2.textContent = "Pasta with sprite. Price is $10";
  ull.appendChild(menu1);
  ull.appendChild(menu2);
  div.appendChild(ull);
  main.appendChild(div);
  content.appendChild(main);
}
   