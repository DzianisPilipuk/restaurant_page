import createDiv from "./createDiv";
import createInvitationPageContent from "./home";

const content = document.getElementById("content");

const createHeader = () => {
  const header = createDiv("header");

  content.appendChild(header);

  const logo = createDiv("logo", "Heavenly Bites");

  header.appendChild(logo);

  const headerButtonsWrapper = createDiv("header-buttons-wrapper");

  header.appendChild(headerButtonsWrapper);

  const headerButtonHome = createDiv("header-button", "Home");
  const headerButtonMenu = createDiv("header-button", "Menu");
  const headerButtonContact = createDiv("header-button", "Contact");

  headerButtonsWrapper.appendChild(headerButtonHome);
  headerButtonsWrapper.appendChild(headerButtonMenu);
  headerButtonsWrapper.appendChild(headerButtonContact);
};

createHeader();

createInvitationPageContent(content);
