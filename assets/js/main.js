(() => {
  const initCarousels = () => {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach((carousel) => {
      if (!(carousel instanceof HTMLElement)) return;

      const section = carousel.closest(".projects") ?? document;
      const prevBtn = section.querySelector("[data-carousel-prev]");
      const nextBtn = section.querySelector("[data-carousel-next]");

      const getStep = () => {
        const firstSlide = carousel.firstElementChild;
        if (!(firstSlide instanceof HTMLElement)) return 0;
        const cardRect = firstSlide.getBoundingClientRect();
        return Math.max(1, Math.round(cardRect.width));
      };

      const scrollByStep = (direction) => {
        const step = getStep();
        if (!step) return;

        const gap = 20;
        const delta = direction * (step + gap);
        const maxScrollLeft = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
        const nextLeft = carousel.scrollLeft + delta;
        const edgeEpsilon = 2;

        if (direction > 0 && nextLeft >= maxScrollLeft - edgeEpsilon) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
          return;
        }

        if (direction < 0 && nextLeft <= edgeEpsilon) {
          carousel.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
          return;
        }

        carousel.scrollBy({ left: delta, behavior: "smooth" });
      };

      prevBtn?.addEventListener("click", () => scrollByStep(-1));
      nextBtn?.addEventListener("click", () => scrollByStep(1));

      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (reduceMotion) return;

      let timerId = null;
      const intervalMs = 6000;

      const start = () => {
        if (timerId) return;
        timerId = window.setInterval(() => scrollByStep(1), intervalMs);
      };

      const stop = () => {
        if (!timerId) return;
        window.clearInterval(timerId);
        timerId = null;
      };

      start();

      carousel.addEventListener("pointerenter", stop);
      carousel.addEventListener("pointerleave", start);
      carousel.addEventListener("focusin", stop);
      carousel.addEventListener("focusout", start);

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stop();
        else start();
      });
    });
  };

  const initSidebar = () => {
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
  };

  const initAll = () => {
    initCarousels();
    initSidebar();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll, { once: true });
  } else {
    initAll();
  }

  document.addEventListener("site:includes:loaded", initAll);
})();
