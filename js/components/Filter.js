import Component from "../component.js";

export default class Filter extends Component {
    constructor(element, props) {
        super(element, props);
        this._state = {
            value: "",
        };
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="filter-search">Search</label>
            </div>
            <input id="filter-search" class="form-control" type="text" data-element="query" value="${this._state.value}" aria-label="Search">
        </div>
            
        <div class="input-group mb-3">
            <div class="input-group-prepend">
            <label class="input-group-text" for="filter-sort">Sort by</label>
            </div>
            
            <select class="custom-select" id="filter-sort">
                <option selected>Choose...</option>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
            </select>
        </div>
        `;
    }
}