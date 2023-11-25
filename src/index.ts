import "./components/export"
import { dispatch } from "./store/index";
import { getletrass } from "./store/action";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch(await getletrass());
        this.render();
    }

    render() {
        const Formulario = this.ownerDocument.createElement("app-formulario");
        const colores = this.ownerDocument.createElement("app-colores");
    
        this.shadowRoot?.appendChild(Formulario);
        this.shadowRoot?.appendChild(colores);
    }
}

customElements.define('app-container', AppContainer)