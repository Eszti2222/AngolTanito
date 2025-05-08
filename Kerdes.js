import { szenvedoMondatok } from "./angol.js";
export default class Kerdes{
#obj;
#szElem;
#index;
#gombElem;
constructor(obj,szElem,index){
    this.#obj=obj;
    this.#szElem=szElem;
    this.#index=obj.id;
    this.megjelenit();
    this.#gombElem=document.querySelector(".mondat:last-child button")
    this.esemenykezelo();

}
megjelenit(){
        let html= `
        <div class="mondat">
        <p>Mondat: ${this.#obj.mondat}</p>
        <p>Alap: ${this.#obj.alap}</p>
        <p>valasztas: ${this.#obj.valasztas} </p>
        <input type="text">
        <button class="kivalaszt">OK</button>

        </div>
        `
        this.#szElem.insertAdjacentHTML("beforeend",html)
}
esemenykezelo(){
    this.#gombElem.addEventListener("click",()=>{
        window.dispatchEvent(new CustomEvent("kivalaszt",{detail:this.#obj}))
    });
}
}
