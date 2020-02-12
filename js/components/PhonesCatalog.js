import Component from "../component.js";

export default class PhonesCatalog extends Component {
    constructor(element, props) {
        super(element, props);
        this._initEventListeners();
        this._render();
    }

    _initEventListeners() {
        this.on(
            "click",
            "details-link",
            ({delegateTarget: detailsLink}) => {
                this._props.onPhoneSelected(detailsLink.dataset.phoneId);
            }
        );

        this.on(
            "click",
            "add-button",
            ({delegateTarget: addButton}) => {
                this._props.onAdd(addButton.dataset.phoneId);
            }
        );
    }

    _render() {
        this._element.innerHTML = `
            ${this._props.phones.map(phone => `
                <div class="col mb-4">
                    <div class="card h-100">
                        <a class="text-center" href="#!/phones/${phone["id"]}" data-element="details-link" data-phone-id="${phone["id"]}">
                            <img alt="${phone["name"]}" src="${phone["imageUrl"]}" class="card-img-top w-50 pt-3">
                        </a>

                        <div class="card-body">
                            <h6 class="card-title">
                                <a href="#!/phones/${phone["id"]}" data-element="details-link" data-phone-id="${phone["id"]}">
                                    ${phone["name"]}
                                </a>
                            </h6>
                            <p class="card-text">${phone["snippet"]}</p>
                        </div>
                        
                        <button data-phone-id="${phone["name"]}" data-element="add-button" class="btn btn-success w-50 mb-3 align-self-center">Add</button>
                        
                    </div>
                </div>
            `).join("")}
        `;
    }
}