import Component from "../component.js";

export default class PhoneViewer extends Component {
    constructor(element, props) {
        super(element, props);

        this._state = {
            currentImage: null,
        };

        this.on("click", "back-button", this._props.onBack);
        this.on("click", "add-button", () => { this._props.onAdd(this._props.phone.name); });
        this.on("click", "phone-thumbs", (event) => {
            this._setState({
                currentImage: event.target.getAttribute("src")
            });
        });
        this._render();
    }

    _render() {
        const {phone} = this._props;
        const {currentImage} = this._state;

        if (!this._props.phone) {
            return;
        }

        this._element.innerHTML = `
        <div class="row no-gutters">
            <div class="col-md-auto">
        
                <div class="d-flex flex-wrap my-2 mx-4">
                    <button class="btn btn-secondary mr-2" data-element="back-button">Back</button>
                    <button class="btn btn-success" data-element="add-button">Add to basket</button>
                </div>
        
                ${ currentImage ? 
                `<img class="p-4 mw-100" src="${currentImage}" alt="${phone.name}">` :
                `<img class="p-4 mw-100" src="${phone.images[0]}" alt="${phone.name}">`}
        
                <div class="d-flex flex-wrap px-2 mb-3 mx-auto justify-content-between" style="max-width: 400px;">
                ${phone.images.map(imageSrc => `
                    <img class="mb-1" style="max-width: 100px; cursor: pointer;" data-element="phone-thumbs" src="${imageSrc}" alt="${phone.name}">
                `).join("")}
                </div>
        
            </div>
        
        <div class="col">
            <h1 class="card-title h2 px-3 mt-2">${phone.name}</h1>
            <p class="card-text p-3">${phone.description}</p>
            <table class="table table-striped table-bordered table-hover mb-0">
                <tbody>
                    <tr>
                        <th>Additional features</th>
                        <td>${phone.additionalFeatures}</td>
                    </tr>
                    <tr>
                        <th>Android</th>
                        <td><strong>OS:</strong> ${phone.android.os} <br>
                            <strong>UI:</strong> ${phone.android.ui}
                        </td>
                    </tr>
                    <tr>
                        <th>Availability</th>
                        <td>${phone.android.availability}</td>
                    </tr>
                    <tr>
                        <th>Battery</th>
                        <td><strong>Standby Time:</strong> ${phone.battery.standbyTime} <br> 
                            <strong>Talk Time:</strong> ${phone.battery.talkTime} <br>
                            <strong>Type:</strong> ${phone.battery.type} 
                        </td>
                    </tr>
                    <tr>
                        <th>Camera</th>
                        <td><strong>Primary:</strong> ${phone.camera.primary}<br>
                            <strong>Features:</strong> ${phone.camera.features}
                        </td>
                    </tr>
                    <tr>
                        <th>Connectivity</th>
                        <td><strong>Bluetooth:</strong> ${phone.connectivity.bluetooth} <br>
                            <strong>Cell:</strong> ${phone.connectivity.cell} <br>
                            <strong>GPS:</strong> ${phone.connectivity.gps} <br>
                            <strong>Infrared:</strong> ${phone.connectivity.infrared} <br>
                            <strong>Wi-Fi:</strong> ${phone.connectivity.wifi}
                        </td>
                    </tr>
                    <tr>
                        <th>Display</th>
                        <td><strong>Screen Resolution:</strong> ${phone.display.screenResolution} <br>
                            <strong>Screen Size:</strong> ${phone.display.screenSize} <br>
                            <strong>Touch Screen:</strong> ${phone.display.touchScreen}
                        </td>
                    </tr>
                    <tr>
                        <th>Hardware</th>
                        <td><strong>Accelerometer:</strong> ${phone.hardware.accelerometer} <br>
                            <strong>AudioJack:</strong> ${phone.hardware.audioJack} <br>
                            <strong>CPU:</strong> ${phone.hardware.cpu} <br>
                            <strong>FM Radio:</strong> ${phone.hardware.fmRadio} <br>
                            <strong>Physical Keyboard:</strong> ${phone.hardware.physicalKeyboard} <br>
                            <strong>USB:</strong> ${phone.hardware.usb}
                        </td>
                    </tr>
                    <tr>
                        <th>Size and Weight</th>
                        <td><strong>Dimensions:</strong><br> 
                            ${phone.sizeAndWeight.dimensions.map(dimension => `${dimension}<br>`).join("")}
                            <strong>Weight:</strong> ${phone.sizeAndWeight.weight}
                        </td>
                    </tr>
                    <tr>
                        <th>Storage</th>
                        <td><strong>Flash:</strong> ${phone.storage.flash} <br>
                            <strong>RAM:</strong> ${phone.storage.ram}
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
            
        </div>
        `;
    }
}