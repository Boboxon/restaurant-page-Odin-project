export default function contact() {
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

  const h2 = document.createElement("h2");
  h2.textContent = "Contact us!";
  h2.style.marginTop = "100px";
  h2.style.fontSize = "30px";
  h2.style.color = "#F7F7F7";

  const div = document.createElement("div");
  div.style.marginTop = "20px";
  div.style.color = "rgb(255, 0, 119)";
  div.style.lineHeight = "1.7em";
  div.style.fontSize = "20px";

  div.style.padding = "20px";

  const email = document.createElement("p");
  email.textContent = "Email: rboboxon6055@gmail.com";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +8210-7777-7707";

  div.appendChild(email);
  div.appendChild(phone);

  main.appendChild(h2);
  main.appendChild(div);

  content.appendChild(main);
}
