const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    accordionItems.forEach((i) => {
      // remove execs active class
      i.classList.remove("active");
      const icon = i.firstElementChild.firstElementChild.firstElementChild;
      if (icon) {
        icon.src = "/assets/images/icon-plus.svg";
      }
    });

    // add active class
    item.classList.add("active");
    const icon = item.firstElementChild.firstElementChild.firstElementChild;
    if (icon) {
      icon.src = "/assets/images/icon-minus.svg";
    }
  });
});
