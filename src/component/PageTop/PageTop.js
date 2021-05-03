import{Fragment, Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class PageTop extends Component{
    render(){
        return(
            <Fragment>
             <Container fluid={true} className="fixedTopPage p-0">
               <div className="fixedTopPageOverlay">
                  <Container className="topContent">
                    <Row>
                       <Col className="text-center" lg={12} md={12} sm={12}>
                        
                         <h1 className='topPageTitle'>{this.props.pageTitle}</h1>
                        
                       </Col>
                    </Row>
                  </Container>
              </div>
            </Container>
          </Fragment>

        )
    }
}

export default PageTop;