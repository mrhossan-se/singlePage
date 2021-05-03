import { Component,Fragment } from "react";
import {Container, Row, Col, Card, Button } from "react-bootstrap";
import recentProjectImg from '../../asset/images/pic_bulboff.gif';
import {Link} from 'react-router-dom';

class RecentProject extends Component{
    render(){
        return(
         <Fragment>
             <Container className="text-center recentProject">
             <h1 className='text-center '>Recent Projects</h1>
               <Row className="">
                   <Col sm={12} md={6} lg={4}>
                      <Card className="recentProjectsCard">
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" height="150px"/>
                         <Card.Body>
                        <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                        <Card.Text className="recentProCardDes">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link to="/projectDetials" className="linkStyle">Details</Link></Button>
                       </Card.Body>
                      </Card>

                   </Col> 
                   <Col sm={12} md={6} lg={4}>
                      <Card className="recentProjectsCard">
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" height="150px"/>
                         <Card.Body>
                        <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                        <Card.Text className="recentProCardDes">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" ><Link to="/projectDetials" className="linkStyle">Details</Link></Button>
                       </Card.Body>
                      </Card>
                   </Col>

                   <Col sm={12} md={6} lg={4}>
                      <Card className="recentProjectsCard">
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" height="150px"/>
                         <Card.Body>
                        <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                        <Card.Text className="recentProCardDes">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link to="/projectDetials" className="linkStyle">Details</Link></Button>
                       
                       </Card.Body>
                      </Card>
                   </Col>


               </Row>
                 
             </Container>
         </Fragment>
        )
    }
}

export default RecentProject;
