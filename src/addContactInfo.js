import createDiv from "./createDiv";

const addContactInfo = (parent) => {
  const numberWrapper = createDiv("number-wrapper");
  parent.appendChild(numberWrapper);

  const phoneIcon = document.createElement("img");
  phoneIcon.setAttribute("src", "./assets/phone-solid.svg");
  phoneIcon.setAttribute("alt", "phone");
  numberWrapper.appendChild(phoneIcon);

  const phoneNumber = createDiv("phone-number", "555-555-555");
  numberWrapper.appendChild(phoneNumber);

  const workingHoursWrapper = createDiv("working-hours-wrapper");
  parent.appendChild(workingHoursWrapper);

  const workingHoursMonFri = createDiv(
    "working-hours-wrapper-mon-fri",
    "MON - FRI 7am - 5pm"
  );
  workingHoursWrapper.appendChild(workingHoursMonFri);

  const workingHoursSat = createDiv(
    "working-hours-wrapper-sat",
    "SAT 10am - 3pm"
  );
  workingHoursWrapper.appendChild(workingHoursSat);

  const locationWrapper = createDiv("location-wrapper");
  parent.appendChild(locationWrapper);

  const locationIcon = document.createElement("img");
  locationIcon.setAttribute("src", "./assets/location-dot-solid.svg");
  locationIcon.setAttribute("alt", "location");
  locationWrapper.appendChild(locationIcon);

  const location = createDiv("location", "Półwiejska 11 61-850 Poznań");
  locationWrapper.appendChild(location);
};

export default addContactInfo;
