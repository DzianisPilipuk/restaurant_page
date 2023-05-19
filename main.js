(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("div");return n.className=e,n.textContent=t,n},t=t=>{const n=e("telephone");t.appendChild(n);const a=e("number-wrapper","555-555-555");n.appendChild(a);const o=e("working-hours","MON - FRI 7am - 5pm SAT 10am - 3pm");t.appendChild(o);const i=e("location","Półwiejska 11 61-850 Poznań");t.appendChild(i)},n=n=>{const a=e("invitation-page-content");n.appendChild(a);const o=e("we-deliver");a.appendChild(o);const i=document.createElement("p");i.textContent="Indulge in the refined delights of our bakery, where we bring you\n    a luxurious experience of handcrafted coffee and exquisite\n    pastries delivered right to your doorstep. Discover a world of\n    elevated flavors and unparalleled elegance in every bite.",o.appendChild(i);const r=document.createElement("button");r.textContent="Place your order",a.appendChild(r),t(a)},a=(t,n,a)=>{const o=e("menu-position-wrapper"),i=e("menu-position-name",n);o.appendChild(i);const r=e("menu-position-description",a);o.appendChild(r),t.appendChild(o)},o=[{name:"Croissants",description:"Flaky and buttery pastries, available in classic, \n    chocolate, and almond flavors."},{name:"Artisanal Bread",description:"A variety of freshly baked loaves, from rustic \n    sourdough to crusty baguettes."},{name:"Tarts",description:"A delightful selection of fruit-filled tarts with buttery \n    crusts, such as apple, berry, and lemon."},{name:"Handcrafted Chocolates",description:"Luxurious handmade chocolates in assorted flavors, \n    perfect for indulgence or gifting."},{name:"Cookies",description:"Classic cookies like chocolate chip, oatmeal raisin, \n    and shortbread, baked to perfection."},{name:"Croissant Sandwiches",description:"Savory croissant sandwiches with gourmet fillings, \n    like smoked salmon and dill cream cheese or ham and Swiss."},{name:"Specialty Coffee",description:"A range of expertly brewed coffee drinks, including \n    espresso, cappuccino, and seasonal specialties."},{name:"Gluten-Free Options",description:"A selection of gluten-free pastries and bread for those \n    with dietary restrictions."}],i=(t,n,a,o)=>{const i=e("input-wrapper");let r;t.appendChild(i),"textarea"===n&&(r=document.createElement("textarea")),"textarea"!==n&&(r=document.createElement("input"),r.setAttribute("type",n)),r.setAttribute("id",a),r.setAttribute("palceholder",o),i.appendChild(r);const d=document.createElement("label");d.setAttribute("for",a),d.textContent=o,i.appendChild(d)},r=document.getElementById("content"),d=e=>{e.lastChild&&e.removeChild(e.lastChild)};(()=>{const s=e("header");r.appendChild(s);const l=e("logo","Heavenly Bites");s.appendChild(l);const c=e("header-buttons-wrapper");s.appendChild(c);const p=e("header-button","Home");p.addEventListener("click",(()=>{d(r),n(r)}));const u=e("header-button","Menu");u.addEventListener("click",(()=>{d(r),(t=>{const n=e("menu-wrapper");t.appendChild(n);for(let e=0;e<o.length;e+=1)a(n,o[e].name,o[e].description)})(r)}));const h=e("header-button","Contact");h.addEventListener("click",(()=>{d(r),(n=>{const a=e("contact-wrapper");n.appendChild(a);const o=e("form");a.appendChild(o),i(o,"text","full_name","Your name"),i(o,"email","email","Your email"),i(o,"textarea","message","Message"),t(a)})(r)})),c.appendChild(p),c.appendChild(u),c.appendChild(h)})(),n(r)})();