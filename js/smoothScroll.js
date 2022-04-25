const smoothScroll = () => {
  const navbar = document.querySelector(".header__nav"); // навбар вверху страницы
  const links = navbar.querySelectorAll("a"); // все ссылки навбара

  links.forEach((link) => {
    // перебор массива ссылок, чтобы получить каждую отдельно
    link.addEventListener("click", (event) => {
      // обработчик событий на каждую ссылку навбара
      event.preventDefault(); // отключение действия по умолчанию
      const section = document.querySelector(link.getAttribute("href")); // ссылка навбара это точно ссылка
      if (section) {
        // если щелчок по ссылке происходит плавный скролл
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};

smoothScroll();
