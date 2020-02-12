import Component from "../component.js";

export default class ShoppingCart extends Component {
    constructor(element, props) {
        super(element, props);
        this.on("click", "remove-button", ({delegateTarget: removeButton}) => {
            this._props.onRemove(removeButton.dataset.item);
        });
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        ${this._props.items.length ? `<h5 class="pt-2 pb-1 text-secondary">Shopping Cart</h5>` : ``}
        <ul class="list-group mb-4">
            ${this._props.items.map(item => `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item}
                    <button
                    type="button"
                    class="close"
                    aria-label="Remove"
                    data-element="remove-button" 
                    data-item="${item}">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </li>
            `).join("")}
        </ul>
        `;
    }
}