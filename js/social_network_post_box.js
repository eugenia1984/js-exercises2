const container = document.querySelector(".container"),
  privacy = container.querySelector(".privacy"),
  arrowBack = container.querySelector(".arrow-back");

privacy.addEventListener("click", () => {
  container.classList.add("active");
});

arrowBack.addEventListener("click", () => {
  container.classList.remove("active");
});