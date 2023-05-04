const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  const posX = e.offsetX;
  const posY = e.offsetY;
  const span = document.createElement("span");
  span.style.left = posX + "px";
  span.style.top = posY + "px";
  const spanSize = Math.random() * 100;
  span.style.width = spanSize + "px";
  span.style.height = spanSize + "px";
  body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 2000);
});
