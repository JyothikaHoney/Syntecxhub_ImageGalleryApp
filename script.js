document.querySelectorAll(".gallery-item").forEach((item) => {
  item.setAttribute("tabindex", "0");
  item.setAttribute("role", "group");
});
