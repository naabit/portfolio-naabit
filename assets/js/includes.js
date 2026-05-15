(() => {
  const includeNodes = Array.from(document.querySelectorAll("[data-include]"));
  if (includeNodes.length === 0) return;

  const fetchText = async (path) => {
    const response = await fetch(path, { cache: "no-cache" });
    if (!response.ok) throw new Error(`No se pudo cargar ${path}: ${response.status}`);
    return response.text();
  };

  const loadAll = async () => {
    await Promise.all(
      includeNodes.map(async (node) => {
        const path = node.getAttribute("data-include");
        if (!path) return;
        const html = await fetchText(path);
        node.outerHTML = html;
      })
    );

    document.dispatchEvent(new CustomEvent("site:includes:loaded"));
  };

  loadAll().catch((error) => {
    console.error(error);
    document.dispatchEvent(new CustomEvent("site:includes:loaded"));
  });
})();

