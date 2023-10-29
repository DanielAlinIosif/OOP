class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  // getter
  // forma afisata la consola :
  //Masina[marca=VOLVO, model=XC-60, culoare=rosu, kilometraj=234000]

  get proprietati() {
    return "Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj]";
  }
}


export default Masina;