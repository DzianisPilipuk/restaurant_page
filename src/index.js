import createDiv from "./createDiv";
import appendHomePageContent from "./home";
import appendMenuPageContent from "./menu";
import appendContactPageContent from "./contact";

const content = document.getElementById("content");

const varContentWrapper = createDiv("var-content-wrapper");

const removeLastChildNode = (parent) => {
  if (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const loadPageContent = (page) => {
  removeLastChildNode(varContentWrapper);
  if (page === "home") {
    appendHomePageContent(varContentWrapper);
  }
  if (page === "menu") {
    appendMenuPageContent(varContentWrapper);
  }
  if (page === "contact") {
    appendContactPageContent(varContentWrapper);
  }
  const homeToMenuButton = document.getElementById("homeToMenuButton");
  if (homeToMenuButton) {
    homeToMenuButton.addEventListener("click", () => {
      loadPageContent("menu");
    });
  }
};

const markCurrentPage = (allButtons, buttonToMark) => {
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].style.textDecoration = "none";
  }
  buttonToMark.style.textDecoration = "underline";
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

  const allButtons = [headerButtonHome, headerButtonMenu, headerButtonContact];

  headerButtonHome.addEventListener("click", () => {
    loadPageContent("home");
    markCurrentPage(allButtons, headerButtonHome);
  });

  headerButtonMenu.addEventListener("click", () => {
    loadPageContent("menu");
    markCurrentPage(allButtons, headerButtonMenu);
  });

  headerButtonContact.addEventListener("click", () => {
    loadPageContent("contact");
    markCurrentPage(allButtons, headerButtonContact);
  });

  headerButtonsWrapper.appendChild(headerButtonHome);
  headerButtonsWrapper.appendChild(headerButtonMenu);
  headerButtonsWrapper.appendChild(headerButtonContact);
};

createHeader();

content.appendChild(varContentWrapper);
loadPageContent("home");
