const body = document.getElementsByTagName("body")[0];
const headerContainer = document.querySelector(".header_info");
const themeSwitcher = document.querySelector(".theme_switcher");
const header = document.querySelector(".header");
const headerTitle = document.querySelector(".header_info_title");
const cards = document.querySelectorAll(".card");
const cardFollowersCounts = document.querySelectorAll(".card_followers_count");
const bottomCardsTitle = document.querySelector(".bottom_cards_title");
const bottomCards = document.querySelectorAll(".bottom_card");
const bottomCardFooterValues = document.querySelectorAll(
  ".bottom_card_footer_value"
);
const attribution = document.querySelector(".attribution");

themeSwitcher.addEventListener("click", () => {
  body.classList.toggle("dark_body");
  header.classList.toggle("dark_header");
  headerContainer.classList.toggle("dark_border");
  headerTitle.classList.toggle("dark_title");
  cards.forEach((card) => card.classList.toggle("dark_card"));
  cardFollowersCounts.forEach((cardFollowersCount) =>
    cardFollowersCount.classList.toggle("dark_title")
  );
  bottomCardsTitle.classList.toggle("dark_title");
  bottomCards.forEach((bottomCard) => bottomCard.classList.toggle("dark_card"));
  bottomCardFooterValues.forEach((bottomCardFooterValue) =>
    bottomCardFooterValue.classList.toggle("dark_title")
  );
  attribution.classList.toggle("dark_title");
});
