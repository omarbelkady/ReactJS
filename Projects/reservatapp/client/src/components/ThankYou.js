import React from 'react';
import {Row, Col} from "reactstrap";

const ThankYou = _ => {
    return(
        <div>
           <Row noGutters className="text-center">
                <Col>
                    <p className="thanks-header">
                        Thank You!
                    </p>
                    <i className="fas fa-pizza-slice thank you-pizza"></i>

                    <p className="thanks-subtext">
                        You will receive an email from us shortly about your reservation
                    </p>
                </Col>
           </Row>
        </div>
    );
};

export default ThankYou;