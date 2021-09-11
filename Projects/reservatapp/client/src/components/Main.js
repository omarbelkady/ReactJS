import React from 'react';
import {Row, Col, Button} from "reactstrap";
import cafe from "../images/cafe.jpg"
const Main = props => {
    return(
        <div>
            <Row noGutters className="text-center align-items-center pizza-cta">
                <Col>
                    <p className="looking-for-pizza">Look No Further Here To Buy A Pizza
                        <i className="fas fa-pizza-slice pizza-slice"></i>
                    </p>
                    <Button 
                        color="none"
                        className="book-table-btn"
                        onClick={_=> {
                            props.setPage(1)
                        }}
                    >
                        Get A Table Now ASAP
                    </Button>
                </Col>
            </Row>
            <Row noGutters className="text-center big-img-container">
                <Col>
                    <img 
                        src={cafe}
                        alt="cafe"
                        className="big-img"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Main;