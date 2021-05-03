import {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Summary extends Component{
    render() {
        return(
         <Fragment>
             <Container fluid={true} className="summaryBanner text-center">
                 <div className="summaryBannerOverlay">
                   <Row>
                       
                       <Col lg={8} md={6} sm={12}>
                           <Row className="sammaryRow">
                               <Col lg={6} md={6} sm={12}>

                                <h2 className="summaryProjectNum">

                                <CountUp start={0} end={100}>
                                    {({countUpRef, start })=>(
                                        <VisibilitySensor onChange={start} delayedCall>
                                          <span ref={countUpRef}/>                                  
       
                                </VisibilitySensor>
                                    )}
                                </CountUp>

                                </h2>
                                <h2 className="summaryProjectTitle">Our Project</h2>
                                <hr className="bg-white w-25"/>
                               </Col>

                               <Col lg={6} md={6} sm={12}>
                                <h2 className="summaryProjectNum">
                                <CountUp start={0} end={100}>
                                    {({countUpRef, start })=>(
                                        <VisibilitySensor onChange={start} delayedCall>
                                          <span ref={countUpRef}/>                                  
       
                                </VisibilitySensor>
                                    )}
                                </CountUp>


                                </h2>
                                <h2 className="summaryProjectTitle">Our Clint</h2>
                                <hr className="bg-white w-25"/>
                               </Col>
                           </Row>
                       </Col>
                       
                      
                       <Col lg={4} md={6} sm={12}>

                         <div className="summaryCarde">
                          <h4 className="SummaryCardTitle">Our Complite Projects</h4>
                          <hr className="bg-green w-25"/>
                       
                          <p> <i class="fas fa-check-circle summaryCardeBullet"></i>  this is our first project</p>
                          <p> <i class="fas fa-check-circle summaryCardeBullet"></i> this is our first project</p>
                          <p> <i class="fas fa-check-circle summaryCardeBullet"></i> this is our first project</p>
                          <p> <i class="fas fa-check-circle summaryCardeBullet"></i> this is our first project</p>
                         
                         </div>
                        
                       </Col>
                      
                   </Row>
                   </div>
             </Container>
         </Fragment>
        )
    }
}

export default Summary;
