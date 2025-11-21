const backToTop = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });