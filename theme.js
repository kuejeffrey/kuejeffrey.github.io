// theme.js — shared across all pages
(function () {
  const STORAGE_KEY = 'jk-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const thumb = document.querySelector('.toggle-thumb');
    if (thumb) thumb.textContent = theme === 'light' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Apply saved preference immediately (before paint)
  const saved = localStorage.getItem(STORAGE_KEY) || 'dark';
  applyTheme(saved);

  // Wire up button after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
    // Sync emoji on load
    const thumb = document.querySelector('.toggle-thumb');
    if (thumb) {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      thumb.textContent = theme === 'light' ? '☀️' : '🌙';
    }
  });
})();
