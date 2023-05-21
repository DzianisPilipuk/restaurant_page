import createDiv from "./createDiv";
import appendHomePageContent from "./home";
import appendMenuPageContent from "./menu";
import appendContactPageContent from "./contact";

const content = document.getElementById("content");

const removeLastChildNode = (parent) => {
  if (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const createHeader = () => {
  const header = createDiv("header");
  content.appendChild(header);

  const logo = createDiv("logo", "HEAVENLY BITES");
  header.appendChild(logo);

  const headerButtonsWrapper = createDiv("header-buttons-wrapper");
  header.appendChild(headerButtonsWrapper);

  const headerButtonHome = createDiv("header-button", "Home");
  headerButtonHome.style.textDecoration = "underline";
  const headerButtonMenu = createDiv("header-button", "Menu");
  const headerButtonContact = createDiv("header-button", "Contact");

  const loadPageContent = (page) => {
    removeLastChildNode(content);
    if (page === "home") {
      appendHomePageContent(content);
      headerButtonHome.style.textDecoration = "underline";
      headerButtonMenu.style.textDecoration = "none";
      headerButtonContact.style.textDecoration = "none";
    }
    if (page === "menu") {
      appendMenuPageContent(content);
      headerButtonHome.style.textDecoration = "none";
      headerButtonMenu.style.textDecoration = "underline";
      headerButtonContact.style.textDecoration = "none";
    }
    if (page === "contact") {
      appendContactPageContent(content);
      headerButtonHome.style.textDecoration = "none";
      headerButtonMenu.style.textDecoration = "none";
      headerButtonContact.style.textDecoration = "underline";
    }
    const exploreOurMenuButton = document.querySelector("button");
    if (exploreOurMenuButton) {
      exploreOurMenuButton.addEventListener("click", () => {
        loadPageContent("menu");
      });
    }
  };

  headerButtonHome.addEventListener("click", () => {
    loadPageContent("home");
  });

  headerButtonMenu.addEventListener("click", () => {
    loadPageContent("menu");
  });

  headerButtonContact.addEventListener("click", () => {
    loadPageContent("contact");
  });

  headerButtonsWrapper.appendChild(headerButtonHome);
  headerButtonsWrapper.appendChild(headerButtonMenu);
  headerButtonsWrapper.appendChild(headerButtonContact);
};

createHeader();

appendHomePageContent(content);
