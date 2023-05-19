import createDiv from "./createDiv";

const addContactInfo = (parent) => {
  const telephone = createDiv("telephone");
  parent.appendChild(telephone);

  const numberWrapper = createDiv("number-wrapper", "555-555-555");

  telephone.appendChild(numberWrapper);

  const workingHours = createDiv(
    "working-hours",
    "MON - FRI 7am - 5pm SAT 10am - 3pm"
  );
  parent.appendChild(workingHours);

  const location = createDiv("location", "Półwiejska 11 61-850 Poznań");
  parent.appendChild(location);
};

export default addContactInfo;
