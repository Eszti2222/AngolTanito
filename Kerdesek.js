import { szenvedoMondatok } from "./angol.js";
import Kerdes from "./Kerdes.js";
export default class Kerdesek{
    #lista;
    #szElem;
    #pontszamElem;
    #pont =0;
    constructor(szElem,pontszamElem){
        this.#lista=szenvedoMondatok;
        this.#szElem=document.querySelector(".tarolo");
        this.#pontszamElem=document.querySelector(".pontSzam");
        this.peldanyosit();
        this.esemeny();
    }
    peldanyosit(){
        for (let index = 2; index < this.#lista.length; index++) {
            new Kerdes(this.#lista[index],this.#szElem)
            
        }
    }

    kever(){
        
    }
    /*esemeny(){
        this.#pontszamElem= 
        

    }*/

}