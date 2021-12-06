import { Link } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Col sm={12} md={6} lg={4}>
        <Card className="custom-card border-0 ">
        <Card.Img className="custom-img mx-auto p-3" variant="top" fluid src={image}  alt={name} />
        <Card.Body className='mx-auto'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <b>Ratings : {rating}</b> 
            </Card.Text>
        </Card.Body>
        <Link to={`/singleshow/${id}`}>
            <button  className="m-2 custom-btnn">  Details <i className="fas fa-chevron-circle-right ms-3"></i></button>
        </Link>
        </Card>
        </Col>
  );
};

export default ListItem;
