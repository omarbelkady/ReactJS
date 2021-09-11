import React from 'react';
import {Row, Col} from "reactstrap";

const Table = someProps => {

    const getTheRow = _ => {
        let chairs = []
        for(var x=0; x<Math.ceil(someProps.chairs /2); x++){
            chairs.push(
                <span
                    key={x}
                    className={someProps.empty ? "Table is Empty" : "Table Is Full"}
                >

                </span>
            )
        }
        return chairs;
    };

    const getRow2 = _ => {
        let chairstwo = []
        for(var x=0; x<Math.floor(someProps.chairs /2); x++){
            chairstwo.push(
                <span
                    key={x}
                    className={someProps.empty ? "Table is Empty" : "Table Is Full"}
                >

                </span>
            )
        }
        return chairstwo;
    };

    return (
        <div className="table-container">
            <Col
                className={someProps.empty ? "table selectable-table" : "table"}
                onClick={_ => {
                    someProps.empty ? 
                    someProps.tableSelection(someProps.name, someProps.id)
                    : console.log("Trying To Select A Full Table")
                }}
            >
                <Row noGutters className="table-row">
                    <Col className="text-center">
                        {getTheRow()}
                    </Col>
                </Row>
                <Row noGutters className="table-row">
                    <Col className="text-center">
                        {getRow2()}
                    </Col>
                </Row>
                <p className="text-center table-name">{someProps.name}</p>
            </Col>
        </div>
    )
}

export default Table;

