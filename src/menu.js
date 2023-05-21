import createDiv from "./createDiv";

const appendMenuPosition = (parent, name, description) => {
  const menuPositionWrapper = createDiv("menu-position-wrapper");

  const menuPositionName = createDiv("menu-position-name", name);
  menuPositionWrapper.appendChild(menuPositionName);

  const menuPositionDescription = createDiv(
    "menu-position-description",
    description
  );
  menuPositionWrapper.appendChild(menuPositionDescription);

  parent.appendChild(menuPositionWrapper);
};

const menuPositions = [
  {
    name: "Croissants",
    description: `Flaky and buttery pastries, available in classic, 
    chocolate, and almond flavors.`,
  },
  {
    name: "Artisanal Bread",
    description: `A variety of freshly baked loaves, from rustic 
    sourdough to crusty baguettes.`,
  },
  {
    name: "Tarts",
    description: `A delightful selection of fruit-filled tarts with buttery 
    crusts, such as apple, berry, and lemon.`,
  },
  {
    name: "Handcrafted Chocolates",
    description: `Luxurious handmade chocolates in assorted flavors, 
    perfect for indulgence or gifting.`,
  },
  {
    name: "Cookies",
    description: `Classic cookies like chocolate chip, oatmeal raisin, 
    and shortbread, baked to perfection.`,
  },
  {
    name: "Croissant Sandwiches",
    description: `Savory croissant sandwiches with gourmet fillings, 
    like smoked salmon and dill cream cheese or ham and Swiss.`,
  },
  {
    name: "Specialty Coffee",
    description: `A range of expertly brewed coffee drinks, including 
    espresso, cappuccino, and seasonal specialties.`,
  },
  {
    name: "Gluten-Free Options",
    description: `A selection of gluten-free pastries and bread for those 
    with dietary restrictions.`,
  },
];

const appendDividingLine = (parent) => {
  const dividingline = createDiv("dividing-line");
  parent.appendChild(dividingline);
};

const appendMenuPageContent = (parent) => {
  const menuWrapper = createDiv("menu-wrapper");
  parent.appendChild(menuWrapper);
  let isFirstPosition = true;

  for (let i = 0; i < menuPositions.length; i += 1) {
    if (!isFirstPosition) appendDividingLine(menuWrapper);
    appendMenuPosition(
      menuWrapper,
      menuPositions[i].name,
      menuPositions[i].description
    );
    isFirstPosition = false;
  }
};

export default appendMenuPageContent;
