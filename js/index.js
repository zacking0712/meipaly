const active = document.querySelectorAll(".item");

console.log(active);

active.forEach((item) => {
  item.addEventListener("click", () => {
    // Xoá class active
    active.forEach((active) => active.classList.remove("active"));

    // Thêm class active
    item.classList.add("active");
  });
});
