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

  const logo = createDiv("logo", "Heavenly Bites");

  header.appendChild(logo);

  const headerButtonsWrapper = createDiv("header-buttons-wrapper");

  header.appendChild(headerButtonsWrapper);

  const headerButtonHome = createDiv("header-button", "Home");
  headerButtonHome.addEventListener("click", () => {
    removeLastChildNode(content);
    appendHomePageContent(content);
  });

  const headerButtonMenu = createDiv("header-button", "Menu");
  headerButtonMenu.addEventListener("click", () => {
    removeLastChildNode(content);
    appendMenuPageContent(content);
  });

  const headerButtonContact = createDiv("header-button", "Contact");
  headerButtonContact.addEventListener("click", () => {
    removeLastChildNode(content);
    appendContactPageContent(content);
  });

  headerButtonsWrapper.appendChild(headerButtonHome);
  headerButtonsWrapper.appendChild(headerButtonMenu);
  headerButtonsWrapper.appendChild(headerButtonContact);
};

createHeader();

appendHomePageContent(content);
