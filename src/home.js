import createDiv from "./createDiv";
import addContactInfo from "./addContactInfo";

const appendInvitationPageContent = (parent) => {
  const invitationPageContent = createDiv("invitation-page-content");
  parent.appendChild(invitationPageContent);

  const entranceImage = createDiv("entrance-image");
  invitationPageContent.appendChild(entranceImage);

  const weDeliver = createDiv("we-deliver");
  invitationPageContent.appendChild(weDeliver);

  const weDeliverContent = document.createElement("p");
  weDeliverContent.textContent = `Indulge in the refined delights of our bakery, where we bring you
    a luxurious experience of handcrafted coffee and exquisite
    pastries delivered right to your doorstep. Discover a world of
    elevated flavors and unparalleled elegance in every bite.`;
  weDeliver.appendChild(weDeliverContent);

  const homeToMenuButton = document.createElement("button");
  homeToMenuButton.textContent = "explore our menu";
  homeToMenuButton.id = "homeToMenuButton";
  invitationPageContent.appendChild(homeToMenuButton);

  addContactInfo(invitationPageContent);

  const map = document.createElement("iframe");
  map.setAttribute(
    "src",
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.148996455816!2d16.9307709!3d52.40397
      58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b394c4ad563%3A0xc3e60cb15a05878d!2zUMO
      zxYJ3aWVqc2thIDExLCA2MS04NTAgUG96bmHFhA!5e0!3m2!1sen!2spl!4v1684611715818!5m2!1sen!2spl`
  );
  map.setAttribute("allowfullscreen", "");
  map.setAttribute("loading", "lazy");
  map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  invitationPageContent.appendChild(map);
};

export default appendInvitationPageContent;
