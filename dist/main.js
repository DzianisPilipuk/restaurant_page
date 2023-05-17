(() => {
  "use strict";
  const e = (e, n) => {
      const t = document.createElement("div");
      return (t.className = e), (t.textContent = n), t;
    },
    n = document.getElementById("content");
  (() => {
    const t = e("header");
    n.appendChild(t);
    const o = e("logo", "Heavenly Bites");
    t.appendChild(o);
    const d = e("header-buttons-wrapper");
    t.appendChild(d);
    const a = e("header-button", "Home"),
      p = e("header-button", "Menu"),
      r = e("header-button", "Contact");
    d.appendChild(a), d.appendChild(p), d.appendChild(r);
  })(),
    ((n) => {
      const t = e("invitation-page-content");
      n.appendChild(t);
      const o = e("we-deliver");
      t.appendChild(o);
      const d = document.createElement("p");
      (d.textContent =
        "Indulge in the refined delights of our bakery, where we bring you\n    a luxurious experience of handcrafted coffee and exquisite\n    pastries delivered right to your doorstep. Discover a world of\n    elevated flavors and unparalleled elegance in every bite."),
        o.appendChild(d);
      const a = document.createElement("button");
      (a.textContent = "Place your order"), t.appendChild(a);
      const p = e("telephone");
      t.appendChild(p);
      const r = e("number-wrapper", "555-555-555");
      p.appendChild(r);
      const i = e("working-hours", "MON - FRI 7am - 5pm SAT 10am - 3pm");
      t.appendChild(i);
      const l = e("location", "Półwiejska 11 61-850 Poznań");
      t.appendChild(l);
    })(n);
})();
