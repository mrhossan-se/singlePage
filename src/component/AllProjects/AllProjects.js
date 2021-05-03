import React, { Component,Fragment } from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import recentProjectImg from '../../asset/images/pic_bulboff.gif';

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
            <Container className="text-center recentProject">
           
              <Row className="">
                  <Col sm={12} md={6} lg={4}>
                     <Card className="recentProjectsCard">
                       <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="150px"/>
                        <Card.Body>
                       <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                       <Card.Text className="recentProCardDes">
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                     </Card>
                  </Col> 
                  <Col sm={12} md={6} lg={4}>
                     <Card className="recentProjectsCard">
                       <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="150px"/>
                        <Card.Body>
                       <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                       <Card.Text className="recentProCardDes">
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                     </Card>
                  </Col> 
                  <Col sm={12} md={6} lg={4}>
                     <Card className="recentProjectsCard">
                       <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="150px"/>
                        <Card.Body>
                       <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                       <Card.Text className="recentProCardDes">
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                     </Card>
                  </Col> 
                  <Col sm={12} md={6} lg={4}>
                     <Card className="recentProjectsCard">
                       <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="150px"/>
                        <Card.Body>
                       <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                       <Card.Text className="recentProCardDes">
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                       </Card.Text>
                       <Button variant="primary" className="">Go somewhere</Button>
                      </Card.Body>
                     </Card>
                  </Col>

                  <Col sm={12} md={6} lg={4}>
                     <Card className="recentProjectsCard">
                       <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="150px"/>
                        <Card.Body>
                       <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                       <Card.Text className="recentProCardDes">
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                     </Card>
                  </Col>

                  <Col sm={12} md={6} lg={4}>
                     <Card className="recentProjectsCard">
                       <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="150px"/>
                        <Card.Body>
                       <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                       <Card.Text className="recentProCardDes">
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                     </Card>
                  </Col>


              </Row>
                
            </Container>
        </Fragment>
        )
    }
}
export default AllProjects;