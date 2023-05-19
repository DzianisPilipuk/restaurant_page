import createDiv from "./createDiv";
import addContactInfo from "./addContactInfo";

const appendInvitationPageContent = (parent) => {
  const invitationPageContent = createDiv("invitation-page-content");

  parent.appendChild(invitationPageContent);

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

  addContactInfo(invitationPageContent);
};

export default appendInvitationPageContent;
