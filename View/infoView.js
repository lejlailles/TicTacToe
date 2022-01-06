class infoView{
    constructor(){
        this.jatekVegeElem=$(".jatekvege");
        this.kovetkezoJatekosElem=$(".kovetkezoJatekos");
    }

    setJatekVege(ertek){
        this.jatekVegeElem.html(ertek);

    }

    setKovetkezoJatekos(ertek){
        this.kovetkezoJatekosElem.html(ertek);
    }
    
}