import Component from "../component.js";

export default class Header extends Component {
    constructor(element, props) {
        super(element, props);
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <h1 class="h5 my-0 mr-md-auto font-weight-normal">
            <a href="#" class="text-decoration-none text-white"><strong>Phones App</strong></a>
        </h1>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-white" href="#">Features</a>
            <a class="p-2 text-white" href="#">Enterprise</a>
            <a class="p-2 text-white" href="#">Support</a>
            <a class="p-2 text-white" href="#">Pricing</a>
        </nav>
        <a class="btn btn-outline-light" href="#">Sign up</a>
        `;
    }
}
