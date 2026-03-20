(function () {
  const KEY = "jk-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
  }

  const saved = localStorage.getItem(KEY) || "dark";
  document.documentElement.setAttribute("data-theme", saved);

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#theme-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(current === "dark" ? "light" : "dark");
      });
    });
  });
})();
