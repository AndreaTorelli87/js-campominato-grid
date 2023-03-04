const griglia = document.getElementById("griglia");
const gioca = document.getElementById("gioca");

gioca.addEventListener('click', 
   function () {

      const difficoltaDom = document.getElementById('difficolta').value;
      let difficoltà;

      if (difficoltaDom == "Easy") {
         difficoltà = 100;
         griglia.className = "d-flex flex-wrap griglia-100";
      } else if (difficoltaDom == "Hard") {
         difficoltà = 64;
         griglia.className = "d-flex flex-wrap griglia-64";
      } else if (difficoltaDom == "Impossible") {
         difficoltà = 36;
         griglia.className = "d-flex flex-wrap griglia-36";
      }

      selezione(difficoltà,griglia);
   }
)




function selezione(difficoltà,destinazione) {

      destinazione.innerHTML = "";
      for(let i = 1; i <= difficoltà; i++) {

         const div = document.createElement("div");
         div.addEventListener('click', 
               function () {
                  div.className = "square";
               }
         )
         div.append(i);
         destinazione.append(div);
      }      
}