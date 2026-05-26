(() => {
  const initSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");

    if (!sidebar || !toggle || !nav) return;
    if (sidebar.dataset.ready === "true") return;
    sidebar.dataset.ready = "true";

    const setOpen = (isOpen) => {
      sidebar.classList.toggle("sidebar--open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    };

    toggle.addEventListener("click", () => {
      setOpen(!sidebar.classList.contains("sidebar--open"));
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!sidebar.classList.contains("sidebar--open")) return;
      if (!sidebar.contains(target)) setOpen(false);
    });

    window.matchMedia("(min-width: 851px)").addEventListener("change", () => {
      setOpen(false);
    });
  };

  const init = () => initSidebar();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  document.addEventListener("site:includes:loaded", init);
})();
