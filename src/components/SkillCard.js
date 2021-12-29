import React from 'react'
import { ListGroup, ListGroupItem, Card, Container } from 'react-bootstrap';


function SkillCard(props) {
    return (
        <div>
            <Container>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ props.image } height={150} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.item1}</ListGroupItem>
                <ListGroupItem>{props.item2}</ListGroupItem>
                <ListGroupItem>{props.item3}</ListGroupItem>
                <ListGroupItem>{props.item4}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">{props.link1}</Card.Link>
                <Card.Link href="#">{props.link2}</Card.Link>
            </Card.Body>
            </Card>
            </Container>
        </div>
    )
}

export default SkillCard
