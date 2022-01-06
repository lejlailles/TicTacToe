/*megjelenít egyetlen elemet*/

class Elem {
  constructor(szuloElem) {
    this.node = szuloElem;
    this.elem = szuloElem.append("<div><p></p></div>");
    this.elem = this.node.children("div:last");
    this.aktiv = true;
    this.ertek = "$";
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
      if (this.aktiv) {
        this.kattintasTrigger();
        this.aktiv = false;
      }
    });
  }
  setElem(ertek) {
    this.ertek = ertek;
    this.pElem.html(ertek);
  }
  kattintasTrigger() {
    let esemeny = new CustomEvent("kivalaszt", { detail: this });
    window.dispatchEvent(esemeny);
  }
}

class Jatekter {
  constructor(tomb) {
    const szuloElem = $("article");

    //elem.setElem("x");
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem);
      tomb.push(elem);
    }
  }
}
