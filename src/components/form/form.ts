import { dispatch } from "../../store/index";
import { saveletras } from "../../store/action";
import { letras } from "../../types/letras";
import style from "./form.css";


const userInputs: letras = {
    nombre: "",
    colores: "",
    letra: "",
}

export class Formulario extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lnombre = this.ownerDocument.createElement('label');
        lnombre.textContent= "Nombre"

        const lColores = this.ownerDocument.createElement('label');
        lColores.textContent= "Colores"
        const nombre = this.ownerDocument.createElement('input');
        nombre.addEventListener("change", (e: any) => {
            userInputs.nombre = e.target.value;
          });

        const Colores = this.ownerDocument.createElement('input');
        Colores.type = "text";
        Colores.addEventListener("change", (e: any) => {
            userInputs.colores = e.target.value;
          });
          const lletra = this.ownerDocument.createElement('label');
          lletra.textContent= "letra"
          const letra = this.ownerDocument.createElement('input');
          letra.addEventListener("change", (e: any) => {
              userInputs.letra = e.target.value;
            });

        const boton = this.ownerDocument.createElement('button');
        boton.textContent= "Guardar"
        boton.addEventListener("click", async () => {
            console.log(userInputs)
            dispatch(await saveletras(userInputs))

          });
        this.shadowRoot?.appendChild( lnombre );
        this.shadowRoot?.appendChild( nombre );
        this.shadowRoot?.appendChild( lColores );
        this.shadowRoot?.appendChild( Colores );
        this.shadowRoot?.appendChild(lletra);
        this.shadowRoot?.appendChild(letra);
        this.shadowRoot?.appendChild( boton );
        

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = style;
    this.shadowRoot?.appendChild(css);

    }
}

customElements.define('app-formulario', Formulario)
