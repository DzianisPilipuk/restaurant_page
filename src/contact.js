import createDiv from "./createDiv";
import addContactInfo from "./addContactInfo";

const appendFormInput = (parent, type, id, labelText) => {
  const inputWrapper = createDiv("input-wrapper");
  parent.appendChild(inputWrapper);

  let input;
  if (type === "textarea") {
    input = document.createElement("textarea");
  }
  if (type !== "textarea") {
    input = document.createElement("input");
    input.setAttribute("type", type);
  }
  input.setAttribute("id", id);
  input.setAttribute("placeholder", labelText);
  inputWrapper.appendChild(input);

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelText;
  inputWrapper.appendChild(label);
};

const appendContactPageContent = (parent) => {
  const contactWrapper = createDiv("contact-wrapper");
  parent.appendChild(contactWrapper);

  const form = createDiv("form");
  contactWrapper.appendChild(form);

  appendFormInput(form, "text", "full_name", "Your name");
  appendFormInput(form, "email", "email", "Your email");
  appendFormInput(form, "textarea", "message", "Message");

  const button = document.createElement("button");
  button.className = "submit-form-button";
  button.setAttribute("type", "submit");
  button.textContent = "Send us message";
  form.appendChild(button);

  addContactInfo(contactWrapper);
};

export default appendContactPageContent;
