// Меню бургер
const iconBurger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
if (iconBurger) {
  iconBurger.addEventListener("click", function (e) {
    iconBurger.classList.toggle("_active");
    menu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}

/*------------------------------------------------------------------------------------------------------------------*/

// Прокрутка при клике
const menuLinks = document.querySelectorAll(
  ".header__menu-link[data-goto], .header__button[data-goto]"
);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconBurger.classList.contains("_active")) {
        iconBurger.classList.remove("_active");
        menu.classList.remove("_active");
        document.body.classList.remove("_lock");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

/*------------------------------------------------------------------------------------------------------------------*/

//Инициализация Swiper
new Swiper(".slider__container", {
  spaceBetween: 40,

  autoHeight: true,

  slidesPerView: 5,

  loop: true,

  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  speed: 1000,

  breakpoints: {
    1200: {
      slidesPerView: 5,
    },

    992: {
      slidesPerView: 4,
    },

    767: {
      slidesPerView: 3,
    },

    480: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },
  },
});

const images = document.querySelectorAll(".slider__image img");
images.forEach(function (image) {
  image.setAttribute("width", "210"); // Установите нужную ширину
  image.setAttribute("height", "230"); // Установите нужную высоту
});
