const navItems = document.querySelectorAll("nav ul li");
const cards = document.querySelectorAll(".container-cards .social-card");
const profileCardMobile = document.querySelector(".profile-mobile");
const aboutMeMobile = document.querySelector(".about-me-mobile");
const technologiesMobile = document.querySelector(".technologies-mobile");
const interestsMobile = document.querySelector(".interests-mobile");

let currentCategory = "all";

function toggleMobileVisibility(category) {
  if (window.innerWidth <= 900) {
    const show = category === "all";
    profileCardMobile.style.display = show ? "flex" : "none";
    aboutMeMobile.style.display = show ? "flex" : "none";
    technologiesMobile.style.display = show ? "flex" : "none";
    interestsMobile.style.display = show ? "flex" : "none";
  }
}

function setActiveItem(category) {
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.category === category);
  });
}

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    const category = item.dataset.category;
    currentCategory = category;

    cards.forEach((card) => {
      const match = category === "all" || card.dataset.category === category;
      card.style.display = match ? "flex" : "none";
    });

    toggleMobileVisibility(category);
    setActiveItem(category);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    profileCardMobile.style.display = "none";
    aboutMeMobile.style.display = "none";
    technologiesMobile.style.display = "none";
    interestsMobile.style.display = "none";
  } else {
    toggleMobileVisibility(currentCategory);
  }
});

setActiveItem(currentCategory);
toggleMobileVisibility(currentCategory);
