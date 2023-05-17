const content = document.getElementById("content");

const createDiv = (className, textContent) => {
  const newElement = document.createElement("div");
  newElement.className = className;
  newElement.textContent = textContent;
  return newElement;
};

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

const createInvitationPageContent = () => {
  const invitationPageContent = createDiv("invitation-page-content");

  content.appendChild(invitationPageContent);

  const weDeliver = createDiv("we-deliver");

  invitationPageContent.appendChild(weDeliver);

  const weDeliverContent = document.createElement("p");
  weDeliverContent.textContent = `Indulge in the refined delights of our bakery, where we bring you
  a luxurious experience of handcrafted coffee and exquisite
  pastries delivered right to your doorstep. Discover a world of
  elevated flavors and unparalleled elegance in every bite.`;

  weDeliver.appendChild(weDeliverContent);

  const placeOrderButton = document.createElement("button");
  placeOrderButton.textContent = "Place your order";

  invitationPageContent.appendChild(placeOrderButton);

  const telephone = createDiv("telephone");

  invitationPageContent.appendChild(telephone);

  const numberWrapper = createDiv("number-wrapper", "555-555-555");

  telephone.appendChild(numberWrapper);

  const workingHours = createDiv(
    "working-hours",
    "MON - FRI 7am - 5pm SAT 10am - 3pm"
  );

  invitationPageContent.appendChild(workingHours);

  const location = createDiv("location", "Półwiejska 11 61-850 Poznań");

  invitationPageContent.appendChild(location);
};

createInvitationPageContent();
