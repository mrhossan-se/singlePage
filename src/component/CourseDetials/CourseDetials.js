import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';


 class CourseDetials extends Component {
    render() {
        return (
            <Fragment>
             <Container fluid={true} className="courseTopPage p-0">
               <div className="courseTopPageOverlay">
                  <Container className="courseDetialsContent">
                    <Row>
                       <Col lg={12} md={12} sm={12} className="courseDetialsCol">
                           <h2 className="coursedetialsTitle">this is our course details</h2>
                           <h5 className="courseDetialsSubTitle">this mt course plan</h5>
                           <h5  className="courseDetialsSubTitle">this mt course more plan</h5>
                       </Col>
                    </Row>
                   
                  </Container>
              </div>
            </Container>
            <Container className="mt-5">
              <Row>
                 <Col lg={6} md={6} sm={12}>
                    <h3 className="courseList">here is some list</h3>
                    <ul className="courseUlList">
                        <li>this is our course details</li>
                        <li>this is our course details</li>
                        <li>this is our course details</li>
                        <li>this is our course details</li>
                        <li>this is our course details</li>
                        <li>this is our course details</li>
                        <li>this is our course details</li>
                        <li>this is our course details</li>   
                        <li>this is our course details</li>
                        <li>this is our course details</li>
                                           
                  </ul>
                      
                      <Button>More Info</Button> 
                        
                 </Col>
                 <Col className="text-center" lg={6} md={6} sm={12}>
                        
                 <Player>
                   <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                   <BigPlayButton position="center" />
                 </Player>  
                        
                 </Col>
             </Row>
            </Container>
          </Fragment>
        )
    }
}
export default CourseDetials;