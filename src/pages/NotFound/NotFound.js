import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Row className="mt-5 not-found">
                <Col sm>
                <Image className="img" src="https://cdn.dribbble.com/users/722246/screenshots/3066818/media/0f1c45dcf80e887f41b3c0080660fd37.gif" fluid />
                <br />
                <Link to="/home">
                    <button className="m-2 custom-btnn"><i className="fas fa-chevron-circle-left"> Home</i></button>
                </Link>
                </Col>
            </Row>
        </>
    );
};

export default NotFound;