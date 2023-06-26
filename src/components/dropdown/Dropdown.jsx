import './dropdown.css'

function Dropdown() {

    return(
        <div id="dropdown">
            <div className="country-select-box">
                <select className="country-picker" id="CoronaUpdateByCountry">
                    <option value="AF">
                        Afganistán
                    </option>
                    <option value="AL">
                        Albania
                    </option>
                </select>
            </div>
        </div>
    )
}

export default Dropdown;