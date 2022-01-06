/*megjelenít egyetlen elemet*/

class Elem {
    constructor(szuloElem){
        this.node=szuloElem;
        this.elem=szuloElem.append("<div><p></p></div>");
        this.elem=szuloElem.children("div");
        this.pElem=this.elem.children("p");


    }
    setElem(ertek){
        this.pElem.html(ertek);

    }
}

class Jatekter {
    constructor(){
        const szuloElem=$("article");
       
        //elem.setElem("x");
        for (let index = 0; index < 9; index++) {
            const elem=new Elem(szuloElem);
            
        }

    }
}