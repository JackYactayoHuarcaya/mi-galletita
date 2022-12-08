const d = document;

const $pText = d.getElementById("text-frase");
const $imgCorazon = d.getElementById("corazon-img-svg");

const textArray = [
  "Te Amo!",
  "Y",
  "Quiero que sepas",
  "Que a pesar de todo",
  "Siempre estoy ahí",
  "para protegerte",
  "cuidarte",
  "y",
  "amarte mi galletita",
];
let numero = textArray.length
let clickCorazon = () => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".data *")) {
      $pText.style.animation = "animeText .6s infinite alternate";
      $imgCorazon.style.animation = "animeCorazon .6s infinite alternate";
    }
    let funcionRecorrerArray = () => {
      textArray.forEach((el, i) => {
         setTimeout(() => {
          $pText.textContent = el;
          if(i==numero-1){
            setTimeout(() => {
                window.location.reload();
            }, 3200);
        }
        }, 1400 * i + 1);
        
      });
    };
    funcionRecorrerArray();
  });
};

d.addEventListener("DOMContentLoaded", () => {
  clickCorazon();
});
