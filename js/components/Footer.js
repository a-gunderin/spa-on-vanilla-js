import Component from "../component.js";

export default class Footer extends Component {
    constructor(element, props) {
        super(element, props);
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <p class="mb-1">&copy; 2019-2020 Phones App</p>
        <p class="mb-1">Developed by Gunderin Andrei</p>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#privacy" class="text-dark">Privacy</a></li>
            <li class="list-inline-item"><a href="#terms" class="text-dark">Terms</a></li>
            <li class="list-inline-item"><a href="#support" class="text-dark">Support</a></li>
        </ul>
        `;
    }
}
