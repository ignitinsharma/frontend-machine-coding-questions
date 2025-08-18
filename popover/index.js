document.addEventListener("DOMContentLoaded", function (event) {
  const openButton = document.getElementsByClassName("openbutton");
  const closeButton = document.getElementsByClassName("close-button");
  const popover = document.getElementsByClassName("popover")[0];

  // open popover functionality
  openButton[0].addEventListener("click", function (eve) {
    if (popover.style.display === "block" || popover.style.display === "")
      popover.style.display = "none";
    else popover.style.display = "block";
  });

  // close openButton functionality
  closeButton[0].addEventListener("click", function (ent) {
    popover.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    // If click is outside the popover and not on the open button
    if (e.target !== openButton[0] && !popover.contains(e.target)) {
      popover.style.display = "none";
    }
  });
});
