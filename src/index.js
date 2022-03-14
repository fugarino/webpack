import "./style.css";
import Hero from "./hero.png";

function component() {
  const element = document.createElement("div");
  element.textContent = "Hello World!";
  element.classList.add("hello");
  const myHero = new Image();
  myHero.src = Hero;
  element.appendChild(myHero);
  return element;
}

document.body.appendChild(component());
