(() => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const section = carousel.closest(".projects") ?? document;
    const prevBtn = section.querySelector("[data-carousel-prev]");
    const nextBtn = section.querySelector("[data-carousel-next]");

    const getStep = () => {
      const firstCard = carousel.querySelector(".project-card");
      if (!firstCard) return 0;
      const cardRect = firstCard.getBoundingClientRect();
      return Math.max(1, Math.round(cardRect.width));
    };

    const scrollByStep = (direction) => {
      const step = getStep();
      if (!step) return;
      carousel.scrollBy({ left: direction * (step + 20), behavior: "smooth" });
    };

    prevBtn?.addEventListener("click", () => scrollByStep(-1));
    nextBtn?.addEventListener("click", () => scrollByStep(1));
  });
})();
