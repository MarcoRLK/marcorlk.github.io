import React from 'react'
import { ListGroup, ListGroupItem, Card, Container } from 'react-bootstrap';


function SkillCard() {
    return (
        <div>
            <Container>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.oficinadanet.com.br/imagens/post/24973/pc-gamer.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Container>
        </div>
    )
}

export default SkillCard
