class TTTController {
  constructor() {
    const tomb = [];
    new Jatekter(tomb);
     this.info=new infoView();
    const kiertekeles = new Kiertekeles(tomb);
    //Ellenőrizzük, hogy van e győzelem

    this.lepes = 0;
    $(window).on("kivalaszt", (event) => {
      //console.log(event.detail);
      let aktElem = event.detail;
      if (this.lepes % 2 === 0) {
        aktElem.setElem("X");
        this.info.setKovetkezoJatekos("O következik");
      } else {
        aktElem.setElem("O");
        this.info.setKovetkezoJatekos("X következik");
      }
      this.lepes++;
      if(kiertekeles.ellenorzes()==="X"){
          this.info.setJatekVege("X nyert");
          this.jatekVege(tomb);
      }else if(kiertekeles.ellenorzes()==="O"){
          this.info.setJatekVege("O nyert");
          this.jatekVege(tomb);
      }else if(this.lepes===9){
        this.info.setJatekVege("Döntetlen");
        this.info.setKovetkezoJatekos("Jaték vége.");
      }
    });
  }
  jatekVege(tomb){
    this.info.setKovetkezoJatekos("Jaték vége.");
     tomb.forEach(element => {
         element.aktiv=false;
         
     });

  }
}
