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

(() => {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (!sidebar || !toggle || !nav) return;

  const close = () => {
    sidebar.classList.remove("sidebar--open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  };

  const open = () => {
    sidebar.classList.add("sidebar--open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar menú");
  };

  const isOpen = () => sidebar.classList.contains("sidebar--open");

  toggle.addEventListener("click", () => {
    if (isOpen()) close();
    else open();
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", (event) => {
    if (!isOpen()) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (sidebar.contains(target)) return;
    close();
  });

  const mq = window.matchMedia("(max-width: 850px)");
  mq.addEventListener?.("change", (event) => {
    if (!event.matches) close();
  });
})();
