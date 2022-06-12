(() => {
  "use strict";

  const shareBtn = document.querySelector(".share__btn");
  const footerBtn = document.querySelector(".footer__btn");

  shareBtn.addEventListener("click", toggleShare);
  footerBtn.addEventListener("click", toggleShare);

  function toggleShare() {
    const share = document.querySelector(".share");

    share.classList.toggle("active");
    footerBtn.classList.toggle("active");
  }
})();
