(() => {
  const THEME_STORAGE_KEY = "naabit-theme";
  const root = document.documentElement;

  const getStoredTheme = () => {
    try {
      const theme = window.localStorage.getItem(THEME_STORAGE_KEY);
      return theme === "light" || theme === "dark" ? theme : null;
    } catch {
      return null;
    }
  };

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;

    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    const nextThemeLabel = theme === "light" ? "oscuro" : "claro";
    toggle.setAttribute("aria-label", `Activar tema ${nextThemeLabel}`);
    toggle.setAttribute("aria-pressed", String(theme === "light"));
    toggle.setAttribute("title", `Cambiar a tema ${nextThemeLabel}`);
  };

  const initThemeToggle = () => {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle || toggle.dataset.ready === "true") return;
    toggle.dataset.ready = "true";

    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
      applyTheme(nextTheme);

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Ignore storage failures and keep the in-memory theme.
      }
    });
  };

  const initSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
    const mobileQuery = window.matchMedia("(max-width: 850px)");

    if (!sidebar || !toggle || !nav) return;
    if (sidebar.dataset.ready === "true") return;
    sidebar.dataset.ready = "true";

    const setOpen = (isOpen) => {
      sidebar.classList.toggle("sidebar--open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
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

    window.addEventListener(
      "scroll",
      () => {
        if (!mobileQuery.matches) return;
        if (!sidebar.classList.contains("sidebar--open")) return;
        setOpen(false);
      },
      { passive: true }
    );

    window.matchMedia("(min-width: 851px)").addEventListener("change", () => {
      setOpen(false);
    });
  };

  const initCopyEmail = () => {
    const buttons = document.querySelectorAll("[data-copy-email]");

    buttons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement) || button.dataset.ready === "true") return;
      button.dataset.ready = "true";

      let resetTimer;

      button.addEventListener("click", async () => {
        const email = button.dataset.copyEmail;
        if (!email) return;

        try {
          await navigator.clipboard.writeText(email);
          button.classList.add("is-copied");
          button.setAttribute("aria-label", `Correo ${email} copiado`);
        } catch {
          button.setAttribute("aria-label", `No se pudo copiar el correo ${email}`);
        }

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          button.classList.remove("is-copied");
          button.setAttribute("aria-label", `Copiar correo ${email}`);
        }, 1800);
      });
    });
  };

  const init = () => {
    applyTheme(getPreferredTheme());
    initSidebar();
    initThemeToggle();
    initCopyEmail();
  };

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
    if (getStoredTheme()) return;
    applyTheme(getPreferredTheme());
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  document.addEventListener("site:includes:loaded", init);
})();
