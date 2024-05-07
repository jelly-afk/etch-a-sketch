const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");
const twidth = 600;
let ngrid = prompt("enter the grid size");

if (ngrid && ngrid > 0 && ngrid <= 100){
    for (i = 0;i < ngrid*ngrid;i++){
        let ndiv = document.createElement("div");
        ndiv.classList.add("grid");
        ndiv.style.width = `${twidth/ngrid}px`
        ndiv.style.height = `${twidth / ngrid}px`;
        container.appendChild(ndiv);
        ndiv.addEventListener('mouseover', () => {
            bSetter(ndiv)
        })
        
    }
} else {
    for (i = 0; i < 20 * 20; i++) {
      let ndiv = document.createElement("div");
      ndiv.classList.add("default", "grid");

      container.appendChild(ndiv);
      ndiv.addEventListener("mouseover", () => {
        bSetter(ndiv);
      });
      
    }
}

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".grid").forEach((div) => {
    reset(div);
  });
});

const reset = (div) => {
  div.style.backgroundColor = "";
};

const rColor = () => {
  hex = "0123456789abcdef";
  let rcode = "#";
  for (let i = 0; i < 6; i++) {
    rcode += hex[Math.floor(Math.random() * 15)];
  }
  return rcode;
};

const bSetter = (div) => {
    if (div.style.backgroundColor === "") {
            div.style.backgroundColor = rColor();
            div.style.opacity = "0.1";
    } else {
            if (Number(div.style.opacity) < 1)
              div.style.opacity = `${Number(div.style.opacity) + 0.1}`;
    }
}
