let menuclick = document.querySelector(".menu-burguer");
menuclick.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  if ((menu.style.marginLeft = "-150px")) {
    menu.style.marginLeft = "0px";
  }

  setInterval(() => {
    menu.style.marginLeft = "-150px";
  }, 3000);
});
