const griglia = document.getElementById("griglia");
const gioca = document.getElementById("gioca");

gioca.addEventListener('click', 
   function () {

      
      for(let i = 1; i <= 100; i++) {

         const div = document.createElement("div");
         div.addEventListener('click', 
               function () {
                  div.className = "fizz";
               }
         )
         div.append(i);
         griglia.append(div);
      }
   }
)