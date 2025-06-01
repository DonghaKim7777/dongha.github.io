 const $toggle = document.querySelector('.toggle-input');

    const isUserColorTheme = localStorage.getItem('color-theme');
    const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const getUserTheme = () => isUserColorTheme ? isUserColorTheme : isOsColorTheme;

    function applyTheme(theme) {
      localStorage.setItem('color-theme', theme);
      document.documentElement.setAttribute('color-theme', theme);
      $toggle.checked = theme === 'dark';
    }

    window.onload = function () {
      applyTheme(getUserTheme());
    }

    $toggle.addEventListener('change', (e) => {
      const isDark = e.target.checked;
      applyTheme(isDark ? 'dark' : 'light');
    });