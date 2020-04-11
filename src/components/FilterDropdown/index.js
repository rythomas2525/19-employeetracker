

import React, { Component } from "react";
import employees from "../../employees.json";


class FilterDropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: ""
        };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }


    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });

    }

    render() {
        return (<div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Filter Managers</button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange={this.handleDropdownChange}>

                <option className="dropdown-item" value="Justin">Justin</option>
                <option className="dropdown-item" value="Dale">Dale</option>
                <option className="dropdown-item" value="Steffanie" >Steffanie</option>

            </div>

            <div>Selected value is : {this.state.selectValue} </div>
        </div>
        )

    }
}

export default FilterDropdown;