import React, {Component, Fragment}from "react";

import {Container,Row,Col,Button} from "react-bootstrap";

class TopBanner extends Component {
    render(){
        return(
            <Fragment>
             <Container fluid={true} className="fixedTopBanner p-0">
               <div className="fixedTopBannerOverlay">
                  <Container className="topContent">
                    <Row>
                       <Col className="text-center" lg={12} md={12} sm={12}>
                         <h1 className='topTitle'>WEB DEVELOPER</h1>
                         <h4 className='topSubTitle'>Mobile & Web Application</h4>
                         <Button variant="primary"> More Info </Button>
                       </Col>
                    </Row>
                  </Container>
              </div>
            </Container>
          </Fragment>
        );
    }
}

export default TopBanner;