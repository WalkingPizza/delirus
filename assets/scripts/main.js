const observeHeader = (e) => {
  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > header.clientHeight)
    header.classList.add("header--sticky");
  else header.classList.remove("header--sticky");
};

const toggleMenu = (e) => {
  const menu = document.querySelector(".header__menu");

  if (
    !menu ||
    !(
      e.target.closest(".header__hamburger") ||
      e.target.closest(".header__menu a")
    )
  )
    return;

  const isOpen = menu.classList.toggle("header__menu--open");

  document.body.style.overflow = isOpen ? "hidden" : "auto";
};

document.addEventListener("scroll", observeHeader);
document.addEventListener("DOMContentLoaded", observeHeader);
document.addEventListener("click", toggleMenu);
