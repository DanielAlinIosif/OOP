import Masina from "./masina.js";
import MasinaDecurse from "./masina.decurse.js";

// ex 1
function main() {
  const masina1 = new Masina("Volvo", "XC-60", "negru", "234000");
  const masina2 = new Masina("Mazda", "CX-5", "rosu", "112000");
  console.log(masina1);
  console.log(masina2);

  // apelare proprietati
  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
}

main();
console.log("-------");

//ex 2
function mainMasiniCurse() {
  const masinaDeCurse1 = new MasinaDecurse(
    "Toyota",
    "Turbo",
    "Rosu",
    "100000",
    2
  );
  const masinaDeCurse2 = new MasinaDecurse(
    "Ferrari",
    "Turbo",
    "negru",
    "111000",
    -4
  );

  console.log(masinaDeCurse1);
  console.log(masinaDeCurse2);
  masinaDeCurse1.pozitiaInCampionat();
  masinaDeCurse2.participaLaCampionat();
}

mainMasiniCurse();