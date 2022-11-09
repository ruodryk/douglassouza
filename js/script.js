const panels = document.querySelectorAll(".cards__panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActives();
    panel.classList.add("active");
  });
});

function removeActives() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
