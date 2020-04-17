

import React, { useState } from "react";
import employees from "../../employees.json";
import Card from "../Card"
import Col from "../Col"






function sortedCards(selection) {
    const assortedEmployees = []

    for (let index = 0; index < employees.length; index++) {
        if (employees[index].manager === selection) {
            assortedEmployees.push(employees[index])
        }
        console.log("random");


    }
    console.log(assortedEmployees);


    return assortedEmployees;
}



function FilterDropdown() {

    const options = ["", "Steffanie", "Justin", "Dale"]
    const [selection, setSelection] = useState("");




    return (
        <div>
            <label htmlFor='options'>
                Filter By Manager
            <select
                    id='options'
                    value={selection}
                    onChange={(e) => setSelection(e.target.value)}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>

            {selection === "Steffanie" && (
                <div>
                    {sortedCards(selection).map(employees => (
                        <Col size="md-8">
                            <Card
                                key={employees.name}
                                name={employees.name}
                                title={employees.title}
                                manager={employees.manager}
                                yearhired={employees.yearhired}
                            />
                        </Col>

                    ))}










                </div>
            )}
            {selection === "Justin" && <div><div>
                {sortedCards(selection).map(employees => (
                    <Card
                        name={employees.name}
                        title={employees.title}
                        manager={employees.manager}
                        yearhired={employees.yearhired}
                    />

                ))}










            </div></div>}
            {selection === "Dale" && <div><div>
                {sortedCards(selection).map(employees => (
                    <Card
                        name={employees.name}
                        title={employees.title}
                        manager={employees.manager}
                        yearhired={employees.yearhired}
                    />

                ))}










            </div></div>}
        </div>
    );


}


export default FilterDropdown;