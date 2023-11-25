import { addObserver, appState } from "../../store/index";
import style from "./color.css";
import { letras } from "../../types/letras";

export class Colores extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        appState.letras.forEach((letras: any)=>{
            const pcontenedor = this.ownerDocument.createElement("article");

            const pname = this.ownerDocument.createElement("h3");
            pname.textContent = letras.nombre;

            const pletras = this.ownerDocument.createElement("h4");
            pletras.textContent = letras.letra;

            const pcolores = this.ownerDocument.createElement("h4");
            pcolores.textContent = letras.colores;

            pcontenedor?.appendChild(pname);
            pcontenedor?.appendChild(pletras);
            pcontenedor?.appendChild(pcolores);

            this.shadowRoot?.appendChild(pcontenedor);
        })

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = style;
    this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("app-colores", Colores)
