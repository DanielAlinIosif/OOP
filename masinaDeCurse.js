import Masina from "masina.js";

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
    this.pozitiaInCampionat = pozitiaInCampionat;
  }

  participaLaCampionat() {
    if (this.pozitiaInCampionat > 0) {
      console.log("Am castigat locul ${this.pozitiaInCampionat}");
    } else {
      console.log("Nu am castigat niciun premiu");
    }
  }
}

export default MasinaDeCurse;
