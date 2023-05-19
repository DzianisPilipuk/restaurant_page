import createDiv from "./createDiv";

const appendContactPageContent = (parent) => {
  const contactWrapper = createDiv("contact-wrapper", "test");

  parent.appendChild(contactWrapper);
};

export default appendContactPageContent;
