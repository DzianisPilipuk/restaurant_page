import createDiv from "./createDiv";

const appendMenuPageContent = (parent) => {
  const test = createDiv("test", "text content");

  parent.appendChild(test);
};

export default appendMenuPageContent;
