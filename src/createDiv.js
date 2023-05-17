const createDiv = (className, textContent) => {
  const newElement = document.createElement("div");
  newElement.className = className;
  newElement.textContent = textContent;
  return newElement;
};

export default createDiv;
