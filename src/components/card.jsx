import React from 'react'
import { Col, Card, Row, Button} from 'react-bootstrap';
import Marojejy from '../images/marojejy.png'


function card() {
  return (
    <div className='container cardBody'>
        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 8 }).map((_, idx) => (
    <Col>
      <Card>
      <div className='badgeCard' >
        <a href="ok">
<div class="badges"> <br />
    <p>
        <span class="firstLine">Save</span><br />
        <span class="secondLine">10%</span> <br />
        <span class="thirdLine">Discount</span> <br />
    </p>
</div>
</a>
      </div>

        <Card.Img variant="top" src={Marojejy} />
        <Card.Body>
        
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Go somewhere</Button>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default card

//https://react-bootstrap.github.io/components/cards/