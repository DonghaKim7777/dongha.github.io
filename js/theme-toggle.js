const toggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('icon-sun');
const moonIcon = document.getElementById('icon-moon');

function applyTheme(theme) {
  localStorage.setItem('color-theme', theme);
  document.documentElement.setAttribute('color-theme', theme);
  if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }
}

function getUserTheme() {
  const saved = localStorage.getItem('color-theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('color-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});

window.onload = () => {
  applyTheme(getUserTheme());
};
