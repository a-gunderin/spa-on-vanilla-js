import Component from "./component.js";
import Header from "./components/Header.js";
import PhonesCatalog from "./components/PhonesCatalog.js";
import Filter from "./components/Filter.js";
import PhoneViewer from "./components/PhoneViewer.js";
import ShoppingCart from "./components/ShoppingCart.js";
import PhonesService from "./PhonesService.js";
import Footer from "./components/Footer.js";

export default class PhonesPage extends Component {
    constructor(element, props) {
        super(element, props);

        this._state = {
            isLoaded: false,
            phones: [],
            selectedPhone: null,
            items: [],
        };

        this.setSelectedPhone = this.setSelectedPhone.bind(this);
        this.clearSelectedPhone = this.clearSelectedPhone.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this._loadPhones();

        this._render();
    }

    async _loadPhones() {
        const phones = await PhonesService.getAll()
            .catch(() => []);

        this._setState({
            phones: phones,
            isLoaded: true,
        });

    }

    async setSelectedPhone(phoneId) {
        const phoneDetails = await PhonesService.getById(phoneId);
        this._setState({
            selectedPhone: phoneDetails,
        });
    }

    clearSelectedPhone() {
        this._setState({selectedPhone: null});
    }

    addItem(phoneId) {
        this._setState({
            items: [...this._state.items, phoneId]
        });
    }

    removeItem(itemToRemove) {
        this._setState({
            items: this._state.items.filter(
                item => item !== itemToRemove
            ),
        });
    }

    _render() {
        this._element.innerHTML = `
        <header data-component="Header" 
        class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-white shadow-sm">
        </header>
            
        <main class="container-fluid">

            <div class="row">

              <!--Sidebar-->
              <div class="col-xl-3">
                <form data-component="Filter"></form>
                <div data-component="ShoppingCart"></div>
              </div>
        
              <!--Main content-->
              <div class="col-xl-9">
              ${this._state.selectedPhone ?
        `<div data-component="PhoneViewer" class="card mb-3"></div>` :
        `${this._state.isLoaded ? 
            `<div data-component="PhonesCatalog" class="row row-cols-1 row-cols-sm-2 row-cols-md-3"></div>` : 
            `<p>Loading ...</p>`}`}</div>
              </div>
        
        </main>
        
        <footer data-component="Footer" 
        class="my-5 text-muted text-center text-small"></footer>
        `;

        this._initComponent(Header);
        this._initComponent(PhonesCatalog, {
            phones: this._state.phones,
            onPhoneSelected: this.setSelectedPhone,
            onAdd: this.addItem,
        });
        this._initComponent(PhoneViewer, {
            phone: this._state.selectedPhone,
            onBack: this.clearSelectedPhone,
            onAdd: this.addItem,
        });
        this._initComponent(ShoppingCart, {
            items: this._state.items,
            onRemove: this.removeItem,
        });
        this._initComponent(Filter);
        this._initComponent(Footer);
    }
}