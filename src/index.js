import createDiv from "./createDiv";
import appendInvitationPageContent from "./home";
import appendMenuPageContent from "./menu";

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
    appendInvitationPageContent(content);
  });
  const headerButtonMenu = createDiv("header-button", "Menu");
  headerButtonMenu.addEventListener("click", () => {
    removeLastChildNode(content);
    appendMenuPageContent(content);
  });
  const headerButtonContact = createDiv("header-button", "Contact");

  headerButtonsWrapper.appendChild(headerButtonHome);
  headerButtonsWrapper.appendChild(headerButtonMenu);
  headerButtonsWrapper.appendChild(headerButtonContact);
};

createHeader();

appendInvitationPageContent(content);
